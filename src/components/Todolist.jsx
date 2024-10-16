import { useContext, useEffect, useState } from "react";
import { data } from "./Context";
import "../components/Todo.css";

function Todolist() {
  let { indata, setdata } = useContext(data);
  let [update, setupdate] = useState([]);
  update = indata;

  //handle-deleted-task
  const handleDel = (index) => {
    let deleted = update.filter((ele, i) => i != index);
    console.log(deleted);
    setupdate(deleted);
    setdata(deleted);
  };
  // handle edit
  const handlecomplete = (id, status) => {
    console.log(update);
  };

  return (
    <>
      {indata &&
        indata.map((ele, index) => (
          <div className="Maincard" key={index}>
            <div key={index} className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    textDecoration: ele.iscomplete ? "line-through" : "",
                  }}
                >
                  {ele.name}
                </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p
                  className="card-text"
                  style={{
                    textDecoration: ele.iscomplete ? "line-through" : "",
                  }}
                >
                  {ele.desc}
                </p>
                <a href="#" className="card-link"></a>
                <a href="#" className="card-link"></a>
                <button
                  className="Button-card"
                  onClick={() => {
                    handleDel(index);
                  }}
                >
                  Remove ToDO
                </button>
                <button
                  onClick={() => {
                    handlecomplete(index, ele.iscomplete);
                    // ele.iscomplete = true;
                  }}
                >
                  completed!
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
