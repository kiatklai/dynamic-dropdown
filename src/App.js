import './App.css';
import Dropdown from "./components/Dropdown";
import Food from "./components/Food";
import {useState} from 'react'
import MenuData from './data/MenuData';

function App() {
  const [foods,setFoods] = useState(MenuData)
  const changeFoodData =(e)=>{
    const category = e.target.value
    if(category === "全て"){
      setFoods(MenuData)
    }else{
      const result=MenuData.filter((element)=>{
        return element.menu === category
      })
      setFoods(result)
    }
  }

  return (
    <div className="container">
      <Dropdown changeFoodData={changeFoodData}/>
      <div className='content'>
        {foods.map((data,index)=>{
          return <Food key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
