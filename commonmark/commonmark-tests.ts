

import commonmark = require('commonmark');

function logNode(node: commonmark.Node) {

    console.log(
        node.destination,
        node.firstChild,
        node.info,
        node.isContainer,
        node.lastChild,
        node.level,
        node.listDelimiter,
        node.listStart,
        node.listTight,
        node.listType,
        node.literal,
        node.next,
        node.onEnter,
        node.onExit,
        node.parent,
        node.prev,
        node.sourcepos,
        node.title,
        node.type);

}

var parser = new commonmark.Parser({ smart: true, time: true });
var node = parser.parse('# a piece of _markdown_');


let w = node.walker();
let step = w.next();
if (step.entering) {
    logNode(step.node);
}


let xmlRenderer = new commonmark.XmlRenderer({ sourcepos: true, time: true });
let xml = xmlRenderer.render(node);
console.log(xml);

let htmlRenderer = new commonmark.HtmlRenderer({ safe: true, smart: true, sourcepos: true, time: true});
let html = htmlRenderer.render(node);
console.log(html);