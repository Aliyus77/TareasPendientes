import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";

function AppUI() {
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
            {({ 
                error, 
                loading, 
                searchedTodos, 
                completeTodo, 
                deleteTodo, 
            }) => (
                <TodoList>
                    {error && <p>Hubo un error, desespérate...</p>}
                    {loading && <p>Estamos cargando, no desesperes..</p>}
                    {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}
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
            )}
        </TodoContext.Consumer>

        <CreateTodoButtom />
    </React.Fragment>
    );
}

export { AppUI };
