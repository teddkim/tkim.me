import React from 'react'

const preface = () => {
  return (
    <div>
      <h2 className='ui center aligned icon header'>
        <img className='ui circular image' alt='Ted' src={require('./images/me.jpeg')} />
        <div className='ui huge header'>Taehyun "Ted" Kim</div>
        <div className='sub header'>Worcester Polytechnic Institute</div>
        <div className='sub header'>Computer Science 19'</div>
      </h2>
      <a href='https://www.linkedin.com/in/ted-kim-b99228158/'>
        <button class='ui linkedin button'>
          <i class='linkedin icon' />
          LinkedIn
        </button>
      </a>
      <a href='https://github.com/teddkim'>
        <button class='ui GitHub button'>
          <i class='GitHub icon' />
          GitHub
        </button>
      </a>
      <a href='https://www.instagram.com/teddk16/'>
        <button class='ui instagram button'>
          <i class='instagram icon' />
          instagram
        </button>
      </a>
      <a href='https://www.facebook.com/profile.php?id=100006370214804'>
        <button class='ui facebook button'>
          <i class='facebook icon' />
          facebook
        </button>
      </a>
      <a href='mailto:tkim0896@gmail.com'>
        <button class='ui google button red'>
          <i class='google icon' />
          Gmail
        </button>
      </a>
    </div>
  )
}

export default preface
