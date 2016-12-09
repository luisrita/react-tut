import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {items: []}
  }

  componentWillMount() {
    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results:items}) => this.setState({items}))
  }

  filter(e) {
    this.setState({filter: e.target.value});
  }

  render() {
    let items = this.state.items
    if(this.state.filter) {
      items = items.filter(
        item => item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return(
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map((item, i) => <h4 key={i}>{item.name}</h4>)}
      </div>
    )
  }
}

App.defaultProps = { val: 0}

export default App;