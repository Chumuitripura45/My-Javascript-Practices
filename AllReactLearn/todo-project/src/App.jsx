// import './App.css'


// function App() {
//   const addMe = () => {
//     const addvalue = document.getElementById("inputTheValue").value;
//     if (addvalue.trim() !== "") {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//             <span>${addvalue}</span>
//             <button onclick={deleteTask} class="delete-button">Delete</button>
//         `;
//         document.getElementById("displayValue").appendChild(listItem);
//     }

//     const colorChange = document.getElementById("container");
//     colorChange.style.color = "#b90d93";
// }

// function deleteTask(buttonElement) {
//     const listItem = buttonElement.parentElement;
//     listItem.remove();
//     const colorChange = document.getElementById("container");
//     colorChange.style.color = "black";
// }

// function sortTasks() {
//     const list = document.getElementById("displayValue");
//     const items = Array.from(list.getElementsByTagName("li"));
    
//     items.sort(function(a, b) {
//         const textA = a.textContent.toLowerCase();
//         const textB = b.textContent.toLowerCase();
//         return textA.localeCompare(textB);
//     });
    
//     // Clear the list
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
    
//     // Append sorted items back to the list
//     for (const item of items) {
//         list.appendChild(item);
//     }
// }

//   return (
//     <>
//       <div id="container">
//         <div align="center" class="container-item">
//             <h1>To-Do List</h1>
//             <div>
//                 <input type="text" id="inputTheValue" placeholder="Enter a task" />
//                 <button onclick={addMe}>Add</button>
//                 <button onclick={sortTasks}>Sort</button>
//             </div>
//             <span id="displayValue"></span>
//         </div>
//     </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.localeCompare(b));
    setTasks(sortedTasks);
  };

  return (
    <div id="container">
      <div align="center" className="container-item">
        <h1>CRUD Application </h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={addTask} className='add-button'>Add</button>
          <button onClick={sortTasks}>Sort</button>
        </div>
        <ul id="displayValue">
          {tasks.map((task, index) => (   // We use map to render the list of tasks dynamically.
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
