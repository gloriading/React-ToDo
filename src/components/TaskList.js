import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    // console.log(this.props.todos);
    let todolist;
    todolist = this.props.todos.map(todo=>{
      return <Task key={todo} todo={todo} />
    });
    console.log(todolist);
    return(
      <div className="task-list">
        {todolist}
      </div>
    );
  }

}
