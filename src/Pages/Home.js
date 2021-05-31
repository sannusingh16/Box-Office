/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React,{useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import {apiget} from '../Misc/Config'
import ShowGrid from '../Components/Show/ShowGrid'
import ActorGrid from '../Components/Actor/ActorGrid'

const Home = () => {
  const [input,setInput]=useState('')
  const [Result,SetResult]=useState(null)
  const [searchoption,setsearchoption]=useState('shows')
  const isearch=searchoption==='shows'
  const onsearch=()=>
  {
   const a=apiget(`/search/${searchoption}?q=${input}`)
    a.then(data=>{SetResult(data)
    console.log(data)})
  }
  const onInputchange=(ev)=>{
    setInput(ev.target.value)
  }
  const onKeyDown = (ev)=> {
     if(ev.keyCode === 13)
     {
       onsearch()
     }
   }
   const onradio=(ev)=>{
     setsearchoption(ev.target.value)
   }
   
   const RenderResult=()=>{
    if (Result && Result.length===0){
      return <div>No Result</div>
    }
    if(Result && Result.length>0){
      return Result[0].show?
      <ShowGrid DATA={Result}/>:
      <ActorGrid DATA={Result}/>

    }
    return null;
   }
  return (
    <MainPageLayout>
      <input type='text' onChange={onInputchange} onKeyDown={onKeyDown} value={input} />
      <div>
        <label htmlFor="show-search">
          shows
          <input id='show-search 'type="radio" value='shows' checked={isearch} onChange={onradio}/>
        </label>
        <label htmlFor="actor-search">
          Actors
          <input id='actor-search' type="radio" value='people' checked={!isearch} onChange={onradio}/>
        </label>
      </div>
      <button type='button' onClick={onsearch}>Search</button>
      {RenderResult()}
    </MainPageLayout>
  )
}

export default Home
