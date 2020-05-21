// Type definitions for xml 1.0
// Project: http://github.com/dylang/node-xml
// Definitions by: Jianrong Yu <https://github.com/YuJianrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'xml' {
    namespace xml {
        export interface Option {
            /**
             * String used for tab, defaults to no tabs (compressed)
             */
            indent?: string;
            /**
             * Return the result as a `stream` (default false)
             */
            stream?: boolean;
            /**
             * Add default xml declaration (default false)
             */
            declaration?:
                | boolean
                | {
                      encoding?: string;
                      standalone?: string;
                  };
        }

        export interface XmlAttrs {
            [attr: string]: XmlAtom;
        }
        export interface XmlDescArray {
            [index: number]: { _attr: XmlAttrs } | XmlObject;
        }
        export interface ElementObject {
            push(xmlObject: XmlObject): void;
            close(xmlObject?: XmlObject): void;
        }

        export type XmlAtom = string | number | boolean | null;
        export type XmlDesc =
            | { _attr: XmlAttrs }
            | { _cdata: string }
            | { _attr: XmlAttrs; _cdata: string }
            | XmlAtom
            | XmlAtom[]
            | XmlDescArray;
        export type XmlObject = { [tag: string]: ElementObject | XmlDesc } | XmlDesc;

        export function element(...xmlObjects: XmlObject[]): ElementObject;
        export function Element(...xmlObjects: XmlObject[]): ElementObject;
    }

    function xml(
        xmlObject: xml.XmlObject | xml.XmlObject[],
        options: { stream: true; indent?: string },
    ): NodeJS.ReadableStream;
    function xml(xmlObject?: xml.XmlObject | xml.XmlObject[], options?: boolean | string | xml.Option): string;

    export = xml;
}
