// Write your code here
import './index.css'
import {Component} from 'react'
class CoinToss extends Component {
  state={toss:"https://assets.ccbp.in/frontend/react-js/heads-img.png",total:0,heads:0,tails:0}
  updatescore=()=>
  {
    const value=Math.round((Math.random()*1))
    if(value===0)
    {
      this.setState((prevState)=>
      {
        return {toss:"https://assets.ccbp.in/frontend/react-js/heads-img.png",total:prevState.total+1,heads:prevState.heads+1}
      })
    }
    else
    {
      this.setState((prevState)=>
      {
        return {toss:"https://assets.ccbp.in/frontend/react-js/tails-img.png",total:prevState.total+1,tails:prevState.tails+1}
      })
    }

  }
  render() {
    const {toss,total,heads,tails}=this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={toss}
            className="coinImg"
            alt="toss result"
          />
          <button className="btn" onClick={this.updatescore}>Toss Coin</button>
          <div className="result-container">
            <p className="para1">Total:{total}</p>
            <p className="para1">Heads:{heads}</p>
            <p className="para1">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
