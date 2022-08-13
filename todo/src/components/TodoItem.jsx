import React from 'react'

function TodoItem({todo, onToggle, deleteTodo}) {
   
  return (
    <li class="todo-item">
    <span className={todo.completed ? 'done' : ''}><input checked={todo.completed} type="checkbox" name ='item' onChange={()=> onToggle(todo.id)} ></input>
    <strong >{todo.id}</strong>
    &nbsp;
    {todo.title}
</span>
    <button class="delete-item" onClick={()=> deleteTodo(todo.id)}>&times;</button>
</li>
  )
}

export default TodoItem