import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Contact App</h1>
      <p>
        <span>React</span> | Contact App
      </p>
    </header>
  );
}

export default Header;
