import React from 'react';

export class List extends React.Component {
  render() {
    const deleteThisItem = this.props.deleteThisItem;
    const lis = this.props.items.map(item => (
      <li key={item}>
        {item} <button onClick={() => deleteThisItem(item)}>X</button>
      </li>
    ));
    return <ul>{lis} </ul>;
  }
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: ['todo 1'], inputText: '' };
  }

  componentDidMount() {}

  addTodo = () => {
    const { todos, inputText } = this.state;
    const newTodos = todos.concat(inputText);
    this.setState({ todos: newTodos });
  };

  todoTextHandler = e => {
    const typedText = e.target.value;
    this.setState({ inputText: typedText });
  };

  deleteTodo = text => {
    const newTodos = this.state.todos.filter(todo => todo !== text);
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="type something todo"
          value={this.state.inputText}
          onChange={this.todoTextHandler}
        />
        <button onClick={this.addTodo}>add</button>
        <List items={this.state.todos} deleteThisItem={this.deleteTodo} />
      </React.Fragment>
    );
  }
}

export default Todos;
