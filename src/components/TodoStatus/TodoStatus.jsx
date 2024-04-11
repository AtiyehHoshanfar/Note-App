import styles from "./TodoStatus.module.css";

function TodoStatus({ todos }) {
  return (
    <div className={styles.TodoStatus__container}>
      <ul className={styles.TodoStatus__items}>
        <li className={styles.TodoStatus__item}>
          <div className={styles.TodoStatus__count}>{todos.length}</div>
          <span className={styles.TodoStatus__label}>All</span>
        </li>
        <li className={styles.TodoStatus__item}>
          <div className={styles.TodoStatus__count}>
            {todos.filter((todo) => todo.completed).length}
          </div>
          <span className={styles.TodoStatus__label}>Completed</span>
        </li>
        <li className={styles.TodoStatus__item}>
          <div className={styles.TodoStatus__count}>
            {todos.filter((todo) => !todo.completed).length}
          </div>
          <span className={styles.TodoStatus__label}>Open</span>
        </li>
      </ul>
    </div>
  );
}

export default TodoStatus;
