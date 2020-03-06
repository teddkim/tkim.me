import React from 'react'

const project = () => {
  return (
    <div className={`ui container divided items`}>
      <div className={`ui large header`}>Projects</div>
      <div className={'item'}>
        <div className={`content`}>
          <a className={`header`}>Major Qualifying Project (MQP)</a>
          <div className={`meta`}>
            <span className={`cinema`}>Worcester Polytechnic Institute, Worcester, MA</span>
            <span className={`cinema right floated`}>Aug 2018–Mar 2019</span>
          </div>
          <div className={`description`}>
            <p>• Worked in a team to conceptualize and create an android application in Java that allows members of the WPI community to aggregate all of their health data to get a complete view of their health progress.</p>
          </div>
          <div className={`extra`}>
            <div className={`ui label`}>Java</div>
            <div className={`ui label`}>Android Studio</div>
            <div className={`ui label`}>FXML</div>
            <div className={`ui label`}>Firebase</div>
          </div>
        </div>
      </div>

      <div className={'item'}>
        <div className={`content`}>
          <a className={`header`}>Interactive Qualifying Project(IQP)</a>
          <div className={`meta`}>
            <span className={`cinema`}>Boston Office of Energy and Envr. Affairs (OEEA), Boston, MA</span>
            <span className={`cinema right floated`}>Aug-Oct 2017</span>
          </div>
          <div className={`description`}>
            <p>• Evaluated the economic needs of wood product and tourism-based businesses in the Mohawk Trail Woodland Partnership on a team of three.</p>
            <p>• Validated sponsor’s $5 million business plans for Berkshire and Franklin counties. Recommend renewed and innovative programs.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default project
