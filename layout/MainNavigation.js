import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const navigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Todo List</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todo Page</Link>
          </li>
          <li>
            <Link to="/add-todo">Add Todo</Link>
          </li>
          <li>
            <Link to="/priority">Priority</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navigationBar;
