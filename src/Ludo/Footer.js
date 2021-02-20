import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                {
                    this.props.status !== "" ? <h1>{this.props.status}</h1> : <div className="turn">Player {this.props.footerText}'s Turn</div>
                }
                <button className="reset" onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

export default Footer
