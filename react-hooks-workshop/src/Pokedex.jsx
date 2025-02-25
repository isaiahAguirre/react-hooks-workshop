import Pokemon from './Pokemon'
import {useContext} from 'react'
import DetailsContext from './DetailsContext'
import PokemonLogo from './Images/pokemonLogo.png'

function Pokedex({pokemonData}){
const {details, setDetailsPage, detailsPage} = useContext(DetailsContext)

if(detailsPage){

  return(
    <div className = 'pokemonList'>
    <Pokemon key={pokemonData.name} pokemonData = {pokemonData}/>
  </div>
  )
}

  return(<>
  <div className='pokeHeader'>
    <img id='pokeLogo' src={PokemonLogo}/>
  </div>
  <div className = 'pokemonList'>
    {pokemonData.map(pokemon => <Pokemon key={pokemon.name} pokemonData = {pokemon}/>)}
  </div>

  </>)
}

export default Pokedex;