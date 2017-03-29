// Type definitions for xml-js 0.9.6
// Project: https://github.com/nashwaan/xml-js
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ElementCompact {
    [key: string]: any
    _attributes?: {
        [key: string]: number | number
    }
    _cdata?: string | number
    _comment?: string | number
    _declaration?: {
        _attributes?: {
            version?: string | number
            encoding?: string | number
        }
    }
    _text?: string | number
}

export interface Element {
    attributes?: {
        [key: string]: string | number
    }
    cdata?: string | number
    comment?: string | number
    declaration?: {
        attributes?: {
            version: string | number
            encoding: string | number
        }
    }
    elements?: Array<Element>
    text?: string | number
    type?: string | number
    name?: string | number
}

declare namespace Options {
    interface XML2JS extends ChangingKeyNames, IgnoreOptions {
        compact?: boolean
        spaces?: number | string
        trim?: boolean
        sanitize?: boolean
        nativeType?: boolean
        addParent?: boolean
        alwaysChildren?: boolean
    }

    interface JS2XML extends ChangingKeyNames, IgnoreOptions {
        spaces?: number | string
        compact?: boolean
        fullTagEmptyElement?: boolean
    }

    interface IgnoreOptions {
        ignoreDeclaration?: boolean
        ignoreAttributes?: boolean
        ignoreComment?: boolean
        ignoreCdata?: boolean
        ignoreText?: boolean
    }

    interface ChangingKeyNames {
        declarationKey?: string
        attributesKey?: string
        textKey?: string
        cdataKey?: string
        commentKey?: string
        parentKey?: string
        typeKey?: string
        nameKey?: string
        elementsKey?: string
    }
}

export function js2xml(json: Element | ElementCompact, options?: Options.JS2XML): string;
export function json2xml(json: Element | ElementCompact, options?: Options.JS2XML): string;
export function xml2json(xml: string, options?: Options.XML2JS): any;
export function xml2js(xml: string, options?: Options.XML2JS): any;

