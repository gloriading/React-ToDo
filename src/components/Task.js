import React from 'react';

const Task = (props) => {
  return (
    <div className="task-container">
      <p>{props.todo}</p>
    </div>
  )
}

export default Task;
