import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props){
    super(props);
    this.state ={
      currentMinute: 5,
      currentSecond: 0,
      runCommand: 'pause',
      resetDisabled: false
    };
    this.runInterval = this.runInterval.bind(this);
    this.handleRunning = this.handleRunning.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  updateTimer() {
    let {currentMinute,currentSecond} = this.state;
    if (currentSecond===0 && currentMinute!==0) {
      this.setState({
        currentMinute: currentMinute-1,
        currentSecond: 59
      })
    } else if(currentSecond>0) {
      this.setState({
        currentMinute: currentMinute,
        currentSecond: currentSecond-1
      });
    };
    if (currentSecond===0 && currentMinute===0) {
      this.setState({
        runCommand: 'start'
      });
    }
  }

  runInterval(flag) {
    if (flag)
      this.interval = setInterval(() => { this.updateTimer(); }, 1000);
    else
      clearInterval(this.interval);
  }

  handleRunning() {
    //  pause request came in
    if (this.state.runCommand === 'pause') {
      this.runInterval(false);
      this.setState( {runCommand: 'start'} );
    }
    //  Start request came in
    else {
      //  if (00:00), reset to 05:00 & start timer
      if (this.state.currentMinute===0&&this.state.currentSecond===0) {
        this.setState({
          currentMinute: 5,
          currentSecond: 0,
          runCommand: 'pause',
          resetDisabled: false
        });
        this.runInterval(true);
      //  continue timer
      } else {
        this.runInterval(true);
        this.setState( {runCommand: 'pause'} );
      }
    }
  }

  handleReset() {
    this.setState({
      currentMinute: 0,
      currentSecond: 0,
      runCommand: 'start',
      resetDisabled: true
    });
    this.runInterval(false);
  }

  componentDidMount() {
    this.runInterval(true);
  }

  render(){
    return (
      <div>
        <h1>StopWatch</h1>
        <p>
          {this.state.currentMinute.toString().padStart(2, '0')}
          :
          {this.state.currentSecond.toString().padStart(2, '0')}
        </p>
        <p>
          <button onClick={this.handleRunning}>{this.state.runCommand}</button>
          <button disabled={this.state.resetDisabled} onClick={this.handleReset}>reset</button>
        </p>
      </div>
    );
  }
}

export default StopWatch;
