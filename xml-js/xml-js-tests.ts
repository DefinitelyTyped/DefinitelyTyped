/// <reference path='xml-js.d.ts' />
import { Element, ElementCompact, xml2json, json2xml } from 'xml-js'

// Declaration
const declarationCompact1: ElementCompact = { _declaration: { } };
const declarationCompact2: ElementCompact = { _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' }}};
const declaration1: Element = { declaration: { }};
const declaration2: Element = { declaration: { attributes: { version: '1.0', encoding: 'utf-8' }}};

// Comment
const commentCompact: ElementCompact = { _comment : 'Hello, World!' };
const comment: Element = {elements: [{ type: 'comment', comment: 'Hello, World!' }]};

// CDATA
const cdataCompact: ElementCompact = { _cdata: '<foo></bar>' };
const cdata: Element = { elements : [{ type: 'cdata', cdata: '<foo></bar>' }]};

// Element
const elementCompact1: ElementCompact = { a: {} };
const element1: Element = {elements:[{ type: 'element', name: 'a' }]};

const elementCompact2: ElementCompact = { a: { _attributes: { x: '1.234', y:'It\'s' }}};
const element2: Element = {elements: [{ type: 'element', name: 'a', attributes: { x: '1.234', y: 'It\'s' }}]};

const elementCompact3: ElementCompact = { a: { _text: ' Hi ' }};
const element3: Element = {elements:[{ type: 'element', name: 'a', elements: [{ type: 'text', text: ' Hi ' }]}]};

const elementCompact4: ElementCompact = { a: {}, b: {} };
const element4: Element = {elements:[{ type: 'element', name: 'a' }, { type: 'element', name: 'b' }]};

const elementCompact5: ElementCompact = { a: { b: {} }};
const element5: Element = {elements: [{ type: 'element', name: 'a', elements: [{ type: 'element', name: 'b' }]}]};

// xml2json
const xml = `
<?xml version="1.0" encoding="utf-8"?>
<note importance="high" logged="true">
    <title>Happy</title>
    <todo>Work</todo>
    <todo>Play</todo>
</note>`;
xml2json(xml, { compact: true, spaces: 4 });
xml2json(xml, { compact: false, spaces: 4 });

// json2xml
json2xml(declarationCompact1, { compact: true, spaces: 4 });
json2xml(elementCompact3, { compact: false, spaces: 4 });