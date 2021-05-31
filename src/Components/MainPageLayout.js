/* eslint-disable arrow-body-style */
import React from 'react'
import Navs from './Navs'
import Title from "./Title"

const MainPageLayout = ({children}) => {
  return (
    <div>
      <Title title="Box office" subtitle="Are looking from movie or actor?" /> 
      <Navs />

      {children}
    </div>
  )
}

export default MainPageLayout
