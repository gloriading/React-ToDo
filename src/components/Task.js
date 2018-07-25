import React, {Component} from 'react';

export default class Task extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="task-container">
        <p>This is a sample task 1</p>
      </div>
    );
  }

}
