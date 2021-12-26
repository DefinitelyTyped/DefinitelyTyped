import parse = require('./parse');
import Parser = require('./Parser');
import { ParserOptions } from '../src/Parser';
import { escapeXML, unescapeXML, escapeXMLText, unescapeXMLText } from './escape';
import Element = require('./Element');
import { Node } from '../src/Element';
import equal, { nameEqual, attrsEqual, childrenEqual } from './equal';
import createElement = require('./createElement');
import tag = require('./tag');
import tagString = require('./tagString');
import { isNode, isElement, isText } from './is';
import clone = require('./clone');
import stringify = require('./stringify');
import JSONify = require('./JSONify');
import { ElementJson } from '../src/JSONify';

export {
    Element,
    Node,
    equal,
    nameEqual,
    attrsEqual,
    childrenEqual,
    isNode,
    isElement,
    isText,
    clone,
    createElement,
    escapeXML,
    unescapeXML,
    escapeXMLText,
    unescapeXMLText,
    Parser,
    ParserOptions,
    parse,
    tag,
    tagString,
    stringify,
    JSONify,
    ElementJson,
};
