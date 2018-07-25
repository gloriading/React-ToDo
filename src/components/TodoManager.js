import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

export default class TodoManager extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="todo-manager">
        <div className="header">
          <h1> <span className="whiteText">React</span> To-Do </h1>
        </div>
        <AddTaskForm />
        <TaskList />
      </div>
    );
  }

}
