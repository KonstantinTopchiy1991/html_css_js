let numbersBtn = document.querySelectorAll('.number');
let operationsBtn = document.querySelectorAll('.operation');
let decimalBtn = document.getElementById('decimal');
let clearBtns = document.querySelectorAll('.clear-btn');
let display = document.getElementById('display');
let memoryNewNumber = false;
let memoryCurrentNumber = 0;
let memoryPandingOperation = '';



for (let i = 0; i < numbersBtn.length; i++) {
    let number = numbersBtn[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    })
}

for (let i = 0; i < operationsBtn.length; i++) {
    let operations = operationsBtn[i];
    operations.addEventListener('click', function (e) {
        operation(e.target.textContent);
    })
}

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.target.id);
    })
}

decimalBtn.addEventListener('click', decimal);

function numberPress(number) {
    if (memoryNewNumber){
            display.value = number;
            memoryNewNumber = false;
    } else {
        if (display.value == 0){
            display.value = number;
        } else {
            display.value += number;
        }
    }
}

function operation(op) {
    let localOperation = display.value;
    if (memoryNewNumber && memoryPandingOperation !== '='){
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryPandingOperation === '+'){
            memoryCurrentNumber += parseFloat(localOperation);
        } else if (memoryPandingOperation === '-') {
           memoryCurrentNumber -= parseFloat(localOperation);
        } else if (memoryPandingOperation === '/') {
            memoryCurrentNumber /= parseFloat(localOperation);
        } else if (memoryPandingOperation === '*') {
            memoryCurrentNumber *= parseFloat(localOperation);
        } else {
            memoryCurrentNumber = parseFloat(localOperation);
        }
        display.value = formatResult(memoryCurrentNumber);
        memoryPandingOperation = op;
    }
}

function formatResult(result) {
    let formatted = result.toString();

    return formatted.substring(0, 8);
}

function decimal(value) {
    let localDecimalMemory = display.value;

    if (memoryNewNumber){
        localDecimalMemory = '0.';
        memoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
}

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        memoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        memoryNewNumber = true;
        memoryCurrentNumber = 0;
        memoryPandingOperation = '';
    }
}








