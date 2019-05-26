describe('plus works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '+', '4', '5', '='],
            'expected': '66'
        },
        {
            'symbols': ['3', '5', '+', '1', '1', '='],
            'expected': '46'
        },
        {
            'symbols': ['8', '+', '2', '1', '='],
            'expected': '29'
        },
        {
            'symbols': ['1', '9', '+', '3', '2', '='],
            'expected': '51'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});


describe('minus works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '-', '4', '5', '='],
            'expected': '-24'
        },
        {
            'symbols': ['4', '1', '-', '1', '1', '='],
            'expected': '30'
        },
        {
            'symbols': ['8', '-', '7', '='],
            'expected': '1'
        },
        {
            'symbols': ['9', '3', '-', '6', '7', '='],
            'expected': '26'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});

describe('multiplication works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '*', '4', '5', '='],
            'expected': '945'
        },
        {
            'symbols': ['1', '1', '*', '1', '1', '='],
            'expected': '121'
        },
        {
            'symbols': ['8', '*', '7', '='],
            'expected': '56'
        },
        {
            'symbols': ['2', '3', '*', '7', '='],
            'expected': '161'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});

describe('divide works calculate', function () {

    const testedData = [
        {
            'symbols': ['2', '4', '/', '1', '6', '='],
            'expected': '1.5'
        },
        {
            'symbols': ['1', '1', '/', '1', '1', '='],
            'expected': '1'
        },
        {
            'symbols': ['84', '/', '14', '='],
            'expected': '6'
        },
        {
            'symbols': ['2', '4', '/', '88', '='],
            'expected': '0.272727'
        },
    ];

    let calculate = null;

    before(function () {
        calculate = new Calculate();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            for ( let symbol  of testSuit['symbols']) {
                calculate.operation(symbol);
            }

            assert.equal(calculate.memoryResult, testSuit['expected']);
        });
    }
});

