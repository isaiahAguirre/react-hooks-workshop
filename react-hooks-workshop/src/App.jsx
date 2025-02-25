import { useState, useEffect } from 'react'
import './App.css'
import Pokedex from './Pokedex'
import DetailsContext from "./DetailsContext";
import Details from './Details';
import Pokemon from './Pokemon';

function App() {
  const [baseUrl, setBaseUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  const [pokemonData, setPokemonData] = useState([])
  const [details, setDetails] = useState({})
  const value = { details, setDetails }

//This fetches the pokemon name and specific URL
useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setPokemonData(data.results)
      })
  }, [])

  return (
    <>
    <DetailsContext.Provider value={value}>
      <div className="pageContainer">
        <Pokedex pokemonData = {pokemonData} />
        <Pokemon pokemonData = {pokemonData}/>
      </div>
     </DetailsContext.Provider>
    </>
  )
}

export default App;










// function pokeUrl(url){
//   //useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setPokemonSprite(data.sprites.other.home.front_shiny)
//       })
//       console.log(pokemonSprite)
//   //}, [])
// }

// function home(pokemonData){
//   let urls=pokemonData.map(element => element.url)
//   let sprites = []
//    //console.log(urls)
//   urls.forEach(item => {
//     sprites.push(pokeUrl(item))
//   })

  // Promise.all(pokeData)
  // .then(results => console.log(pokemonName))

  // console.log(pokemonName)



//This will grab the sprites for each pokemon
  // useEffect((pokemonData) => {
  //   pokemonData.map(pokeUrl => pokeUrl.url)
  // }, [pokemonData])

  // let nameAndUrl = await pokemonArray();
  // let spriteURL = nameAndUrl.map(x => x.url).map(y => fetch(y).then(response => response.json()).then(data => data.sprites));

  // Promise.all(spriteURL).then(spriteURL => {
  //     for(let i = 0; i < spriteURL.length; i++)
  //     {
  //         if((spriteURL[i].front_default != null) && (spriteURL[i].back_default != null))
  //         {
  //             nameAndSprite.push({name: nameAndUrl[i].name, front: spriteURL[i].front_default, back: spriteURL[i].back_default});

  //         }

  //     }
  // })

  // let nameAndSprite = [];



//151 Pokemon: https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// async function pokemonArray (){

//   return (fetch('https://pokeapi.co/api/v2/type/3?limit=150offset=0'))
//   .then(response => response.json())
//   .then(data => data.pokemon.map(x => x.pokemon));

// }
