import React, { Component } from 'react';

const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <InnerComponent {...this.props} />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

const Button = HOC((props) => <button>{props.children}</button>)

class Label extends Component {
  render(){
    return(
      <label>{this.props.children}</label>
    )
  }
}

const LabelHOC = HOC(Label);

export default App;