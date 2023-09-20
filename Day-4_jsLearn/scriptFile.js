// console.log("Chumui Tripura");

// const arr = ["Chumui", "Chulbul", "Sushrang","Dichan", "Adrash"];

// for(let i=0; i<2; i++){
//     console.log(arr);
// }
// for(var arrValue in arr){
//     console.log(arr[arrValue]);
// }

// var obj = {
//     "Name" : "Chumui Tripura",
//     "Age" : 32
// }

// console.log(arr)
// console.log("Name ->" + obj.Name);

// var value= 20;
// while(value< 50){
//     console.log(value + 'is less than 50');
//     value += 10;
// }

// function myAge(a){
//     console.log(a);
// }
// var age = myAge(22);

// function multiply(a,b){
//     return a*b;
// }

// console.log(multiply(2,3));

// callback function

// let value = 1;
// doSomething(() => {
//   value = 2;
// });

// console.log(value);

// var person = {
//     "Name": "Chumui Tripura",
//     "Age" : 35,
//     "Greeting" : function(){
//         console.log("my name is " + this.Name + " and my age is " + this.Age);
//     }
// }

// person.Greeting();

// var name1 = prompt("Enter you gf name");
// console.log("your gf name is " + name1)

// var mark = [70, 80, 55, 90, 100];

// var inputValue = []
// var size = 5;

// for(let i=0; i<size; i++){
//     inputValue[i] += prompt("Enter you vale"  + i);
// }
// console.log(inputValue);

// var avg = mark.reduce((a,b) => a+b,0)/mark.length;
// var sum = 0;
// mark.forEach(item =>{
//     sum += item
// })

// var sum1 = 0;
// for(var item in mark){
//     sum1 += mark[item];
// }
// console.log(sum);
// console.log(sum1);

// var reducer = (accumulator, curr) => accumulator + curr;
// sum = mark.reduce(reducer);

// var avg = sum/mark.length;

// if(avg >= 75){
//     console.log("you are pass, you avg is " + avg);
// }else{
//     console.log("your are not pass, your avg is "+ avg );
// }

// function interestValue() {
//   var p = parseFloat(prompt("Enter the value of p"));
//   var t = parseFloat(prompt("Enter the value of t"));
//   var r = parseFloat(prompt("Enter the value of r"));
//   var simple = (p * r * t) / 100;
//   alert(`the simple interest is ${simple}`);
//   console.log(`the simple interest is ${simple}`);
// }
// interestValue();

// function hello(){
//   // document.getElementsById("Demo").innerHTML = "Chumui Tripura, hello how are you"
//   console.log("chumui Tripura");
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

function hello() {
  var num1 = document.getElementById("firstNum").value;
  var num2 = document.getElementById("secondNum").value;
  const total = Number(num1) + Number(num2);

  alert(`total value is ${total}`);
}
// const addValue = document.getElementById("addTwoNum");
