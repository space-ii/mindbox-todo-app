import { AddTodo } from "features/AddTodo";
import { Footer } from "widgets/Footer";
import { TodoList } from "widgets/TodoList";
import styles from './TodosPage.module.scss';

export const TodosPage = () => {
    return (
        <>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.wrapper}>
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
        </>
    )
}
