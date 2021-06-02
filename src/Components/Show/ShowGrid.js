/* eslint-disable arrow-body-style */
import React from 'react'
import IMAGE_NOT from '../../Images/not-found.png'
import ShowCard from './ShowCard'
import { FlexGrid } from '../style'
import { useShows } from '../../Misc/custom-hooks'


const ShowGrid = ({DATA}) => {
const [starredshows,dispatchstarredshow]=useShows()

  return (
    <FlexGrid>
    {DATA.map(({show})=>{ 
      const isstarred=starredshows.includes(show.id)
  
      const starred=()=>{
        if(isstarred)
        {
          dispatchstarredshow({type:'REMOVE', showid:show.id})
        }
        else{
          dispatchstarredshow({type:'ADD', showid:show.id})
        }
      }
  return (<ShowCard 
    key={show.id} 
    id={show.id} name={show.name} 
    image={show.image?show.image.medium:IMAGE_NOT}
    summary={show.summary} starred={starred} isstarred={isstarred} />)
    })}
    </FlexGrid>)
  }

export default ShowGrid
