import React from 'react';

class MyForm extends React.Component {
  state = {
    name: '',
    age: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  nameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.nameChange}
        />
        <input type="text" name="age" value={age} onChange={this.ageChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MyForm;
