import React, {Component} from 'react';

export default class AddTaskForm extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form className="add-task-form">
        <input className="input-todo" type="text" />
        <input className="submit-btn" type="submit" value="Add Task" />
      </form>
    );
  }

}
