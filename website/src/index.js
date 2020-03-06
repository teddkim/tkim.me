import React from 'react'
import ReactDOM from 'react-dom'
import Experience from './experience'
import Project from './project'

class App extends React.Component {

  render () {
    return (
      <div className={`ui container`}>
        <Experience />
        <Project />
      </div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
