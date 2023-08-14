const Dropdown=({changeFoodData})=>{
  
  return(
    <nav>
      <h2>Dynamic Dropdown</h2>
      <select className="menu" onChange={changeFoodData}>
        <option value="全て">全て</option>
        <option value="炒め・揚げ物">炒め・揚げ物</option>
        <option value="スープ・トムヤム">スープ・トムヤム</option>
        <option value="飲料">飲料</option>
        <option value="ステーキ">ステーキ</option>
      </select>
    </nav>
  )
}

export default Dropdown