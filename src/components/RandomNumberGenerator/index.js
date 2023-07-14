// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 99)
    this.setState({count: number})
    console.log(number)
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
