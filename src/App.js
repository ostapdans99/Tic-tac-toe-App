import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/containers/Home"
import GameTicTacToe from "./components/containers/GameTicTacToe/GameTicTacToe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Todo from "./components/containers/ToDo/Todo"

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/tictactoe" component={GameTicTacToe} />
					<Route exact path="/todo-list" component={Todo} />
				</Switch>
			</Router>
			<Footer />
		</div>
	)
}

export default App
