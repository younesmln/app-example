import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    /*     console.log('mount');
    const id = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 500);
    setTimeout(() => {
      clearInterval(id);
    }, 5000); */
  }

  render() {
    console.log('render');
    return this.state.counter;
  }
}

export default Counter;
