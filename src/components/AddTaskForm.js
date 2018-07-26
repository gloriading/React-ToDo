import React, {Component} from 'react';


function capitalize(sentence){
  let arr = sentence.split(' ');
  let capArr = arr.map(word=>{
    return word[0].toUpperCase() + word.slice(1)
  });
  return capArr.join(' ');
}

export default class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = { inputValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.inputValue === ""){
      alert('This input field cannot be blank');
    }else{
      let capitalizedInput = capitalize(this.state.inputValue);
      this.props.updateTodoList(capitalizedInput);
      this.setState({ inputValue: "" });
    }
  }

  render(){
    return(
      <form className="add-task-form" onSubmit={this.handleSubmit} >
        <input
          className="input-todo"
          type="text"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <input className="submit-btn" type="submit" value="Add Task" />
      </form>
    );
  }

}
