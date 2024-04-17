/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");


convertBtn.addEventListener("click", function(){
    const input = document.getElementById("num-container");
    let value = parseInt(input.value);
    if(!isNaN(value)){
    convertLength(value);
    convertVolume(value);
    convertMass(value);
    } 
    input.value = ""
})

function convertLength(value){
      const lengthContainer = document.getElementById("length");
      let metersResult = (value * 3.281).toFixed(3);
      let feetResult = (value / 3.281).toFixed(3);
      lengthContainer.innerHTML = 
      `<h3>Length (Meter/Feet)</h3>
       <p> ${value} meters = ${metersResult} feet | ${value} feet = ${feetResult} meters</p>`  
   }


function convertVolume(value){
    const volumeContainer = document.getElementById("volume");
    let galonsResult = (value * 0.264).toFixed(3);
    let litersResult = (value / 0.264).toFixed(3);
    volumeContainer.innerHTML = `
    <h3>Volume (Liters/Gallons)</h3>
    <p> ${value} liters = ${galonsResult} gallons | ${value} gallons = ${litersResult} liters</p>
    `  
}

function convertMass(value){
    const massContainer = document.getElementById("mass");
    let poundsResult = (value * 2.204).toFixed(3);
    let kilosResult = (value / 2.204).toFixed(3);
    massContainer.innerHTML = `
    <h3>Mass (Kilograms/Pounds)</h3>
    <p> ${value} kilos = ${poundsResult} pounds | ${value} pounds = ${kilosResult} kilos</p>
    `  
}





