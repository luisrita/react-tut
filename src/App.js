import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { a: '', b: '' };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }

  render() {
    return (
      <div>
        <Input 
          ref={component => this.a = component} 
          update={this.update} 
        />
        <span>{this.state.a}</span>
        <hr />
        <input ref="b" type="text" onChange={this.update} />
        <span>{this.state.b}</span>
      </div>
    )
  }
}

class Input extends Component {
  render() {
    return <input type="text" ref="input" onChange={this.props.update} />
  }
}

export default App;