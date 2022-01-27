var input = document.getElementById('inputNumber');
var resultButton = document.getElementById('resultButton');
var cancelButton = document.getElementById('cancelButton');
let number1;
let number2;
let memoryOperation;

input.value = '0';

var number = document.querySelectorAll(".number");
for (let i = 0; i < number.length; i++) {
    var numberButtons = number[i];
    if (input.value === '0') {
        numberButtons.addEventListener("click", numberButtonClickListener);
    }
''
}

var operationsButtons = document.querySelectorAll(".operationsButtons");
for (let i = 0; i < operationsButtons.length; i++) {
    operationsButtons[i].addEventListener("click", OperationsClickListener);
}

function numberButtonClickListener(element) {
    if (input.value === '0') {
        input.value = null;
        input.value = input.value + element.target.value;
    } else {
        input.value = input.value + element.target.value;
    }
}

function OperationsClickListener(element) {
    number1 = Number(input.value);
    input.value = null;
    memoryOperation = element.target.innerHTML;
}

function clickOnResultButton() {
    number2 = Number(input.value);
    var result = 0;
    if (memoryOperation === '+') {
        result = number1 + number2;
    } else if (memoryOperation === '-') {
        result = number1 - number2;
    }
    else if (memoryOperation === '*') {
        result = number1 * number2;
    }
    else if (memoryOperation === '/') {
        result = number1 + number2;
    }
    input.value = result;
}
function cancelButtonClickListener() {
    input.value = 0;
}
cancelButton.addEventListener('click', cancelButtonClickListener);
resultButton.addEventListener('click', clickOnResultButton);

function findShort(s){
    var arr = s.split(' ');
    var min = arr[0].length; 
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length < min) {
        min = arr[i].length;debugger
      }
    } 
    return min ; 
  }