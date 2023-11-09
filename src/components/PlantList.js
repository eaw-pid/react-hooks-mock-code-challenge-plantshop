import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setNewPrice, newPrice, onUpdateItem, onDelete}) {
  

 const plantInfo = plants.map((plant) => (
  <PlantCard key={plant.id} plant={plant} onDelete={onDelete} setNewPrice={setNewPrice} newPrice={newPrice} onUpdateItem={onUpdateItem}/>
 )) 




  return (
   
      <ul className="cards">{plantInfo}</ul>
    
  );
}

export default PlantList;
