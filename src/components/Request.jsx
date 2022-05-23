import React, { useState } from "react";
import MButton from "./UI/button/MButton";

const Request = function(props) {
     return (
        <div className='field'>
        <div className='field_content'>
          <strong>
           {props.number}.{props.request.FIO}
          </strong>
          <div>
          {props.request.phone}
          </div>
          </div>
          <div className='field_btn'>
            <MButton onClick={() => props.remove(props.request)}>
              Удалить
            </MButton>
          </div>
      </div>
     )
}



export default Request;