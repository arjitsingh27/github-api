import React, { Component } from 'react'
import GridItem from './GridItem'
import './gridrow.css'

class GridRow extends Component {
    render() {
        // let gridRow = [<GridRow />, <GridRow />, <GridRow />]
        return (
            <div className="grid-row">
                {
                    this.props.row.map((col, colIndex) => (
                        <GridItem colText={col} rowIndex={this.props.rowIndex} colIndex={colIndex} handleClicked={this.props.handleClicked}/>
                    ))
                }
            </div>
        )
    }
}

export default GridRow

