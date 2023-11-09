import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")
const [newPrice, setNewPrice] = useState("")

useEffect(()=> {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(data => setPlants(data))
}, [])


function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant])

}

function handleUpdateItem(updatedPlant) {
  console.log(updatedPlant)
  const updatedPlants = plants.map((plant) => {
    if(plant.id === updatedPlant.id) {
      return updatedPlant
    } else {
      return plant
    }
  })
  setPlants(updatedPlants)

}

function handleDelete(deletedPlant) {
  console.log(deletedPlant)
  const updatedPlants = plants.filter((plant)=> plant.id !== deletedPlant.id)
  setPlants(updatedPlants)
}


const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} setNewPrice={setNewPrice} newPrice={newPrice} onUpdateItem={handleUpdateItem} onDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
