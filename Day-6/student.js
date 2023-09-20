// const name = prompt("Enter your name");
// const id = prompt("Enter your id");
// const mark = prompt("Enter your mark 1");

// var inputValue = []
// var size = 5;

// for(let i=0; i<size; i++){
//     inputValue[i] += prompt("Enter you vale"  + i);
// }
// console.log(inputValue);

function empDetails() {
  const name = prompt("Enter your name");
  const id = parseInt(prompt("Enter your id"));
  const inputValue = [];
  var i;
  for (i = 1; i <= 6; i++) {
    inputValue.push(parseInt(prompt("Enter your marks " + i)));
  }
  const avg = inputValue.reduce((a,b) => a+b,0)/inputValue.length;
  const student = {
    name: name,
    id: id,
    average: avg
  };

  console.log(student);
  // console.log(`my name is ${name}, id = ${id} and avg is ${avg}`);
}
empDetails();




