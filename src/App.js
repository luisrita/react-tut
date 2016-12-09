import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {increasing: false}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: this.props.val < nextProps.val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }

  update() {
    ReactDOM.render(<App val={this.props.val+1} />, document.getElementById('root'));
  }

  render() {
    console.log(this.state.increasing);
    return(
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
}

App.defaultProps = { val: 0}

export default App;