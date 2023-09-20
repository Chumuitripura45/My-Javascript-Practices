function convertF(){
    const celsius = parseFloat(document.getElementById("celValue").value);
    const fahrenheit = parseFloat((celsius * (9 / 5)) + 32);
    document.getElementById("displayF").innerHTML = fahrenheit;

    const buttonColorChange = document.getElementById("forCel");
    buttonColorChange.style.color = "rgb(76, 187, 32)";
}

function convertC(){
    const fahrenheit = document.getElementById("fValue").value;
    const celsius = parseFloat((fahrenheit - 32) * 5/9);
    document.getElementById("displayCel").innerHTML = celsius;

    const buttonColorChange = document.getElementById("forFre");
    buttonColorChange.style.color = "rgb(83, 12, 191)";
}