import React from 'react';
import SearchInput from './SearchInput';

const x = 'hello hello';

class Add extends React.Component {
  render() {
    const a = this.props.a;
    const b = this.props.b;
    return (
      <p>
        {a} + {b} = {a + b}
      </p>
    );
  }
}

const products = ['product 1', 'product 2', 'product 3'];

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>hello to my website</h1>
        <SearchInput InputPlaceholder={x} test="hello" test1={x} />
        <Add a={4} b={6} />
        <Add a={4} b={28} />
        <List items={products} />
        <List items={['test1', 'test2']} />
      </div>
    );
  }
}
// export const x = 5;
export default Header;
