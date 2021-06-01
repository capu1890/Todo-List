import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import AddTodoPage from './pages/AddTodoPage';
import PriorityPage from './pages/PriorityPage';
import TodoPage from './pages/TodoPage'; 
import styles from './index.module.css'


function App() {
  return (
    <Layout className={styles}>
      <Switch>
        <Route path="/" exact>
          <TodoPage />
        </Route>
        <Route path="/add-todo">
          <AddTodoPage />
        </Route>
        <Route path="/priority">
          <PriorityPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
