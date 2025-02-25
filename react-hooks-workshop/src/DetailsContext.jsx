import React from "react"

const DetailsContext = React.createContext({
  details: {},
  setDetails: () => {},
  detailsPage: {},
  setDetailsPage: () => {}})

export default DetailsContext