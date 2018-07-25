import React, {Component} from 'react';


export default class Task extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="task-container">
        <p>{this.props.todo}</p>
      </div>
    );
  }

}
