import React from "react"
import GameTicTacToe from "./components/GameTicTacToe"
import Header from "./components/Header"
import "./App.css"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ToDoList from "./components/ToDoList"
import Home from './components/Home'

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
