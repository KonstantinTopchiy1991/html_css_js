// describe('test Calculate method numberPress', function () {
//
//     const testedData = [
//         {
//             'value1' : 2,
//
//             'expected': 2
//         },
//         {
//             'value1' : 12,
//             'expected': 12
//         }
//     ];
//
//     for (let testSuit of testedData) {
//         it(`test value1 ${testSuit['value1']} expected ${testSuit['expected']}`, function () {
//             const act = operation(testSuit['value1']);
//             assert.equal(act, testSuit['expected']);
//         });
//     }
// });

describe('test Calculate method numberPress', function () {

        it('test calc', function () {

            assert.equal(operation('+'), 11);
        });
});