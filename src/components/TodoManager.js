import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

export default class TodoManager extends Component {
  constructor(props){
    super(props);
    const todos = [ "Do Dishes", "Take Out Trash", "Make the Bed", "Do Laundry"];

    this.state = {
      todos: todos,
      newTodo: ""
    };
    this.updateTodoList = this.updateTodoList.bind(this);
  }

  updateTodoList(taskReceied){
    this.setState({
      todos: [...this.state.todos, taskReceied]
    });
  }

  render(){
    return(
      <div className="todo-manager">
        <div className="header">
          <h1> <span className="whiteText">React</span> To-Do </h1>
        </div>
        <AddTaskForm updateTodoList={this.updateTodoList} />
        <TaskList todos={this.state.todos} />
      </div>
    );
  }

}
