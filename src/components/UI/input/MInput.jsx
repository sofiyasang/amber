import React, { Component } from 'react'
import classes from './MInput.module.css'

const MInput = React.forwardRef((props, ref) => {
   return (
      <input {...props} ref={ref} className={classes.mInput}/>
    )

});

export default MInput;
