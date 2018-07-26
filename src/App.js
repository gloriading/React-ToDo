import React, { Component } from 'react';
import './App.css';
import TodoManager from './components/TodoManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoManager />
        <footer>
          <p className="logo">&copy; <span className="pinkText">Glorious</span> Web Design</p>
        </footer>

      </div>
    );
  }
}

export default App;
