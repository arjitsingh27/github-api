






// import React, { useState } from 'react'
// import Square from './Square'

// function GameBoard() {
//     const [currentPlayer, setCurrentPlayer] = useState("X")
//     const [move, setMove] = useState(0)
//     const emptyGame = [
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null },
//         { value: null }
//     ]
//     const [gameState, setGameState] = useState(emptyGame)

//     const executeMove = (index) => {
//         let newGameState = gameState
//         if (newGameState[index].value === null) {
//             newGameState[index].value = currentPlayer
//             setGameState(newGameState)
//             let nextPlayer = currentPlayer === "X" ? "0" : "X"
//             setCurrentPlayer(nextPlayer)
//             let result = chechWinOrDraw()
//             if (result !== false) {
//                 alert(`Player ${result} Wins`)
//             }
//             let moveNumber = move + 1
//             setMove(moveNumber)
//             if (moveNumber === 9) {
//                 alert("Game is Draw")
//             }
//         }

//     }

//     const chechWinOrDraw = () => {
//         let win = false
//         if (gameState[0].value === gameState[1].value && gameState[1].value === gameState[2].value) {
//             win = gameState[0].value
//         }
//         return win
//     }

//     return (
//         <>
//             <div className="col-md-12 col-12">
//                 <h2>Current Player : {currentPlayer}</h2>
//                 <button onClick={e => setGameState(emptyGame)}>Restart</button>
//             </div>

//             <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
//                 {gameState.map((square, key) => (
//                     <Square key={key} gameState={gameState} index={key} executor={executeMove} />
//                 ))}
//             </div>
//         </>
//     )
// }

// export default GameBoard




// import Square from './Square'
// import React, { Component } from 'react'

// class Board extends React.Component {
//     renderSquare(i) {
//       return (
//         <Square
//           value={this.props.squares[i]}
//           onClick={() => this.props.onClick(i)}
//         />
//       );
//     }
  
//     render() {
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }

// export default Board



