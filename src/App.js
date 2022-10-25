import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm.js';
import TodoList from './components/Todos/TodoList.js';
import TodosActions from './components/Todos/TodosActions.js';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map(
        (e) =>
          e.id === id
            ? {
                ...e,
                isCompleted: !e.isCompleted,
              } /*деструктуризція обєкту та використання spread оператор */
            : {
                ...e,
              } /* за правилами React ми повинні міняти завжди стан, тому створюємо 
            новий обєкт з старими властивостями за доп spread оператору */
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((e) => !e.isCompleted));
  };

  const completedTodosCount = todos.filter((e) => e.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length === 0 || (
        <TodosActions
          completedTodosExist={!!completedTodosCount /*конвертує в bool*/}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
          !
        </h2>
      )}
    </div>
  );
}

export default App;
