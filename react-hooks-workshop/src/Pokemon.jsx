import React from 'react';
import { useState, useEffect, useContext } from 'react'
import App from './App'
import DetailsContext from './DetailsContext'
import Details from './Details'

export default function Pokemon({pokemonData}){
  const [pokemonSprite, setPokemonSprite] = useState(null)
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [type, setType] = useState('')
  const {detailsPage, setDetails, setDetailsPage} = useContext(DetailsContext)

  useEffect(() => {
    fetch(pokemonData.url)
      .then(res => res.json())
      .then(data => {
        setPokemonDetails(data)
        setPokemonSprite(data.sprites.other.home.front_default)
        setType(data.types[0].type.name)
      })
  }, [])

if(detailsPage)
{
  return(
    // <h2 className='pokeName'>{pokemonData.name}</h2>
    <Details />
  )
}
  return (
    <>

      <div className='pokeContainer'>
        <div className={`pokeCard ${type}`}>
        <img className = 'pokeList' key={pokemonData.name}  alt='Blank Image' src={pokemonSprite}
        onClick={() =>{
        setDetails(pokemonDetails)
        setDetailsPage(true)
        }}/>
        <h2 className='pokeName'>{pokemonData.name}</h2>
        </div>
      </div>
    </>
  )
}

//

// export default function Details() {
//   const {details} = useContext(DetailsContext)
//   const moves = details.moves;

//   return (<>
//     <div className={`container ${details.types[0].type.name}`}>
//       <div className="name-img">
//         <h1 id={details.forms[0].name.toUpperCase()}>{details.forms[0].name.toUpperCase()}</h1>
//         <img alt={details.forms[0].name.toUpperCase()} src={details.sprites.other.home.front_default} />
//       </div>
//       <div className="moves">
//         <ul>
//           {moves.filter((move, i) => i < 18).map((move, i) => <li key={i}>{move.move.name}</li>)}
//         </ul>
//       </div>
//     </div>
//     <Link to='/'><button>Go Back</button></Link>
//   </>)
// }