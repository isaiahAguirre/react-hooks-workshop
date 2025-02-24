import Pokemon from './Pokemon'

function Pokedex({pokemonData}){


  return(<>
  <div className = 'pokemonList'>
    {pokemonData.map(pokemon => <Pokemon key={pokemon.name} pokemonData = {pokemon}/>)}
  </div>

  </>)
}

export default Pokedex;