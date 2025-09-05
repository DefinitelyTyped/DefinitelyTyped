import parse = require("./parse.js");
import Parser = require("./Parser.js");
import { ParserOptions } from "../src/Parser.js";
import { escapeXML, escapeXMLText, unescapeXML, unescapeXMLText } from "./escape.js";
import Element = require("./Element.js");
import { Node } from "../src/Element.js";
import equal, { attrsEqual, childrenEqual, nameEqual } from "./equal.js";
import createElement = require("./createElement.js");
import tag = require("./tag.js");
import tagString = require("./tagString.js");
import { isElement, isNode, isText } from "./is.js";
import clone = require("./clone.js");
import stringify = require("./stringify.js");
import JSONify = require("./JSONify.js");
import { ElementJson } from "../src/JSONify.js";

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
