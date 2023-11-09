import React, {useState} from "react";

function PlantCard({plant}) {

  const {image, name, price} = plant
  const [isClicked, setIsClicked] = useState(true)

  function handleClick() {
    setIsClicked(!isClicked)
  }


  return (
    <li className="card" onClick={handleClick}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isClicked ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
