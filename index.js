
const meter = 3.281 // To convert feet to meter, divide the inputValue by this meter value
const litre = 0.264 // To convert litre to gallon, divide the inputValue by this litre value
const kilogram = 2.204 // To convert kilogram to pounds, divide the inputValue by this kilogram value

let inputEl = document.getElementById("input-el")
let convert = document.getElementById("convert")
let reset = document.getElementById("reset")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


convert.addEventListener("click", function() {
    let inputValue = inputEl.value
    
     if(isNaN(inputValue) || inputValue === ""){
        alert("Please enter a valid number.")
    }else{
        lengthEl.textContent = `${inputValue} meters = ${Number(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${Number(inputValue / meter).toFixed(3)} meters`
        
        volumeEl.textContent = `${inputValue} litres = ${Number(inputValue * litre).toFixed(3)} gallons | ${inputValue} gallons = ${Number(inputValue / litre).toFixed(3)} litres` 
        
        massEl.textContent = `${inputValue} kilos = ${Number(inputValue * kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${Number(inputValue / kilogram).toFixed(3)} kilos`
    }
})

reset.addEventListener("click", function() {
     inputEl.value = ""
     lengthEl.textContent = ""
     volumeEl.textContent = ""
     massEl.textContent = ""
    
})
