import React from 'react'

const experience = () => {
  return (
    <div className={`ui container divided items`}>
      <div className={'item'}>
        <div className={'image'}>
          <img src='/images/wireframe/image.png' />
        </div>
        <div className={`content`}>
          <a className={`header`}>Office Technical Assistant</a>
          <div className={`meta`}>
            <span className={`cinema`}>WPI Data Science Office, Worcester, MA</span>
            <span className={`cinema right floated`}>Jan 2016-May 2019</span>
          </div>
          <div className={`description`}>
            <p>• Managed and Formatted the WPI Data Science webpage using Content Management System (CMS) and HTML.</p>
            <p>• Electronically filed and organized all of the data science Masters and Ph.D. students’ files. Developed PowerPoint
          and Excel for several data science-related functions.</p>
          </div>
          <div className={`extra`}>
            <div className={`ui label`}>CMS</div>
            <div className={`ui label`}>HTML</div>
          </div>
        </div>
      </div>

      <div className={'item'}>
        <div className={'image'}>
          <img src='/images/wireframe/image.png' />
        </div>
        <div className={`content`}>
          <a className={`header`}>Intern</a>
          <div className={`meta`}>
            <span className={`cinema`}>Morf3D, El Segundo, CA</span>
            <span className={`cinema right floated`}>Jun-Aug 2016</span>
          </div>
          <div className={`description`}>
            <p>• Developed an algorithm that calculates the total building time of a 3D model part using parametric
analysis of width, length, height, and volume.</p>
          </div>
          <div className={`extra`}>
            <div className={`ui label`}>Microsoft Excel</div>
            <div className={`ui label`}>Microsoft PowerPoint</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default experience
