import React from "react"
import "./Header.css"

const Header = () => {
	return (
		<header className="header">
			<ul>
			<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/tictactoe">Tic Tac Toe</a>
				</li>

				<li>
					<a href="/todo-list">ToDo List</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
