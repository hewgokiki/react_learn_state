import React from 'react'
import Employee from '../components/Employee'
import EmployeeDetail from '../components/EmployeeDetail'

export default function Home() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <Employee/>
      <EmployeeDetail/>
    </div>
  )
}