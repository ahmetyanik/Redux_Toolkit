import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToDo,deleteToDo, xEkle } from "./redux/reducers/todoReducer";


function App() {

  const {value} = useSelector(state=>state.todo);
  const [curValue,setCurValue] = useState("");

  const dispatch = useDispatch();

  console.log(value);

  const handleSubmit = (e) =>{
    e.preventDefault();
   dispatch(addToDo(curValue))

  }



  return (
    <div className="App">
  
    <form onSubmit={handleSubmit}>
      <input value={curValue} onChange={(e)=>setCurValue(e.target.value)}/>
      <button>Ekle</button>
    </form>

    <ul>
      {
        value.map((item,index)=>{
          return(
            <li key={index}>{item}<button onClick={()=>{dispatch(deleteToDo(item))}}>Sil</button><button onClick={()=>dispatch(xEkle(item))}>X EKLE</button></li>
          )
        })
      }
    </ul>

    </div>
  );
}

export default App;
