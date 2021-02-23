import React from "react"
import styles from "./Home.module.css"

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<span>Here you can</span>
			<a href="/todo-list">plan your day</a>
			<span>or</span>
			<a href="/tictactoe">just relax</a>
		</div>
	)
}

export default Home
