/* eslint-disable arrow-body-style */
import React from 'react'
import IMAGE_NOT from '../../Images/not-found.png'
import ShowCard from './ShowCard'
import { FlexGrid } from '../style'

const ShowGrid = ({DATA}) => {
  
  return (
    <FlexGrid>
    {DATA.map(({show})=>(<ShowCard 
    key={show.id} 
    id={show.id} name={show.name} 
    image={show.image?show.image.medium:IMAGE_NOT}
    summary={show.summary}/>))}</FlexGrid>
  )
  
}

export default ShowGrid
