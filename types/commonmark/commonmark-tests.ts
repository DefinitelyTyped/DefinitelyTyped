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

const parser = new commonmark.Parser({ smart: true, time: true });
const node = parser.parse('# a piece of _markdown_');

const w = node.walker();
const step = w.next();
if (step.entering) {
    logNode(step.node);
}

const xmlRenderer = new commonmark.XmlRenderer({ sourcepos: true, time: true });
const xml = xmlRenderer.render(node);
console.log(xml);

const htmlRenderer = new commonmark.HtmlRenderer({ safe: true, smart: true, sourcepos: true, time: true });
const html = htmlRenderer.render(node);
console.log(html);

function basic_usage() {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parsed = reader.parse('Hello *world*'); // parsed is a 'Node' tree
    // transform parsed if you like...
    const result = writer.render(parsed); // result is a String
}

function constructor_optional_options() {
    const writer = new commonmark.HtmlRenderer({ sourcepos: true });
}

function soft_breaks_as_hard_breaks() {
    const writer = new commonmark.HtmlRenderer();
    writer.softbreak = '<br />';
}

function soft_breaks_as_spaces() {
    const writer = new commonmark.HtmlRenderer();
    writer.softbreak = ' ';
}

function text_to_ALL_CAPS(parsed: commonmark.Node) {
    const walker = parsed.walker();
    let event: commonmark.NodeWalkingStep;
    let node: commonmark.Node;

    event = walker.next();
    while (event) {
        node = event.node;
        if (event.entering && node.type === 'text') {
            node.literal = node.literal!.toUpperCase();
        }
        event = walker.next();
    }
}

function emphasis_to_ALL_CAPS(parsed: commonmark.Node) {
    const walker = parsed.walker();
    let event: commonmark.NodeWalkingStep;
    let node: commonmark.Node;
    let inEmph = false;

    event = walker.next();
    while (event) {
        node = event.node;
        if (node.type === 'emph') {
            if (event.entering) {
                inEmph = true;
            } else {
                inEmph = false;
                // add Emph node's children as siblings
                while (node.firstChild) {
                    node.insertBefore(node.firstChild);
                }
                // remove the empty Emph node
                node.unlink();
            }
        } else if (inEmph && node.type === 'text') {
            node.literal = node.literal!.toUpperCase();
        }
        event = walker.next();
    }
}
