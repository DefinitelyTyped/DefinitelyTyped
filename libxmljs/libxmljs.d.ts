// Type definitions for Libxmljs v0.14.2
// Project: https://github.com/polotek/libxmljs
// Definitions by: François de Campredon <https://github.com/fdecampredon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "libxmljs" {

    import events = require('events');

    export function parseXml(source:string):XMLDocument;
    export function parseHtml(source:string):HTMLDocument;
    export function parseXmlString(source:string):XMLDocument;
    export function parseHtmlString(source:string):HTMLDocument;
 
 
    export class XMLDocument {
        constructor(version:number, encoding:string);
        child(idx:number):Element;
        childNodes():Element[];
        errors():SyntaxError[];
        encoding():string;
        encoding(enc:string):void;
        find(xpath:string):Element[];
        get(xpath:string):Element;
        node(name:string, content:string):Element;
        root():Element;
        toString():string;
        validate(xsdDoc:XMLDocument): boolean;
        validationErrors: XmlError[];
        version():Number;
    }
 
    export class HTMLDocument extends XMLDocument {
 
    }
 
 
    export class Element {
        constructor(doc:XMLDocument, name:string, content?:string);
        name():string;
        name(newName:string):void;
        text():string;
        attr(name:string):Attribute;
        attr(attr:Attribute):void;
        attr(attrObject:{[key:string]:string;}):void;
        attrs():Attribute[];
        parent():Element;
        doc():XMLDocument;
        child(idx:number):Element;
        childNodes():Element[];
        addChild(child:Element):Element;
        nextSibling():Element;
        nextElement():Element;
        addNextSibling(siblingNode:Element):Element;
        prevSibling():Element;
        prevElement():Element;
        addPrevSibling(siblingNode:Element):Element;
        find(xpath:string):Element[];
        find(xpath:string, ns_uri:string):Element[];
        find(xpath:string, namespaces:{[key:string]:string;}):Element[];
        get(xpath:string):Element;
        get(xpath:string, ns_uri:string):Element;
        get(xpath:string, ns_uri:{[key:string]:string;}):Element;
        defineNamespace(href:string):Namespace;
        defineNamespace(prefix:string, href:string):Namespace;
        namespace():Namespace;
        namespace(ns:Namespace):void;
        namespace(href:string):void;
        namespace(prefix:string, href:string):void;
        remove():void;
        path():string;
        type():string;
    }
 
 
    export class Attribute {
        constructor(node:Element, name:string, value:string);
        constructor(node:Element, name:string, value:string, ns:Namespace);
        name():string;
        namespace():Namespace;
        namespace(ns:Namespace):Namespace;
        nextSibling():Attribute;
        node():Element;
        prevSibling():Attribute;
        remove():void;
        value():string;
    }
 
    export class Namespace {
        constructor(node:Element, prefix:string, href:string);
        href():string;
        prefix():string;
    }
 
    export class SaxParser extends events.EventEmitter {
        parseString(source:string):boolean;
    }
 
 
    export class SaxPushParser extends events.EventEmitter {
        push(source:string):boolean;
    }

    export interface XmlError {
        domain: number;
        code: number;
        message: string;
        level: number;
        file?: string;
        column: number;
        line: number;
    }
}
