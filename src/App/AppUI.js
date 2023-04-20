import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";
import { Modal } from "../Modal";
import { TodosError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal, 
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {!loading && !searchedTodos.length && <EmptyTodos />}
            {searchedTodos.map((todo) => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        {!!openModal && (         
            <Modal>
                <TodoForm />
            </Modal>
        )}        
        
        <CreateTodoButtom 
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export { AppUI };
