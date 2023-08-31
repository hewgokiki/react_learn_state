"use client"
import React from "react";
import Employee from "../components/Employee";
import EmployeeDetail from "../components/EmployeeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <Employee/>
      <EmployeeDetail/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Employee />}>
          {/* <Route index element={<EmployeeDetail />} /> */}
          <Route path="blogs" element={<EmployeeDetail />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
