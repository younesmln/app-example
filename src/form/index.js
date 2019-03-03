import React from 'react';

class MyForm extends React.Component {
  state = {
    name: '',
    age: '',
    isEdit: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isEdit: !this.state.isEdit });
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
        {this.state.isEdit ? (
          <input type="text" name="age" value={age} onChange={this.ageChange} />
        ) : (
          this.state.name
        )}
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MyForm;
