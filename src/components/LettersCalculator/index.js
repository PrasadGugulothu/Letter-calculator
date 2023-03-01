// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {enterInput: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({enterInput: value})
  }

  render() {
    const {enterInput} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="head">
            Calculate the <br /> Letters <br /> you enter
          </h1>
          <label className="label">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="search-input"
            value={enterInput}
            onChange={this.onChangeInput}
          />
          <p className="count">No.of letters: {enterInput.length}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img-size"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
