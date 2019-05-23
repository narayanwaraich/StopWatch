import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props){
    super(props);
    this.state ={
      currentDate: new Date()
    }
  }

  render(){
    return (
      <p>StopWatch</p>
    );
  }
}

export default StopWatch;
