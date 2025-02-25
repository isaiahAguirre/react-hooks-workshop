import {useContext} from "react"
import DetailsContext from "./DetailsContext"

export default function Details() {
    const {details} = useContext(DetailsContext)

return(<>
<div className='detailsContainer'>
  <div className='detailsNameImage'>
    <h1 id={details.name}>{details.name}</h1>
  </div>
  </div>

</>)
}