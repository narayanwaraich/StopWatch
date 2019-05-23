import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props){
    super(props);
    this.state ={
      currentMinute: 5,
      currentSecond: 0,
      runCommand: 'pause'
    };
    this.runInterval = this.runInterval.bind(this);
    this.handleRunning = this.handleRunning.bind(this);
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
  }

  runInterval(flag) {
    if (flag)
      this.interval = setInterval(() => { this.updateTimer(); }, 1000);
    else
      clearInterval(this.interval);
  }

  handleRunning() {
    if (this.state.runCommand === 'pause') {
      this.runInterval(false);
      this.setState( {runCommand: 'play'} );
    }
    else {
      this.runInterval(true);
      this.setState( {runCommand: 'pause'} );
    }
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
        <p><button onClick={this.handleRunning}>{this.state.runCommand}</button></p>
      </div>
    );
  }
}

export default StopWatch;
