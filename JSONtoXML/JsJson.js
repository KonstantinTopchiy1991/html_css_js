let jsonText = document.querySelector('.json__text');
let xmlText = document.querySelector('.xml__text');
let parse = document.getElementById('parse');
let clear = document.getElementById('clear');

const parser = new Parser();

parse.addEventListener('click', function (e) {
    let result = parser.formXmlFromJson(jsonText.value);
    xmlText.value = result;
});

clear.addEventListener('click', function (e) {
    jsonText.value = '';
    xmlText.value = '';
});

function Parser() {

    this.formXml = function (obj) {
        let xml = '';
        if (typeof obj === 'object') {
            for (let prop in obj) {
                if (obj[prop] instanceof Array) {
                    for (let indexElem in obj[prop]) {
                        xml += '<' + prop + '>';
                        xml += this.formXml(obj[prop][indexElem]);
                        xml += '</' + prop + '>\n';
                    }
                } else {
                    xml += '<' + prop + '>';
                    typeof obj[prop] == 'object' ? xml += '\n' + this.formXml(obj[prop]) : xml += obj[prop];
                    xml += '</' + prop + '>\n';
                }
            }

        } else {
            xml = obj;
        }
        return xml;
    };


    this.formXmlFromJson = function (json) {
        let object = JSON.parse(json);
        let xml = this.formXml(object);
        let version = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n';
        return version + '<root>\n' + xml + '</root>';
    }
}