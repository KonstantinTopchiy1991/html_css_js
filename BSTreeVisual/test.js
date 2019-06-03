describe('work BSTRee value1', function () {

    const testedData = [
        {
            'value': 7,
            'extends':  7,
            'parent': 9,
            'left': 6,
            'right': 8,
            'childValues': [8, 6, 4, 5, 3, 2, 1 ]
        }
    ];

    let tree = null;

    before(function () {
        tree = new Tree();
        tree.addValue(9);
        tree.addValue(7);
        tree.addValue(11);
        tree.addValue(6);
        tree.addValue(8);
        tree.addValue(4);
        tree.addValue(3);
        tree.addValue(5);
        tree.addValue(2);
        tree.addValue(1);
    });

    for (let testSuit of testedData) {
        it(`test value ${testSuit['value']} extends ${testSuit['extends']}`, function () {
            assert.equal(testSuit['extends'], tree.getValue(testSuit['value']));
            assert.equal(testSuit['parent'], tree.getParentValue(testSuit['value']));
            assert.equal(testSuit['left'], tree.getLeftValue(testSuit['value']));
            assert.equal(testSuit['right'], tree.getRightValue(testSuit['value']));
            assert.deepEqual(testSuit['childValues'], tree.getChildValues(testSuit['value']));

        });
    }
});

describe('work BSTRee value2', function () {

    const testedData = [
        {
            'value': 4,
            'extends':  4,
            'parent': 6,
            'left': 3,
            'right': 5,
            'childValues': [5, 3, 2, 1]
        }
    ];

    let tree = null;

    before(function () {
        tree = new Tree();
        tree.addValue(9);
        tree.addValue(7);
        tree.addValue(11);
        tree.addValue(6);
        tree.addValue(8);
        tree.addValue(4);
        tree.addValue(3);
        tree.addValue(5);
        tree.addValue(2);
        tree.addValue(1);
    });

    for (let testSuit of testedData) {
        it(`test value ${testSuit['value']} extends ${testSuit['extends']}`, function () {
            assert.equal(testSuit['extends'], tree.getValue(testSuit['value']));
            assert.equal(testSuit['parent'], tree.getParentValue(testSuit['value']));
            assert.equal(testSuit['left'], tree.getLeftValue(testSuit['value']));
            assert.equal(testSuit['right'], tree.getRightValue(testSuit['value']));
            assert.deepEqual(testSuit['childValues'], tree.getChildValues(testSuit['value']));

        });
    }
});

describe('work BSTRee value3', function () {

    const testedData = [
        {
            'value': 6,
            'extends':  6,
            'parent': 7,
            'left': 4,
            'right': null,
            'childValues': [4, 5, 3, 2, 1]
        }
    ];

    let tree = null;

    before(function () {
        tree = new Tree();
        tree.addValue(9);
        tree.addValue(7);
        tree.addValue(11);
        tree.addValue(6);
        tree.addValue(8);
        tree.addValue(4);
        tree.addValue(3);
        tree.addValue(5);
        tree.addValue(2);
        tree.addValue(1);
    });

    for (let testSuit of testedData) {
        it(`test value ${testSuit['value']} extends ${testSuit['extends']}`, function () {
            assert.equal(testSuit['extends'], tree.getValue(testSuit['value']));
            assert.equal(testSuit['parent'], tree.getParentValue(testSuit['value']));
            assert.equal(testSuit['left'], tree.getLeftValue(testSuit['value']));
            assert.equal(testSuit['right'], tree.getRightValue(testSuit['value']));
            assert.deepEqual(testSuit['childValues'], tree.getChildValues(testSuit['value']));

        });
    }
});