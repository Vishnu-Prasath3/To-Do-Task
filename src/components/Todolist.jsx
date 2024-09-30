import { useContext,useEffect} from "react"
import { data } from "./Context";


function Todolist() {
  let {indata,setdata}=useContext(data)
//   useEffect(()=>{

console.log(indata);

// },[setdata])

  return (
    <>
  {/* {indata.map((a,index)=>(<li key={index.name}>{a.name}</li>))} */}

    <div className="card" >
    <div className="card-body">
    <h5 className="card-title"></h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

</>
  )
}


export default Todolist