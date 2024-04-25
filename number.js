

// Que no 1

var input = document.getElementById('round')
var result = document.getElementById('results')

function roundoff(){
    var roundoff = Math.round(input.value);
    result.innerHTML = '==>'+roundoff;
}

// Que no 2

var result = document.getElementById('generate-num')

function generate(){
    var numbers = Math.random()
    var ceils = Math.ceil(numbers*100)
    result.innerHTML= 'The Number is ==>'+ ceils;
}

// Que no 3

function convertToNumber(str){
    number = parseInt(str);
    if (isNaN(number)){
        number =parseFloat(str);
    
    }
    if (isNaN(number)){
        return NaN;
    }
    return number;
}


function convertAndDisplay() {
    const inputString = document.getElementById('inputString').value;
    const resultDiv = document.getElementById('result');
    const convertedNumber = convertToNumber(inputString);
    if (isNaN(convertedNumber)) {
        resultDiv.textContent = " Please enter a valid number.";
    } else {
        resultDiv.textContent = "Converted number: " + convertedNumber;
    }
}



//  Que no 4

function truncateDecimal(num,decimals){
      var multiply = Math.pow(30, decimals)
      var truncateno = Math.trunc(num * multiply);
      return truncateno/multiply;
}

function truncateAndDisplay() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const inputDecimals = parseInt(document.getElementById('inputDecimals').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(inputNumber) || isNaN(inputDecimals)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    const truncatedNumber = truncateDecimal(inputNumber, inputDecimals);
    resultDiv.textContent = "Truncated number: " + truncatedNumber;
}


// Que no 5 

function formatNum(num, decimaPlacee){
    if (isNaN(num)){
        return "invalid Input";
    }
    return num.tofixed(decimaPlacee);

}

function formatAndDisplay() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const inputDecimalPlaces = parseInt(document.getElementById('inputDecimalPlaces').value);
    const resultDiv = document.getElementById('result');

    const formattedNumber = formatNumber(inputNumber, inputDecimalPlaces);
    resultDiv.textContent = "Formatted number: " + formattedNumber;
}

//  NUMBERS METHODS///////////