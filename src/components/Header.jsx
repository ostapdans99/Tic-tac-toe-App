import React from "react"
import "./Header.css"

const Header = () => {
	return (
		<header className="header">
			<nav>
				<ul>
					<li>
						<a href="/tictactoe">Tic Tac Toe</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/todo-list">ToDo List</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
