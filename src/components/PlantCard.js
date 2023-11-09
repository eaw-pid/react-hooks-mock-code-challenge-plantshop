import React, {useState} from "react";

function PlantCard({plant, setNewPrice, newPrice, onUpdateItem, onDelete}) {

  const {image, name, price} = plant
  const [isClicked, setIsClicked] = useState(true)
  const [changePriceClick, setChangePriceClick] = useState(false)

  function handleClick() {
    setIsClicked(!isClicked)
  }

  function handlePriceClick() {
    setChangePriceClick(!changePriceClick)
    
   
  }

  function handleSubmit(e) {
    e.preventDefault()
    //console.log(plant)
    const newPlantPrice = newPrice
    //console.log(newPlantPrice)
    
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPlantPrice
      }),
      
    })
    .then(res => res.json())
    .then(data => onUpdateItem(data))
    setChangePriceClick(false)
    setNewPrice("")
  }

  function handleDeleteClick() {
    fetch(` http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDelete(plant))
  }
  return (
    <>
    <li className="card" >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
     
        <button className="primary" onClick={handleClick}>
        {isClicked ? "In Stock" : "Out of Stock"}
        </button>
        <button onClick={handlePriceClick}>Change Price</button>
        {changePriceClick ? <form onSubmit={handleSubmit}>
            <input type='text' placeholder="new price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
            <button>Update Price</button>
        </form> : null}
        <button onClick={handleDeleteClick}>Remove Plant</button>
        
    </li>
    </>
  );
}

export default PlantCard;
