/// <reference types="node" />

import xmlEscape = require("xml-escape");

const xml = `
<message>
  <to>Barack Obama</to>
  <from>Joe Biden</from>
  <subject>Cats</subject>
  <content>I freakin' love cats!!&!</content
</message>
`;

const fullEscaped = xmlEscape(xml); // $ExpectType string
const preservingApostrophe = xmlEscape(xml, "&"); // $ExpectType string

console.info({
    fullEscaped,
    preservingApostrophe
});
