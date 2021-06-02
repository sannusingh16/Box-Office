/* eslint-disable arrow-body-style */
import React from 'react'
import { useLocation } from 'react-router'
import { LinkStyled, NavList } from './Navs.style'

const LINKS=[{
  to: '/' ,text:"Homepage"},
  {to:'/Starred' ,text:"Starred" },]
const Navs = () => {
  const Location=useLocation()
  
  return(
    <div>
       <NavList>
         {
           LINKS.map(item=><li key={item.to}>
             <LinkStyled to={item.to} className={item.to===Location.pathname?"active":''}>
               {item.text}</LinkStyled></li>)
         }
        </NavList>
    </div>
  )
}

export default Navs
