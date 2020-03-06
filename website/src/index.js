import React from 'react'
import ReactDOM from 'react-dom'
import Experience from './experience'
import Project from './project'
import Greeting from './greeting'

class App extends React.Component {
  state = {time: new Date().toLocaleTimeString(), hour: new Date().getHours() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  renderContent() {
    return <Greeting hour={this.state.hour} />;
  }

  render () {
    return (
      <div className={`ui container`}>
        {this.renderContent()}
        <Experience />
        <Project />
      </div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
