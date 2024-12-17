import {useContext} from "react";
import {data} from "./Context";

function Todoform() {
  const {indata,setdata} = useContext(data);
  let Rdata = [...indata];
//to handle submit
  const handlsubmit = (e) => {
    e.preventDefault();
    Rdata.push({ name: e.target.name.value, desc: e.target.desc.value,iscomplete:false });
    setdata(Rdata);
    e.target.name.value = "";
    e.target.desc.value = "";
  };
  
  return (
    <>
      <nav className="navbar">
        <h2>Todo App</h2>
      </nav>
      <div className="todo-form">
        <h1>My Todo</h1>
        <form onSubmit={handlsubmit}>
          <input
            type="text"
            required
            name="name"
            placeholder="To-Do-Name"
            className="input-field"
          ></input>
          {/* <input    ></input> */}
          <textarea
            name="desc"
            type="text"
            required
            placeholder="To-Do-Description"
            className="textarea-field"
          ></textarea>
          <button type="submit" className="submit-button">Add ToDO</button>
        </form>
      </div>
    </>
  );
}
export default Todoform;