import Todo from './Todo.js';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo /* передається цілий обєкт зразу */}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
