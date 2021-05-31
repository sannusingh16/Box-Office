/* eslint-disable arrow-body-style */
import React from 'react'
import NOT_FOUND from '../../Images/not-found.png'
import { FlexGrid } from '../style'
import ActorCard from './ActorCard'

const ActorGrid = ({DATA}) => {
  return (
    <FlexGrid>
 { DATA.map(({person})=> <ActorCard key={person.id} id={person.id} name={person.name}
  image={person.image?person.image.medium:NOT_FOUND} country={person.country?person.country.name:null}
  gender={person.gender} birthday={person.birthday} deathday={person.deathday}/>)}
  </FlexGrid>  
  )

}

export default ActorGrid
