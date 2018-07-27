import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

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
      console.log(data);
      let apiTodos = data.map( obj => obj.title );
      this.setState({
        todos: apiTodos,
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
      currentTodos.indexOf(todo) != index
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
