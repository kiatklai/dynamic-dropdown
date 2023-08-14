const Food=({foodName,image_url})=>{
  return(
    <div className="single-food">
      <h1>{foodName}</h1>
      <img src={image_url} alt={foodName}/>
    </div>
  )
}

export default Food