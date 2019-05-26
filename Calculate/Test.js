describe('plus works correctly', function () {

    const testedData = [
        {
            'symbols': ['2', '1', '+', '4', '5', '='],
            'expected': '66'
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