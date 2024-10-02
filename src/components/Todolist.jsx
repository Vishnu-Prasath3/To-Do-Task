import { useContext, useEffect,useState } from "react";
import { data } from "./Context";
import "../components/Todo.css";


function Todolist() {
  let { indata, setdata} = useContext(data);
  let[update,setupdate]=useState([])

    
    
    const handleDel = (index) => {
      let filtered=[...update].filter((ele,i)=>i!=index)
      setdata(filtered);
      
     
    }
  return (
    <>
      {indata &&
        indata.map((ele, index) => (
          <div className="Maincard" key={index}>
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p className="card-text">{ele.desc}</p>
                <a href="#" className="card-link"></a>
                <a href="#" className="card-link"></a>
                <button className="Button-card"
                  onClick={() => {
                    handleDel(index);
                  }}
                >
                  Remove ToDO
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
export let update;
export default Todolist;
