// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed <= 190) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  brake = () =>
    this.setState(prevState => {
      if (prevState.speed >= 10) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="heading2">Speed is {speed}mph</h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
