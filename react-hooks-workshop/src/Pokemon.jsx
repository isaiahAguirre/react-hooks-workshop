import React from 'react';
import { useState, useEffect, useContext } from 'react'
import App from './App'
import DetailsContext from './DetailsContext'
import Details from './Details'



export default function Pokemon({pokemonData}){
  const [pokemonSprite, setPokemonSprite] = useState(null)
  const [details, setdetails] = useState({})
  const {setDetails} = useContext(DetailsContext)

  useEffect(() => {
    fetch(pokemonData.url)
      .then(res => res.json())
      .then(data => {
        setdetails(data)
        setPokemonSprite(data.sprites.other.home.front_shiny)
      })
  }, [])

return (
  <>
  <Details details = {details} />
    <div className='pokeContainer'>
      <div className='pokeCard'>
      <img className = 'pokeList' key={pokemonData.name}  alt='Blank Image' src={pokemonSprite}
      onClick={() => setDetails(details)}/>
      <h2 className='pokeName'>{pokemonData.name}</h2>
      </div>
    </div>
  </>
)
}

