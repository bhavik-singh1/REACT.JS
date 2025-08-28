
import './App.css';

import Item from './components/Items';
import Itemdatee from './components/ItemDate';
import Card from './components/Card';
// Bhvaik Chodu

function App() {
  const response = [
    {
      itemName : "Nirma",
      itemDay : "20",
      itemMonth:"august",
      itemYear:"2000"

    },

    {
      itemName : "Nirma1",
      itemDay : "201",
      itemMonth:"august1",
      itemYear:"20001"

    },

    {
      itemName : "Nirma2",
      itemDay : "202",
      itemMonth:"august2",
      itemYear:"20002"

    }


  ]
  const ItemTwoName = "Nirma";
  return ( 
    
      <Card>
        <div>
        <Itemdatee day = {response[0].itemDay} month = {response[0].itemMonth} year = {response[0].itemYear}></Itemdatee>
      <Item item = {response[0].itemName}>
        hello jee mei hun bhavik
      </Item>

       <Itemdatee day = {response[1].itemDay} month = {response[1].itemMonth} year = {response[1].itemYear}></Itemdatee>
      <Item item = {response[1].itemName}></Item>
       <Itemdatee day = {response[2].itemDay} month = {response[2].itemMonth} year = {response[2].itemYear}></Itemdatee>
      <Item item = {response[2].itemName}></Item>

      

      
      <div className="App">
    Hello Bhavik this is your first react app 
    </div>

    </div>

      </Card>
      
    
  );
}

export default App;
