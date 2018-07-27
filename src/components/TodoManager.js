import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import {Capitalize} from './Capitalize';


export default class TodoManager extends Component {
  constructor(props){
    super(props);
    const todos = [ "Do Dishes", "Take Out Trash", "Make the Bed", "Do Laundry"];

    this.state = {
      todos: todos,
      newTodo: "",
      isLoaded: false
    };
    this.updateTodoList = this.updateTodoList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      let apiTodos = data.map( obj => Capitalize(obj.title) );
      let arrLength = apiTodos.length;
      let numberOfTodo = 10;
      let partialApiTodos = apiTodos.slice(arrLength-numberOfTodo);
      this.setState({
        todos: partialApiTodos,
        isLoaded: true
       });
    })
  }

  updateTodoList(taskReceied){
    this.setState({
      todos: [...this.state.todos, taskReceied]
    });
  }

  deleteTask(index){
    let currentTodos = this.state.todos;
    let filteredTodos = currentTodos.filter(todo=>
      currentTodos.indexOf(todo) !== index
    );
    this.setState({ todos: filteredTodos });
  }

  render(){
    return(
      <div className="todo-manager">
        <div className="header">
          <h1> <span className="whiteText">React</span> To-Do </h1>
        </div>
        <AddTaskForm updateTodoList={this.updateTodoList} />
        <TaskList
          todos={this.state.todos}
          onDeleteTask={this.deleteTask}
          isLoaded={this.state.isLoaded}
         />
      </div>
    );
  }

}
