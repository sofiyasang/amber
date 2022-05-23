import React, { Component } from 'react'
import classes from './MButton.module.css'

const MButton = ({children, ...props}) => {
    return(
    <div>
     <button {...props} className={classes.mBtn}>
          {children}
      </button>
    </div>
    )

}


export default MButton;
