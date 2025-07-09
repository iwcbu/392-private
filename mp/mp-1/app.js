function addition() {
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    let result = Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result)
}

function subtraction() {
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    let result = Number(first)-Number(second);
    document.getElementById("output").innerHTML=String(result)
}

function multiplication() {
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    let result = Number(first)*Number(second);
    document.getElementById("output").innerHTML=String(result)
}

function division() {
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    let result = Number(first)/Number(second);
    if (Number(second) == 0) {
        document.getElementById("output").innerHTML="Error; Can not divide by 0"
    } else {
        document.getElementById("output").innerHTML=String(result)
    }
    
}

function power() {
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;

    let result = 1
    for(let i = 0; i<second; i=i+1) {
        result=first * result;
    }

    document.getElementById("output").innerHTML=String(result)
}