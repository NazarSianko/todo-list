import React,{useState} from 'react';

function AddTodo({onCreate}) {
    const [value,setValue] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    }
  return (
    <form class="todo-input" onSubmit={submitHandler}>
    <input type="text" class="todo-input" value = {value} onChange ={(e) => setValue(e.target.value)}></input>
    <button class="todo-btn">Add</button>
</form>
  )
}

export default AddTodo