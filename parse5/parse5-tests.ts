// Type definitions for parse5 2.1.5
// Project: https://github.com/inikulin/parse5
// Definitions by: Nico Jansen <https://github.com/nicojs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./parse5.d.ts" />

import * as parse5 from 'parse5';

// parse5.SAXParser()
var parser = new parse5.SAXParser({ locationInfo: true });
parser.on('startTag', (name, attrs, selfClosing, location) => {
    console.log(name, attrs, selfClosing, location);
});
parser.on('text', (text, location)  => {
    console.log(text, location);
});

// parse5.parse()
parse5.parse('html', { locationInfo: true, treeAdapter: parse5.treeAdapters.default });
parse5.parse('html', {});
parse5.parse('html');

// parse5.ParserStream()
var parserStream = new parse5.ParserStream({ locationInfo: true, treeAdapter: parse5.treeAdapters.htmlparser2 });
parserStream = new parse5.ParserStream({ });
parserStream = new parse5.ParserStream();
var node = parserStream.document.childNodes[0];
node.parentNode.attrs = [{name: '', value: ''}];

// parse5.parseFragment()
var fragment = parse5.parseFragment('');
fragment = parse5.parseFragment('', {locationInfo: true});

// parse5.ASTNode
fragment.quirksMode = true;
fragment.namespaceURI = '';
fragment.nodeName = '';
fragment.value = '';
fragment = fragment.parentNode;
fragment = fragment.childNodes[0];
