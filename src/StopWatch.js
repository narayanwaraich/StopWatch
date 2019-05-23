import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props){
    super(props);
    this.state ={
      currentMinute: 5,
      currentSecond: 0
    }
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

  componentDidMount() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
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
      </div>
    );
  }
}

export default StopWatch;
