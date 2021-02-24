import React, { useState } from "react"
import ToDoList from "./ToDoList"
import Context from "./contextTodo"
import AddToDo from "./AddToDo"
import "./Todo.css"

export default function Todo() {
	const [todos, setTodos] = useState([])

	function toggleTodo(id) {
		console.log(id)
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			}),
		)
	}

	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title,
					id: Date.now(),
					completed: false,
				},
			]),
		)
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="wrapper todo-wrapper">
				<div className="todo">
					<AddToDo onCreate={addTodo} />
					{todos.length ? (
						<ToDoList todosList={todos} onToggle={toggleTodo} />
					) : (
						<p className = "no-todo">No todos</p>
					)}
				</div>
			</div>
		</Context.Provider>
	)
}
