import styles from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props;
  /*По суті можна видалити з деструктуризації і onClick, і title, оск вони передаються з самих кнопок*/
  return (
    <button
      {...props}
      /*↑ для всіх значень, які не деструктуризвали з props
      наприклад з компоненту TodoForm з кнопки type="submit"*/
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
