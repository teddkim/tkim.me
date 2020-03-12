import React from 'react'

const personal = () => {
  return (
    <div>
      <div className={`ui large header`}>
      Personal Projects
      <br />
      </div>
      <div className={`ui card`}>
        <div className={`image`}>
          <img alt='photo of a project' src={require('./images/personal1.png')} />
        </div>
        <div className={`content`}>
          <a className={`header`} href='https://github.com/teddkim/ReactPhotos'>Dynamic Photo Arrangement</a>
          <div className={`meta`}>
            <span className={`date`}>in March 2020</span>
          </div>
          <div className={`description`}>
          Used React application to dynamically arrange photos recieved from Unsplashed API
        </div>
        </div>
        <div className={`extra content`}>
          <a>
            <div className={`ui label`}>React</div>
            <div className={`ui label`}>API</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default personal
