// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {value1: 0, value2: 0}

  onMangoFruit = () => {
    this.setState(prevState => {
      console.log(`prevState value1: ${prevState.value1}`)
      return {value1: prevState.value1 + 1}
    })
  }

  onBananaFruit = () => {
    this.setState(prevState => {
      console.log(`prevState value2 : ${prevState.value2}`)
      return {value2: prevState.value2 + 1}
    })
  }

  render() {
    const {value1, value2} = this.state
    return (
      <div className="fruit-app-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="c-value">{value1}</span> mangoes
            <span className="c-value">{value2}</span> bananas
          </h1>
          <div className="fruit-content">
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onMangoFruit}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaFruit}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
