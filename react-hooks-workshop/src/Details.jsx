import {useContext} from "react"
import DetailsContext from "./DetailsContext"
import PokemonLogo from './Images/pokemonLogo.png'
import PokemonArrow from './Images/pokemon-arrow.png'


export default function Details() {
    const {details, setDetailsPage} = useContext(DetailsContext)
    const moves = details.moves;
    const type1 = details.types[0].type.name
    const baseStat = details.stats

    return (<>
      <div className={`container ${details.types[0].type.name} detailsTrue`} id='detailsContainer'>
        {/* <button id='goBackBtn' onClick = {() => setDetailsPage(false)}>Go Back</button> */}
        <input type='image' id='goBackBtn' src={PokemonArrow} onClick = {() => setDetailsPage(false)} />
        <div className="name-img">
          <h1 id='detailsName'>{details.forms[0].name.toUpperCase()}</h1>
          <img id='pokemonImage' alt='pokemon' src={details.sprites.other.home.front_default} />
        </div>
        <div id='biography'>
          <h3>Biography: </h3>
          <p>Height: {details.height} inches</p>
          <p>Weight: {details.weight} lbs</p>
          <p>{(details.types[1] !== undefined) ? `Types: ${type1}/${details.types[1].type.name}` : `Type: ${type1}`}</p>
        </div>
        <div id='baseStats'>
          <h3>Base Stats:</h3>
          <p>HP: {baseStat[0].base_stat}</p>
          <p>Attack: {baseStat[1].base_stat}</p>
          <p>Defense: {baseStat[2].base_stat}</p>
          <p>Special Attack: {baseStat[3].base_stat}</p>
          <p>Special Defense: {baseStat[4].base_stat}</p>
          <p>Speed: {baseStat[5].base_stat}</p>
        </div>
        <div className="moves">
          <ul>
            <h3>Moves: </h3>
            {moves.filter((move, i) => i < 18).map((move, i) => <li key={i}>{move.move.name}</li>)}
          </ul>
        </div>
      </div>

    </>)
}
