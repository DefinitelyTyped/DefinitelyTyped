import parse = require("./parse");
import Parser = require("./Parser");
import { ParserOptions } from "../src/Parser";
import { escapeXML, escapeXMLText, unescapeXML, unescapeXMLText } from "./escape";
import Element = require("./Element");
import { Node } from "../src/Element";
import equal, { attrsEqual, childrenEqual, nameEqual } from "./equal";
import createElement = require("./createElement");
import tag = require("./tag");
import tagString = require("./tagString");
import { isElement, isNode, isText } from "./is";
import clone = require("./clone");
import stringify = require("./stringify");
import JSONify = require("./JSONify");
import { ElementJson } from "../src/JSONify";

export {
    attrsEqual,
    childrenEqual,
    clone,
    createElement,
    Element,
    ElementJson,
    equal,
    escapeXML,
    escapeXMLText,
    isElement,
    isNode,
    isText,
    JSONify,
    nameEqual,
    Node,
    parse,
    Parser,
    ParserOptions,
    stringify,
    tag,
    tagString,
    unescapeXML,
    unescapeXMLText,
};
