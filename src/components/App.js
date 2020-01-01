import React, { useState } from 'react';
import uuid from 'uuid/v1';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const onEnterPress = event => {
    if (event.keyCode === 13) {
      const newTodo = event.target.value;
      setTodos([...todos, newTodo]);
      console.log('new todo added : ', newTodo);
      setValue('');
    }
  };

  const onInputChange = event => {
    setValue(event.target.value);
  };

  const onTodoClick = event => {
    event.target.style.textDecoration = 'none';
  };

  const renderTodos = () => {
    return todos.map(todo => {
      return (
        <li key={uuid()} onClick={onTodoClick}>
          {todo}
        </li>
      );
    });
  };

  return (
    <div className="container">
      <h1>Todos App</h1>
      <input
        type="text"
        value={value}
        onKeyUp={onEnterPress}
        onChange={onInputChange}
      />
      <ul className="todos">{renderTodos()}</ul>
    </div>
  );
};

export default App;
