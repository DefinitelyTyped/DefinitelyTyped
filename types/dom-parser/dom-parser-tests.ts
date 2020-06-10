import DomParser = require('dom-parser');

const parser = new DomParser();

const exampleHtml =
    '<html><body><div id="one" class="myclass"></div><div id="two" class="myclass"></div></body></html>';

const dom = parser.parseFromString(exampleHtml); // $ExpectType Dom

const element = dom.getElementById('one'); // $ExpectType Node | null
dom.getElementsByClassName('myclass'); // $ExpectType Node[] | null
dom.getElementsByTagName('div'); // $ExpectType Node[] | null
dom.getElementsByName('somenonexistentname'); // $ExpectType Node[] | null
dom.getElementsByAttribute('nonexistentattr'); // $ExpectType Node[] | null

if (element) {
    element.getAttribute('madeupattr'); // $ExpectType string | null

    element.nodeType; // $ExpectType NodeType
    element.nodeName; // $ExpectType string
    element.childNodes; // $ExpectType Node[]
    element.firstChild; // $ExpectType Node | null
    element.lastChild; // $ExpectType Node | null
    element.parentNode; // $ExpectType Node | null
    element.attributes; // $ExpectType string[]
    element.innerHTML; // $ExpectType string
    element.outerHTML; // $ExpectType string
    element.textContent; // $ExpectType string
}
