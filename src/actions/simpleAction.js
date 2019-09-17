/* 
  src/actions/simpleAction.js
*/
export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const dataList = () => {
  const data = taskList();
  return (dispatch) => {
      dispatch({type : 'DATA_SET', payload:data});
  }
}

export const addTask = (data) => {
  var stored = taskList();
  const TaskWithId = {
              id:guid(),
              task:data,
              done:0
          };
  stored.push(TaskWithId);
  localStorage.setItem("todo", JSON.stringify(stored));
  return (dispatch) => {
      dispatch(dataList());
  }
}

export const removeTask = (id) =>{
  var arr = taskList().filter(item => item.id !== id);
  localStorage.setItem("todo", JSON.stringify(arr));
  return (dispatch) => {
      dispatch(dataList());
  }
}

export const markDone = (id) =>{
  var arr = taskList();
  var i = 0;
  var obj = arr.filter((task,index) => {
    if(task.id == id){
      i = index;
    }
    return task.id == id;
  });
  var newObj = {
    id:id,
    task:obj[0].task,
    done:1
  };
  arr[i] = newObj;
  localStorage.setItem("todo", JSON.stringify(arr));
  return (dispatch) => {
      dispatch(dataList());
  }
}

function taskList() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + '-' + s4() + '-' + s4();
}
