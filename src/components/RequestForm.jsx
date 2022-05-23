import React, {useState} from 'react';
import MInput from './UI/input/MInput';
import MButton from './UI/button/MButton';

const RequestForm = ({create}) => {
    const[request, setRequest] = useState({FIO:'', phone:''});

    const addNewRequest = (e) => {
        e.preventDefault();
        const newRequest = {
            ...request, id: Date.now()
        }
        create(newRequest)
        setRequest({FIO:'',phone:''})
      }

    return (
        <form>
            <MInput 
            value={request.FIO}
            onChange={e => setRequest({...request, FIO: e.target.value})}
            type="text"
            placeholder="FIO" 
            />
            
            <MInput 
            value={request.phone}
            onChange={e => setRequest({...request, phone: e.target.value})}
            type="text"
            placeholder="phone" 
            />

            <MButton type="submit" onClick={addNewRequest}> Hello</MButton>
        </form>    
      )
  
}

export default RequestForm;
