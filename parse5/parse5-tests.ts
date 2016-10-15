// Type definitions for parse5 2.2.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Nico Jansen <https://github.com/nicojs>, Meirion Hughes <https://github.com/MeirionHughes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./parse5.d.ts" />

import * as parse5 from 'parse5';

// parse5.SAXParser()
var parser = new parse5.SAXParser({ locationInfo: true });

var _wasCalled = false;

parser.on('startTag', (name, attrs, selfClosing, location) => {
    console.log(name, attrs, selfClosing, location);
    console.log(attrs[0].name);
    console.log(attrs[0].prefix);
    console.log(attrs[0].value);

    if(name == "use")
        if(attrs[0].prefix === undefined)
            throw "prefix wasn't defined on known attr"

    _wasCalled = true;
});

parser.on('text', (text, location)  => {
    console.log(text, location);
});

parser.write('some text');
parser.write('<svg class="icon"><use xlink:href="icons.svg#some_selector"></use></svg>');

if(!_wasCalled)
    throw "parser.on 'startTag' wasn't called";

// parse5.parse()
parse5.parse('<html></html>', { locationInfo: true, treeAdapter: parse5.treeAdapters.default });
parse5.parse('html', {});
parse5.parse('');

// parse5.ParserStream()
var parserStream = new parse5.ParserStream({ locationInfo: true, treeAdapter: parse5.treeAdapters.htmlparser2 });
parserStream = new parse5.ParserStream({ });
parserStream = new parse5.ParserStream();

parserStream.write("<html></html>");

var node = parserStream.document.childNodes[0];

node.parentNode.attrs = [{name: '', value: ''}];

// parse5.parseFragment()
var fragment = parse5.parseFragment('<div></div>');
fragment = parse5.parseFragment('<div></div>', {locationInfo: true});

// parse5.ASTNode
fragment.quirksMode = true;
fragment.namespaceURI = '';
fragment.nodeName = '';
fragment.value = '';
fragment.data = '';
fragment = fragment.childNodes[0];
fragment = fragment.parentNode;
