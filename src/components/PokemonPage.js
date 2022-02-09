import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchVal, setSearchVal] = useState('')
  const [newName, setNewName] = useState('')
  const [newHP, setNewHP] = useState(0)
  const [newFront, setNewFront] = useState('')
  const [newBack, setNewBack] = useState('')
  const [pokemons, setPokemons] = useState([])  
  
  const url = 'http://localhost:3001/pokemon'


  useEffect(() => {
    fetch(url).then(r=>r.json()).then(setPokemons)
  },[])


  function handleSearch(e){
    setSearchVal(e.target.value)
  }

  function handleNewName(e){
    setNewName(e.target.value)
  }
  function handleNewHP(e){
    setNewHP(e.target.value)
  }
  function handleNewFront(e){
    setNewFront(e.target.value)
  }
  function handleNewBack(e){
    setNewBack(e.target.value)
  }

  function onAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  function handleSubmit(e){
    e.preventDefault()
    const newPokemon = {
      name: newName,
      hp: newHP,
      sprites:{
        front: newFront,
        back: newBack
      }
    }
    fetch('http://localhost:3001/pokemon',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
      })
      .then(r=>r.json())
      .then(onAddPokemon)
  }

  const filterList = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchVal.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit = {handleSubmit} handleNewName={handleNewName} handleNewBack={handleNewBack} handleNewHP={handleNewHP} handleNewFront={handleNewFront} />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemons={filterList}/>
    </Container>
  );
}

export default PokemonPage;
