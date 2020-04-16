import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addOneToCount = this.addOneToCount.bind(this);
  }
  addOneToCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h1>The counter count is: {this.state.count}</h1>

        <button onClick={this.addOneToCount}>Add 1</button>
      </div>
    );
  }
}

export default CounterClass;
