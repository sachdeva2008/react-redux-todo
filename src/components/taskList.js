import React from 'react';
import { removeTask } from '../actions/simpleAction';


const taskList = (props) =>{
    let tasks = null;

    if(props.taskList){
        tasks = props.taskList.map((task,index)=>{
            return <li key={index}  id={task.done == 1 ? 'marked':null}><span className="done" onClick={()=>{props.markDone(task.id)}}>Done</span>{task.task}<span className="close" onClick={()=>{props.removeTask(task.id)}}>Remove</span></li>;
        });
    }
    return (
        <ul id="myUL">
            {tasks}
        </ul>
    )        
}

export default taskList;