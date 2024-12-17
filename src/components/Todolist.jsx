import { useContext, useState, useEffect } from "react";
import { data } from "./Context";
import "../components/Todo.css";

function Todolist() {
  let { indata, setdata } = useContext(data);
  let [update, setupdate] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  
  // Ensure update is synchronized with indata
  useEffect(() => {
    setupdate(indata);
  }, [indata]);

  // Search function
  const getFilteredTodos = () => {
    if (!searchQuery.trim()) return update;
    
    return update.filter((todo) =>
      todo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  //handle-deleted-task
  const handleDel = (index) => {
    let deleted = update.filter((ele, i) => i !== index);
    setupdate(deleted);
    setdata(deleted);
  };
  // handle edit
  const handlecomplete = (id, status) => {
    const updatedTodos = update.map((todo, index) => {
      if (index === id) {
        return { ...todo, iscomplete: !status };
      }
      return todo;
    });
    
    setupdate(updatedTodos);
    setdata(updatedTodos);
  };

  return (
    <>
      {update.map((ele, index) => (
        <div className="Maincard" key={index}>
          <div className="card">
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  textDecoration: ele.iscomplete ? "line-through" : "",
                }}
              >
                {ele.name}
              </h5>
              <p
                className="card-text"
                style={{
                  textDecoration: ele.iscomplete ? "line-through" : "",
                  color: "black",
                }}
              >
                {ele.desc}
              </p>
              <button
                className="Button-card"
                onClick={() => handleDel(index)}
              >
                Remove ToDO
              </button>
              <button
                onClick={() => handlecomplete(index, ele.iscomplete)}
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
