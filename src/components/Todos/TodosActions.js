import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button.js';
import styles from './TodosActions.module.css';

function TodosActions({
  completedTodosExist,
  resetTodos,
  deleteCompletedTodos,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title={'Reset all Todos'} onClick={resetTodos}>
        <RiRefreshLine />
        {/*↑ children */}
      </Button>
      <Button
        title={'Delete completed Todos'}
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
