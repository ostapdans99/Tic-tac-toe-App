import React from "react"
import Square from "./Square"

const Board = ({ squares, click }) => {
	return (
		<div className="board">
			{squares.map((square, index) => (
				<Square kei={index} value={square} onClick={() => click(index)} />
			))}
		</div>
	)
}

export default Board
