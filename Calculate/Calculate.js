let display = document.querySelector('.elem__display');

let calculate = document.querySelector('.calculate');

const handler = new Calculate(display);

calculate.addEventListener('click', function (event) {
    let element = event.target;
    let classList = Array.from(element.classList);
    if (!classList.includes('elem__button')) {
        return;
    }
    let operationBtn = element.textContent;
    display.innerHTML = handler.operation(operationBtn);
});

function Calculate() {

    this.memoryResult = '';

    this.memoryCurrentNumber = '';

    this.pendingOperation = '';


    this.operation = function (symbol) {

        if (!['+', '-', '/', '*', 'ce', 'c', '='].includes(symbol)) {

            if (this.isSymbolPointAndContainsInNumber(symbol)) {
                return this.memoryCurrentNumber;
            }
            this.memoryCurrentNumber = this.memoryCurrentNumber.toString() + symbol;
            return this.memoryCurrentNumber.substring(0, 8);
        }

        if (symbol === 'ce') {
            this.memoryCurrentNumber = '';
            return this.memoryResult;
        } else if (symbol === 'c') {
            this.memoryResult = '';
            this.memoryCurrentNumber = '';
            this.pendingOperation = '';
            return '0';
        }

        let result = this.memoryCurrentNumber.substring(0, 8);

        if (this.canExecuteOperation()) {
            result = this.executeOperation();
        }

        if (symbol === '=') {
            this.pendingOperation = '';
        } else {
            this.pendingOperation = symbol;
        }
        if (result !== '') {
            this.memoryResult = result;
        }
        this.memoryCurrentNumber = '';
        return this.memoryResult;
    };

    this.canExecuteOperation = function () {
        return this.memoryResult && this.pendingOperation && this.memoryCurrentNumber;
    };

    this.isSymbolPointAndContainsInNumber = function (symbol) {
        return symbol === '.' && this.memoryCurrentNumber.includes('.')
    };

    this.formatResult = function (result) {
        let formatted = result.toString();
        return parseFloat(formatted.substring(0, 8));
    };

    this.executeOperation = function () {
        let result;
        let round = 10000000;
            if (this.pendingOperation === '+') {
                result = parseFloat(this.memoryResult) + parseFloat(this.memoryCurrentNumber);
            } else if (this.pendingOperation === '-') {
                result = (parseFloat(this.memoryResult)*round - parseFloat(this.memoryCurrentNumber)*round)/round;
            } else if (this.pendingOperation === '/') {
                result = parseFloat(this.memoryResult) / parseFloat(this.memoryCurrentNumber);
            } else if (this.pendingOperation === '*') {
                result = parseFloat(this.memoryResult) * parseFloat(this.memoryCurrentNumber);
            }

            return this.formatResult(result);
    };
}








