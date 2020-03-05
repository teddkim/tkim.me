import React from 'react'
import ReactDOM from 'react-dom'
import Experience from './experience'

class App extends React.Component {

  render () {
    return (<div className={`ui container`}><div className={`ui large header`}>Experience</div> <Experience /></div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
