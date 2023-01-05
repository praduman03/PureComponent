import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {

  constructor(props){
    super(props);

    this.state = {
      toggle:false,
      count:0
    }
  }

  handleToggle = ()=>{
    if(this.state.toggle ===false){
    this.setState({
      toggle:true
    })
  }
  else{
    this.setState({
      toggle:false
    })
  }}

  handleCounter = ()=>{
    if(this.state.toggle===true){
      this.setState({
        count:this.state.count+1
      })
    }
    else{
      this.setState({
        count:this.state.count
      })
    }
  }
  


  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <h1>Pure Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    )
  }
}