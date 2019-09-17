import React,{useRef} from 'react';


const AddNew = (props) =>{
    const inputEl = useRef(null);

    return (
        <div id="myDIV" className="header">
        <h2 style={{margin:"5px"}}>My To Do List</h2>
        <input type="text" ref={inputEl} id="myInput" placeholder="Title..."/>
        <span onClick={()=>{props.addNewTask(inputEl.current.value);inputEl.current.value = '';}} className="addBtn">Add</span>
        </div>
    )        
}

export default AddNew;