
import './styles/App.css';
import React, {useEffect, useState} from 'react';
import RequestsList from './components/RequestsList';
import RequestForm from './components/RequestForm';
import MSelect from './components/UI/select/MSelect';
import MInput from './components/UI/input/MInput';


function App() {
  const [requests, setRequsets] = useState([
    {id:1, FIO:'HelloWorld', phone:'Description'},
    {id:2, FIO:'HelloWorld', phone:'Description'},
    {id:3, FIO:'HelloWorld', phone:'Description'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // const sortRequests = (sort) => {
  //   setSelectedSort(sort);
  //   setRequsets([...requests].sort((a, b) => a[sort].localeCompare(b[sort])));
  // };



   

  const createRequest = (newRequest) => {
    setRequsets([...requests, newRequest]);
  }

  const removeRequest = (request) => {
    setRequsets(requests.filter(r => r.id !== request.id))
  }

  return ( 
    <div className="App">
     <RequestForm create={createRequest}/>
    <hr style={{"margin": "20px"}}/>

      {/* <MSelect
      value={setSelectedSort}
      onChange={sortRequests}
      defaultValue={'Все'}
      options={[
        {value:'FIO', name: 'По ФИО'},
        {value:'id', name: 'По id'}
      ]}
      /> */}

      <MInput
        value={searchQuery}
        onchange={e => setSearchQuery(e.target.value)}
        placeholder={'Поиск'}
      />
   
     {requests.length
      ?      <RequestsList remove={removeRequest} requests={requests} title={'Заполните форму'} />
      : <p>Нет заявок, все здоровы</p>
     }
    </div>
  );
}
      
export default App;
