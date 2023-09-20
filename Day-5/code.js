function interestValue(event) {
    event.prevnetDefault();
    const p = document.getElementById("firstNum").value;
    const t = document.getElementById("secondNum").value;
    const r = document.getElementById("thirdNum").value;

    const simple = (p*r*t)/100;
    // alert(`The simple interest is ${simple}`);
    // document.getElementById("ansPrint");
     document.getElementById("ansPrint").innerHTML = simple;
    // output.textContent = `${simple}`;    
  }


function clickThe(){
  const colorChange = document.getElementById('clickme');
  colorChange.style.color = "red";
}

// function clickme11(){
//   const colorga = document.getElementById('go');
//   colorga.style.background = 'blue';
// }
  