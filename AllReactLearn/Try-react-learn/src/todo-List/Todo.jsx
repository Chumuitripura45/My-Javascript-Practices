import React, { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue , setInputValue] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState('');

    const handleInput1Change = (e) => {
        setNum1(e.target.value);
    }
    const handleInput2Change = (e) => {
        setNum2(e.target.value);
    }

    const addMe = () => {
       const inputValue1 = parseFloat(num1);
       const inputValue2 = parseFloat(num2);

       if(!isNaN(inputValue1) && !isNaN(inputValue2)){
            const result = inputValue1 + inputValue2;
            setSum(`sum of two number is ${result}`);
       }else{
            setSum(`Input the number`);
       }
    }


    // const addMe = () => {
    //     if(inputValue.trim !== ''){
    //         setTasks([...tasks, inputValue]);
    //         setInputValue('');
    //     }
    // }

  return (
    <>
      <div>
        {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}
        <input type="number" name="num1" value={num1} onChange={handleInput1Change} />
        <input type="number" name="num2"  value={num2} onChange={handleInput2Change}/>
        <button onClick={addMe}>Add</button>
      </div>
      <span>{sum}</span>
      {/* <p className="displayValue">{
         tasks.map((task,index) => (
            <p key={index}>
                <span>{task}</span>
            </p>
         ))
      }</p> */}
    </>
  );
}

export default Todo;
