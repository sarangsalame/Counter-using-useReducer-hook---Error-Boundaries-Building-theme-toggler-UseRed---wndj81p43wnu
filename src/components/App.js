import React,{useReducer} from 'react'
import '../styles/App.css';
const App = () => {
  let taskState={
  count:0
  }
  function reducer(state, action){
    switch(action.type){
      case 'add':
        return {taskState.count:state.count+1}
      case 'delete':
        return {taskState.count:state.count+1}
      case 'deleteAll':
        return {taskState.count:0}
    }
  }

  return (
    const [state, dispatch] = useReducer(reducer, taskState)
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  )
}


export default App;
