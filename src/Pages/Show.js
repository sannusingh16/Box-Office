/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { apiget } from '../Misc/Config'


const Show = () => {
  const { id }= useParams()
  const [shows,setshows]=useState(null)
  useEffect(()=>{
    const b=apiget(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    b.then(results=>{setshows(results)})
  },[id])
    console.log('show',shows)
       
  return (
    <div>
     show
    </div>
  )
}

export default Show



