// src/containers/TodosContainer.js
import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.todos
      })
    })
  }
  	
	createTodo(newBody) {
	//console.log('creating todo', newBody)
	  let newTodo = {
	    body: newBody,
	    completed: false
	  }
	  TodoModel.create(newTodo).then((res) => {
	    console.log('created todo', res)
	    let todos = this.state.todos
	    let newTodos = todos.push(res)
	    this.setState({newTodos})
	  })
	}
  

  render(){
    return (
      <div className='todosContainer'>
      <CreateTodoForm createTodo={this.createTodo.bind(this)} />
        <h2>This is the todos container</h2>
        <TodoList
          todos={this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer