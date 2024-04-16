import React, { Component } from 'react';

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    console.log('constructor() called');
  }

  componentDidMount() {
    console.log('componentDidMount() called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps() called');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate() called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate() called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate() called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() called');
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      messages: [...prevState.messages, 'Button clicked']
    }));
  }

  render() {
    console.log('render() called');
    const { messages } = this.state;
    return (
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <button onClick={this.handleButtonClick}>Click me</button>
      </div>
    );
  }
}

export default LifeCycleComponent;