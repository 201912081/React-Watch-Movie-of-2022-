import React from 'react'
import Card from './Card'
import movielist from './Movielist'


const App=()=>(
    <>
  <h1 className='heading_style'>Latest movies of 2022  </h1>
  {movielist.map((val)=>{
    return(
      <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
    );
  })}
  </>
)

export default App;