import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
  renderTodos = () => {
      return this.props.todos.map(todo => {
          return <Todo text={todo}></Todo>
    })
  }

  render() {
      console.log(this.props)
    return(
      <div>
          {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
} 

export default connect(mapStateToProps)(TodosContainer);