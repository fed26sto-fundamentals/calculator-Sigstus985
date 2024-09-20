let num1 = ""
let num2 = ""
let operator = ""
let operator2 = ""
let opCheck = false
let dotCheck = false

const displayNum = document.getElementById("display")
const hiddenDisplayNum = document.getElementById("hiddenDisplay")

const operators = document.querySelectorAll(".operator")

const numberButtons = document.querySelectorAll(".number")

const AC = document.querySelector(".AC")
AC.addEventListener("click", clear)

const equal = document.querySelector(".equal")
equal.addEventListener("click", calculate)

const dot = document.querySelector(".decimal")
dot.addEventListener("click", decimal)

numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        handleNumber(e.target.textContent)
    })
})

operators.forEach(btn =>{
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleNumber(number){
    if (num1.length <= 13) {
        num1 += number
        displayNum.innerHTML = num1
        console.log(opCheck)
        removeClr()
    }
}

function handleOperator(op){
    num2 = Number(num2)
    num1 = Number(num1)
    if (opCheck == false) {
        operator = op
        num2 = num1
        num1 = ""
        coloredButton = operator
        console.log("handleOperator")
    }
    else {
        operator2 = op
        calculate()
        num2 = num1
        num1 = ""
        console.log("handleOperator")
    }
    changeClr()
    dotCheck = false
    opCheck = true
    console.log(opCheck)
}

function calculate(){
    num2 = Number(num2)
    num1 = Number(num1)
    if (operator === "+"){
        num2 = num2 + num1
        operator = operator2
    }
    else if (operator === "-"){
        num2 = num2 - num1
        operator = operator2
    }
    else if (operator === "x"){
        num2 = num2 * num1
        operator = operator2
    }
    else if (operator === "/"){
        num2 = num2 / num1
        operator = operator2
    }
    else{
        console.log(operator2)
    }
    displayNum.textContent = num2
    opCheck = false
    dotCheck =false
    num1 = num2
    console.log("calculate")
    console.log(opCheck)
    coloredButton = ""
    console.log(coloredButton)
}

function clear(){
    num1 = ""
    num2 = ""
    displayNum.textContent = ""
}

function decimal(){
    if (dotCheck == false){
    num1 += "."
    displayNum.innerHTML = num1
    dotCheck = true
    }
    else{
        console.log("Balls")
    }
}

function changeClr(){
    if (operator === "+"){
        document.getElementById("addition").style.backgroundColor = "#247BA0"
    }
    else if (operator === "-"){
        document.getElementById("subtraction").style.backgroundColor = "#247BA0"
    }
    else if (operator === "x"){
        document.getElementById("multiplication").style.backgroundColor = "#247BA0"
    }
    else if (operator === "/"){
        document.getElementById("division").style.backgroundColor = "#247BA0"
    }
}

function removeClr(){
        document.getElementById("addition").style.backgroundColor = "#CBD4C2"
        document.getElementById("subtraction").style.backgroundColor = "#CBD4C2"
        document.getElementById("multiplication").style.backgroundColor = "#CBD4C2"
        document.getElementById("division").style.backgroundColor = "#CBD4C2"
}