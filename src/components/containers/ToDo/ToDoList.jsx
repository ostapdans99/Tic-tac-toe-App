import React from "react"
import ToDoItem from "./ToDoItem"

const styles = {
	ul: {
		listStyle: "none",
		margin: 0,
		padding: 0,
	},
}

export default function ToDoList({ todosList, onToggle }) {
	return (
		<ul style={styles.ul}>
			{todosList.map((todo, index) => {
				return (
					<ToDoItem
						todoItem={todo}
						key={todo.id}
						index={index}
						onChange={onToggle}
					/>
				)
			})}
		</ul>
	)
}
