import React from 'react'
import "../style/prodhead.css"
//import { useState } from 'react'

function Producthead({title}) {
 // const[headings,setHeadings]=useState(title);
  return (
    <div className='prodhead'>----{title}----</div>
  )
}

export default Producthead