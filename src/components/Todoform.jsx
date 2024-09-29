import React from 'react'
import {useState} from 'react'

function Todoform() {
    const[state,setstate]=useState([{task:"",decription:""}])

const handlsubmit=(e)=>{
    e.preventDefault();

}

  return (
    <>
    <div>
        <h1>My Todo</h1>
        <form onSubmit={ handlsubmit}>
            <input type='text' ></input>
            <input type='text'></input>
            <button type='submit'>Add ToDO</button>
        </form>
    </div>
    </>
  )
}
export default Todoform