import React, { Component } from 'react';

class ChildLifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    console.log('child component constructor() called');
  }

  componentDidMount() {
    console.log('child componentDidMount() called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('child getDerivedStateFromProps() called');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate() called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('child getSnapshotBeforeUpdate() called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('child componentDidUpdate() called');
  }

  componentWillUnmount() {
    console.log('chidl componentWillUnmount() called');
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

export default ChildLifeCycleComponent;