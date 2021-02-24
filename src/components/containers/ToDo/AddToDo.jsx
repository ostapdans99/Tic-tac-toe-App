import React, { useState } from "react"

export default function AddToDo({ onCreate }) {
	const [value, setValue] = useState("")

	function submitHandler(event) {
		event.preventDefault()

		if (value.trim()) {
			onCreate(value)
			setValue("")
		}
	}

	return (
		<form className="add-todo" onSubmit={submitHandler}>
			<input
				type="text"
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<button type="submit">Add todo</button>
		</form>
	)
}
