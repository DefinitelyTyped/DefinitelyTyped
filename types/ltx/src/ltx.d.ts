import parse from './parse';
import Parser, { ParserOptions } from './Parser';
import { escapeXML, unescapeXML, escapeXMLText, unescapeXMLText } from './escape';
import Element, { Node } from './Element';
import equal, { nameEqual, attrsEqual, childrenEqual } from './equal';
import createElement from './createElement';
import tag from './tag';
import tagString from './tagString';
import { isNode, isElement, isText } from './is';
import clone from './clone';
import stringify from './stringify';
import JSONify, { ElementJson } from './JSONify';

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
