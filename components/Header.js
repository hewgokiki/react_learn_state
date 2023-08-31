"use client"
import React from 'react'

function Header(props) {
  return (
    <div syle={{background:'white',margin:'10px'}}>
      Header: {props.title}
    </div>
  )
}

export default Header