import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/containers/Home"
import GameTicTacToe from "./components/containers/GameTicTacToe/GameTicTacToe"
import ToDoList from "./components/containers/ToDoList"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/tictactoe" component={GameTicTacToe} />
					<Route exact path="/todo-list" component={ToDoList} />
				</Switch>
			</Router>
			<Footer />
		</div>
	)
}

export default App
