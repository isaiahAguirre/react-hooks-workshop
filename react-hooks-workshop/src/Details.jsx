import {useContext} from "react"
import DetailsContext from "./DetailsContext"

export default function Details() {
    const {details} = useContext(DetailsContext)



    console.log(details.name)
return(<>
<div>
    <h1 id={details.name}>{details.name}</h1>
</div>

</>)
}