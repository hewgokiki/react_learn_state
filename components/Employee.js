"use client"
import React from 'react'
import HeaderComponents from './Header'
import Search from './Search'

const sendText =() =>{
    return "message X"
}

function Employee() {
    return (
        <div style={{ width: '300px', height: '150px', background: 'red'}}>
            <HeaderComponents title="Employee"/>
            <Search funcText={sendText} >
                <b>
                    Search :::
                </b>
            </Search>
        </div>
    )
}


export default Employee


