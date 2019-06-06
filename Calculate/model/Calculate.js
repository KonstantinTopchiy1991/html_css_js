function Calculate() {

    this.memoryResult = '';

    this.memoryCurrentNumber = '';

    this.pendingOperation = '';

}

Object.defineProperty(Calculate.prototype, "memoryResult", {
    get: function() {
        return this._memoryResult;
    },
    set: function(value) {
        this._memoryResult = value;
    }
});
Object.defineProperty(Calculate.prototype, "memoryCurrentNumber", {
    get: function() {
        return this._memoryCurrentNumber;
    },
    set: function(value) {
        this._memoryCurrentNumber = value;
    }
});
Object.defineProperty(Calculate.prototype, "pendingOperation", {
    get: function() {
        return this._pendingOperation;
    },
    set: function(value) {
        this._pendingOperation = value;
    }
});


Calculate.prototype.operation = function (symbol) {

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

Calculate.prototype.canExecuteOperation = function () {
    return this.memoryResult && this.pendingOperation && this.memoryCurrentNumber;
};

Calculate.prototype.isSymbolPointAndContainsInNumber = function (symbol) {
    return symbol === '.' && this.memoryCurrentNumber.includes('.')
};

Calculate.prototype.formatResult = function (result) {
    let formatted = result.toString();
    return parseFloat(formatted.substring(0, 8));
};

Calculate.prototype.executeOperation = function () {
    let result;
    let round = 10000000;
    if (this.pendingOperation === '+') {
        result = parseFloat(this.memoryResult) + parseFloat(this.memoryCurrentNumber);
    } else if (this.pendingOperation === '-') {
        result = (parseFloat(this.memoryResult) * round - parseFloat(this.memoryCurrentNumber) * round) / round;
    } else if (this.pendingOperation === '/') {
        result = parseFloat(this.memoryResult) / parseFloat(this.memoryCurrentNumber);
    } else if (this.pendingOperation === '*') {
        result = parseFloat(this.memoryResult) * parseFloat(this.memoryCurrentNumber);
    }

    return this.formatResult(result);
};









