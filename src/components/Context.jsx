import { createContext, useState } from "react"
import Todoform from "./Todoform"
import Todolist from "./Todolist"

// import React from 'react'
export let data=createContext();

function Context() {
    const[indata,setdata]=useState([]);
     
  return (
    <>
    <data.Provider value={{indata,setdata}}>
    <Todoform></Todoform>
    <Todolist></Todolist>
    </data.Provider>
    </>
  )
}

export default Context