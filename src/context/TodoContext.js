import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: "Learn React",
        completed: false
    }, {
        id: 2,
        title: "Learn React 2",
        completed: false
    }, {
        id: 3,
        title: "Learn React 3",
        completed: false
    }],
    addTodo: (todo) => {},
    toggleComplete: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id , todo) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;