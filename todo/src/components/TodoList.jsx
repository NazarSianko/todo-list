import React from 'react';
import TodoItem from './TodoItem';
import {useState} from 'react';
import AddTodo from './AddTodo';
import TodoCompleted from './TodoCompleted';




function TodoList() {
    let [todos, setTodos] = useState([
        {id:1, completed: false, title: "asdad"},
        {id:2, completed: false, title: "asdsddddad"},
        {id:3, completed: false, title: "asdDSAad"},
    ])
    
    const addTodo = (title) => {
        setTodos(todos.concat({id:todos.length == 0 ? 1 : todos[todos.length-1].id +1 , completed:false, title: title}))
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter( el=> el.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
           return todo
        }))
    }
    
   
  return (
    <div className='todo'>
        <AddTodo onCreate ={addTodo}/>
        { todos.length > 0 ? 
        <ul class="todo-list">
        {todos.map(el=>  el.completed || <TodoItem items = {todos} todo = {el} index = {el.index} title = {el.title} onToggle={toggleTodo} deleteTodo = {deleteTodo} />)}
        </ul> 
        : <div className='nothing'>Nothing to do</div>
        }
        <TodoCompleted items = {todos}  onToggle={toggleTodo} deleteTodo = {deleteTodo} />
    </div>
  )
}

export default TodoList;