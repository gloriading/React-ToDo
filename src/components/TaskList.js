import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {
  constructor(props){
    super(props);

    this.onDeleteTask = this.onDeleteTask.bind(this);

  }

  onDeleteTask(index){
    this.props.onDeleteTask(index);
  }

  render(){

    let todolist;
    todolist = this.props.todos.map((todo, index)=>{
      return <Task key={todo} todo={todo} onDeleteTask={this.onDeleteTask} index={index}/>
    });

    return(
      <div className="task-list">
        {todolist}
      </div>
    );
  }

}
