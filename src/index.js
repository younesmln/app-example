import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Header from './Header';
import Todos from './Todos';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    console.log('render');
    return <h3>hello</h3>;
  }
}

ReactDOM.render(
  <div className="container">
    {/* <LifeCycle /> */}
    <Todos start={5} />
  </div>,
  document.getElementById('root')
);
