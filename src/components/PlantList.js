import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  

 const plantInfo = plants.map((plant) => (
  <PlantCard key={plant.id} plant={plant}/>
 )) 
  return (
    <ul className="cards">{plantInfo}</ul>
  );
}

export default PlantList;
