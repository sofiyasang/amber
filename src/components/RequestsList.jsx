import React from "react";
import Request from "./Request";

const RequestsList = ({requests, title, remove}) => {
     return(
     <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
           {requests.map((request,index) =>
           <Request remove={remove} number={index+1} request={request} key={request.id}/>
           )}
     </div>
     )

}

export default RequestsList;