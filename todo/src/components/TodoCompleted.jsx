import React from 'react';
import TodoItem from './TodoItem';

function TodoCompleted({items, onToggle, deleteTodo}) {
  return (
    <div className='todo-completed'> 
    { items.length > 0 ? <h1>Completed</h1> : '' }
       {items.map(el => el.completed && <TodoItem items = {items} todo = {el} index = {el.index} title = {el.title} onToggle={onToggle} deleteTodo = {deleteTodo}  />)}
     </div>
  )
}

export default TodoCompleted