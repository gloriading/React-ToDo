import React, {Component} from 'react';

export default class Task extends Component {
  constructor(props){
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(){
    this.props.onDeleteTask(this.props.index);
  }

  render(){
    return(
      <div className="task-container">
        <p>{this.props.todo}<span onClick={this.deleteTask}>Delete</span></p>
      </div>
    );
  }
}
