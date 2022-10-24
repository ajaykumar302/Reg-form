// import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React,{useState} from 'react'
import { useLottie } from "lottie-react";
import Image from "./111747-web-development.json"
import './App.css';
// import Form from './Components/Form';
import Navbar from './Components/Navbar';

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
function App() {
  const option = {
    animationData: Image,
    loop: true
  };

  const { View } = useLottie(option);
  const [store,setStore] = useState(studentDetails);
  const [data,setData] = useState([]);
 

  const editHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }
  const add = (e) => {
    e.preventDefault();
    setData([...data,{...store,id:data.length}]);
    setStore("");
    
     
  }
  const clearData = () => {
    setStore("");
  }
  // const editRow = (row) => {
  //   setStore(row);
  //   setEdit(true);
   
  // }
  const deleteRow = (id) =>{
    const filtered = data.filter(item=>item.id !== id);
    console.log(filtered);
    setData(filtered);
    }
  return (
    <div className="App">
      <Navbar />
      <div className='heading'>
        <h1>Prepbytes Registraction Form</h1>
      </div>

      <div className='box'>
        <div className='box1'>{ View }</div>
        <div className='box2'>
          <form className='form'>
            <label>Name :</label><br />
            <input name='name' value={store.name} label='Name' placeholder='Name' onChange={editHandler}  id='name'/><br />
            <label>Age :</label><br />
            <input name='age' value={store.age} label='Age' placeholder='age' onChange={editHandler}  id='name'/>
            <label>Course :</label><br />
            <input name='course' value={store.course} label='course' placeholder='course' onChange={editHandler}  id='name' />
            <label>Batch :</label><br />
            <input name='batch' value={store.batch} label='Batch' placeholder='month' onChange={editHandler}  id='name'/>
        
          
            <button onClick={add} className="btn btn-success button">Submit</button>
            <button onClick={clearData} className="btn btn-danger button">Clear</button>
          </form>
        </div>
      </div>
      <div className='tab'>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
              {/* <th scope="col">Change</th> */}
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          { data.map((row,i) =>
            <tr className="table-primary">
              <th scope="row">{row.name}</th>
              <td>{row.age}</td>
              <td>{row.course}</td>
              <td>{row.batch}</td>
              {/* <td><button onClick={()=>{editRow(row)}} className="btn btn-success">Edit</button></td> */}
              <td><button onClick={()=>{deleteRow(row.id)}} className="btn btn-danger">Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
