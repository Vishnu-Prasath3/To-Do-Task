import {useContext } from 'react'
import { data } from './Context';



function Todoform() {
 const{setdata=()=>{}}=useContext(data);
  // const[state,setstate]=useState([])
    // let Rdata=[...state];
    let Rdata=[];
    const handlsubmit=(e)=>{
    e.preventDefault();
    //  console.log(e.target.name.value);
    //  console.log(e.target.desc.value);
    
    Rdata.push({name:e.target.name.value,desc:e.target.desc.value });
    setdata(Rdata);
    e.target.name.value="";
    e.target.desc.value="";
    // console.log(Rdata);  
    }
    // useEffect(()=>{

    // },[Rdata])  

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