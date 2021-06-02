/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React,{useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import {apiget} from '../Misc/Config'
import ShowGrid from '../Components/Show/ShowGrid'
import ActorGrid from '../Components/Actor/ActorGrid'
import { useLastQuery }  from '../Misc/custom-hooks'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.style'
import Customradio from '../Components/Customradio'

const Home = () => {
  const [input,setInput]= useLastQuery()
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
      <SearchInput type='text' onChange={onInputchange} onKeyDown={onKeyDown} value={input} />
      < RadioInputsWrapper>
      <div>
      <Customradio
        label='shows' id='show-search'  value='shows' 
        checked={isearch} onChange={onradio} />
      </div>  
      <div>
        <Customradio
        label='shows' id='actor-search'  value='people' 
        checked={!isearch} onChange={onradio} />
      </div>  
      </ RadioInputsWrapper>
      <SearchButtonWrapper><button type='button' onClick={onsearch}>Search</button></SearchButtonWrapper>
      {RenderResult()}
    </MainPageLayout>
  )
}

export default Home
