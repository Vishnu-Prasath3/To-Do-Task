import {useState} from 'react'

function Todoform() {
    const[state,setstate]=useState([])
    let data=[...state];
    //  [data]=[...state];
    const handlsubmit=(e)=>{
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.desc.value);
    data.push({name:e.target.desc.value,desc:e.target.name.value});
    e.target.name.value="";
    e.target.desc.value="";
    setstate(data);
    }

  return (
    <>
    <div>
        <h1>My Todo</h1>
        <form onSubmit={handlsubmit}>
            <input type='text' required name='name' placeholder='To-Do-Name'></input>
            <input type='text' required name='desc' placeholder='To-Do-Description'></input>
            <button type='submit' >Add ToDO</button>
        </form>
    </div>
    </>
  )
}
export default Todoform