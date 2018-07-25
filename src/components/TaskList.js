import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="task-list">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    );
  }

}
