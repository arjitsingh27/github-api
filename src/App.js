import React, { Component } from 'react'
import GridRow from './Ludo/GridRow'
import './App.css';
import Header from './Ludo/Header';
import Footer from './Ludo/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn: "X",
      status: "",
      count: 1,
    }
  }


  handleClicked = (rowIndex, colIndex) => {
    const copyGrid = [...this.state.gameState];
    if (copyGrid[rowIndex][colIndex] === "" && this.state.status === "") {
      this.setState({
        count: this.state.count + 1,
      });

      copyGrid[rowIndex][colIndex] = this.state.playerTurn;
      this.setState({
        grid: copyGrid,
      });


      let curr = this.state.playerTurn;
      let match = curr + curr + curr;
      if (
        copyGrid[0][0] + copyGrid[0][1] + copyGrid[0][2] === match ||
        copyGrid[1][0] + copyGrid[1][1] + copyGrid[1][2] === match ||
        copyGrid[2][0] + copyGrid[2][1] + copyGrid[2][2] === match ||
        copyGrid[0][0] + copyGrid[1][0] + copyGrid[2][0] === match ||
        copyGrid[0][1] + copyGrid[1][1] + copyGrid[2][1] === match ||
        copyGrid[0][2] + copyGrid[1][2] + copyGrid[2][2] === match ||
        copyGrid[0][0] + copyGrid[1][1] + copyGrid[1][2] === match ||
        copyGrid[0][2] + copyGrid[1][1] + copyGrid[2][0] === match
      ) {
        this.setState({
          status: `Player ${this.state.playerTurn} Has Won`,
        });
      } else if (this.state.count === 9) {
        this.setState({
          status: `It's Draw`,
        });
      }
      this.setState({
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
      });
    }
  };
  palyAgain() {
    window.location.reload();
  }


  render() {
    // let gridRow = [<GridRow />, <GridRow />, <GridRow />]
    return (
      <div className="container">
        <Header />
        <div id="board">
          {
            this.state.gameState.map((row, rowIndex) => (
              <GridRow row={row} rowIndex={rowIndex} handleClicked={this.handleClicked} />
            ))
          }
        </div>
        <Footer footerText={this.state.playerTurn} status={this.state.status} reset={this.palyAgain}/>
      </div>
    )
  }
}

export default App



