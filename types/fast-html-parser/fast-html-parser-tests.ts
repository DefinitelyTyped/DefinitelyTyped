import { NodeType, parse } from 'fast-html-parser';

const root = parse(
    '<!doctype html><html lang="en-us"><html><body><div id="firstdiv">   first-div   </div><div>  second-div  </div></body></html>',
    {
        lowerCaseTagName: true,
        pre: true,
        script: true,
        style: true,
    },
);

const firstDiv = root.querySelector('div');
const paragraph = parse('<p>This is a paragraph</p>');
const firstDivWithParagraph = firstDiv ? firstDiv.appendChild(paragraph) : null;

console.log(root.nodeType);
console.log(firstDiv);
console.log(firstDivWithParagraph);
console.log(root.rawAttributes);
console.log(root.rawAttrs);
console.log(root.rawText);
console.log(root.removeWhitespace());
console.log(root.structure);
console.log(root.structuredText);
console.log(root.tagName);
console.log(root.text);
console.log(root.trimRight());
console.log(root.querySelectorAll('div'));
console.log(NodeType.ELEMENT_NODE);
