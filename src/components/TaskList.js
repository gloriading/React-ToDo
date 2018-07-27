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
      return <Task key={todo} todo={todo} onDeleteTask={this.onDeleteTask} index={index} />
    });

    if(this.props.isLoaded){
      return(
        <div className="task-list">
          {todolist}
        </div>
      );
    }else{
      return(
        <div className="loading">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      )
    }

  }

}
