import './App.css';
import Dropdown from "./components/Dropdown";
import Food from "./components/Food";
import {useState} from 'react'
import MenuData from './data/MenuData';

function App() {
  const [foods,setFoods] = useState(MenuData)
  return (
    <div className="container">
      <Dropdown/>
      <div className='content'>
        {foods.map((data,index)=>{
          return <Food key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
