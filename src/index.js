import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import './index.css'
import movielist from './Movielist'

function moviecard(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  )
}

ReactDOM.render(
<>
  <h1 className='heading_style'>Latest movies of 2022  </h1>
  {movielist.map(moviecard)}
 
   
</>,
document.getElementById('root'))