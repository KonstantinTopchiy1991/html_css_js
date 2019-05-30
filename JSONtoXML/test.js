describe('work json2xml', function () {

    const testedData = [
        {
            'json': '{"name": "Vasya", "location": {"country": "Ukraine"} }',
            'xml': '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<root>\n' +
                '<name>Vasya</name>\n' +
                '<location>' +
                '<country>Ukraine</country>\n' +
                '</location>\n' +
                '</root>'
        }
    ];

    let parser = null;

    before(function () {
        parser = new Parser();
    });

    for (let testSuit of testedData) {
        it(`test xml ${testSuit['xml']}`, function () {

            const act = parser.formXmlFromJson(testSuit['json']);
            assert.equal(act, testSuit['xml']);
        });
    }
});

describe('work json2xml [ ]', function () {

    const testedData = [
        {
            'json': '{"name": "Vasya", "location": {"country": "Ukraine"}, "friends": [1, 2] }',
            'xml': '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<root>\n' +
                '<name>Vasya</name>\n' +
                '<location>' +
                '<country>Ukraine</country>\n' +
                '</location>\n' +
                '<friends>' +
                '1' +
                '</friends>\n' +
                '<friends>' +
                '2' +
                '</friends>\n' +
                '</root>'
        }
    ];

    let parser = null;

    before(function () {
        parser = new Parser();
    });

    for (let testSuit of testedData) {
        it(`test xml ${testSuit['xml']}`, function () {

            const act = parser.formXmlFromJson(testSuit['json']);
            assert.equal(act, testSuit['xml']);
        });
    }
});