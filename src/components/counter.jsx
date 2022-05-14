import React, { useState } from "react";

const Counter = function(props) {
    //  const[count,setLike] = useState(0);
     return (
        //  <div>
        //      <h1>{count}</h1>
        //     <button onClick={() => setLike(count + 1)}>Like</button>
        //     <button onClick={() => setLike(count - 1)}>Dislike</button>
        //  </div>
        <div className='post'>
        <div className='post_content'>
          <strong>
            {props.post.title}
          </strong>
          <div>
          {props.post.body}
          </div>
          </div>
          <div className='post_btn'>
            <button>Удалить</button>
          </div>
      </div>
     )
}



export default Counter;