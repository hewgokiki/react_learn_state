"use client"
import React from 'react'
import HeaderComponents from './Header'
import Search from './Search'
import { Link, useNavigate } from 'react-router-dom'

const sendText =() =>{
    return "message X"
}

function Employee() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/yourpathinrouting")
    }
    return (
        <div style={{ width: '300px', height: '150px', background: 'red'}}>
            <HeaderComponents title="Employee"/>
            <Search funcText={sendText} >
                <b>
                    Search :::
                </b>
            </Search>
        <button onClick={handleNavigate}>
            Navigate
        </button>
        </div>
    )
}


export default Employee


