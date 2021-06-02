/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react'
import { useParams } from 'react-router-dom'
import ShowMainData from '../Components/Show/ShowMainData'
import Seasons from '../Components/Show/Seasons'
import Details from '../Components/Show/Details'
import Cast from '../Components/Show/Cast'
import { InfoBlock, ShowPageWrapper } from './Showstyle'
import { useShow } from '../Misc/custom-hooks'




const Show = () => {
  const { id }= useParams()
  // const [shows,setshows]=useState(null)
  // const [isLoading,setisLoading]=useState(true)
  // const [error,seterror]=useState('')
  const {shows,isLoading,error}=useShow(id)

       
  
   if(isLoading)
    {
     return <div>Data is being Loaded</div>
    }
   if(error)
   {
     <div>Error message:{error}</div>
   }
   return (
    <ShowPageWrapper>
      <ShowMainData
        image={shows.image}
        name={shows.name}
        rating={shows.rating}
        summary={shows.summary}
        tags={shows.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={shows.status}
          network={shows.network}
          premiered={shows.premiered}
        />
      </InfoBlock>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={shows._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={shows._embedded.cast} />
      </div>
    </ShowPageWrapper>
  );
};

export default Show;



