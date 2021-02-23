import React, { useState } from "react"
import Board from "../GameTicTacToe/Board"
import "./GameTicTacToe.css"
import { calculateWinner } from "../GameTicTacToe/findWinner"

const GameTicTacToe = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)
	const winner = calculateWinner(board)

	const handleClick = index => {
		const boardCopy = [...board]

		// Опред был ли клик по ячейке или игра окончена
		if (winner || boardCopy[index]) return
		
		//Определяем чей ход: X ? O
		boardCopy[index] = xIsNext ? "X" : "O"

		//Обновляем стейт
		setBoard(boardCopy)
		setXIsNext(!xIsNext)
	}

	const startNewGame = () => {
		return (
			<button
				className="start-btn"
				onClick={() => setBoard(Array(9).fill(null))}
			>
				Очистить поле
			</button>
		)
	}

	return (
		<div className="wrapper">
			{startNewGame()}
			<Board squares={board} click={handleClick} />
			<p className="game-info">
				{winner
					? "Победитель: " + winner
					: "Сейчас ходит: " + (xIsNext ? "X" : "O")}
			</p>
		</div>
	)
}

export default GameTicTacToe
