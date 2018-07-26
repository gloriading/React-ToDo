import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {

  render(){

    let todolist;
    todolist = this.props.todos.map(todo=>{
      return <Task key={todo} todo={todo} />
    });

    return(
      <div className="task-list">
        {todolist}
      </div>
    );
  }

}
