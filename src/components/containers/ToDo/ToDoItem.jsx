import React, { useContext } from "react"
import Context from "./contextTodo"

export default function ToDoItem({ todoItem, index, onChange }) {
	const classes = ["todo-item"]
	const { removeTodo } = useContext(Context)

	if (todoItem.completed) {
		classes.push("done")
	}

	return (
		<li className={classes.join(" ")}>
			<label>
				<input
					type="checkbox"
					checked={todoItem.completed}
					onChange={() => onChange(todoItem.id)}
				/>
				<div className ="checked">
					<i class="fas fa-check" aria-hidden="true"></i>
				</div>
			</label>

			<strong>{index + 1}</strong>
			{todoItem.title}

			<button className="delete" onClick={() => removeTodo(todoItem.id)}>
				<i class="fas fa-trash"></i>
			</button>
		</li>
	)
}
