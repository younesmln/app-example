import React from 'react';
import PropTypes from 'prop-types';

//className="todo-item--done"

export class List extends React.Component {
  render() {
    const doneHandler = this.props.doneHandler;
    const deleteThisItem = this.props.deleteThisItem;
    const lis = this.props.items.map(item => (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => doneHandler(item.id)}
        />
        <span className={item.done ? 'todo-item--done' : ''}>{item.text}</span>
        <button onClick={() => deleteThisItem(item.id)}>X</button>
      </li>
    ));
    return <ul>{lis} </ul>;
  }
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      todos: [{ text: this.props.initial, done: true, id: this.id }],
      inputText: ''
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log(this.state.todos);
  }

  addTodo = () => {
    const { todos, inputText } = this.state;
    this.id = this.id + 1;
    const newTodo = { text: inputText, done: false, id: this.id };
    const newTodos = todos.concat(newTodo);
    this.setState({ todos: newTodos });
  };

  todoTextHandler = e => {
    const typedText = e.target.value;
    this.setState({ inputText: typedText });
  };

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  markItDone = id => {
    //const newTodos = [...this.state.todos];
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todo = this.state.todos[index];
    todo.done = !todo.done;
    this.setState({ todos: this.state.todos });
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
        <List
          items={this.state.todos}
          deleteThisItem={this.deleteTodo}
          doneHandler={this.markItDone}
        />
      </React.Fragment>
    );
  }
}

Todos.defaultProps = {
  initial: "I'm a default value"
};

Todos.propTypes = {
  initial: PropTypes.string
};

export default Todos;
