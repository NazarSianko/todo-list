import React from 'react';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  document.title = 'Todo-list';
  return (
    <div class="wrapper">
      <h1 class="todo-title">Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
