// src/App.tsx

import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


