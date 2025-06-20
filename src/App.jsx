import React , { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import './App.css'
import { TodoForm, TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=> [{id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    )
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleComplete = (id) =>{
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        // clearCompleted,
        // toggleAll,
        // setCount,
        // count,
      }}
    >
      <div
        className="min-h-screen py-8 "
       style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div  key={todo.id} className='w-full'>

                <TodoItems
                 
                  todo={todo}
                  // toggleComplete={toggleComplete}
                  // deleteTodo={deleteTodo}
                  // updateTodo={updateTodo}
                />
              </div>

            ))}
            {/* <TodoItems /> */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App

// linear-gradient(to right, rgb(254, 240, 138), rgb(250, 204, 21), rgb(161, 98, 7))