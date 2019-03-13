import * as htmlparser2 from 'htmlparser2';

const dh = new htmlparser2.DomHandler((err, dom) => {
    if (err) console.error('Houston, we have a problem!');
    // Testing DomUtils many useful methods

    // getElementsByTagName
    const e = htmlparser2.DomUtils.getElementsByTagName('foo', dom)[0];
    // getText: only text nodes, getInnerHTML: everything, inner tags included
    console.log(htmlparser2.DomUtils.getText(e));
    });
const parser = new htmlparser2.Parser(dh, {decodeEntities: true, xmlMode: true});
parser.write('<div><div><foo>bar</foo></div></div>');
parser.end();
