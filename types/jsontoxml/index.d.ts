// Type definitions for jsontoxml 1.0
// Project: https://github.com/soldair/node-jsontoxml, https://github.com/ken-franken/node-jsontoxml
// Definitions by: benstevens48 <https://github.com/benstevens48>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsontoxml {
    function escape(str: string): string;
    function cdata(str: string): string;
    interface JsonToXmlOptions {
        escape?: boolean | undefined;
        xmlHeader?: boolean | {standalone?: boolean | undefined} | undefined;
        docType?: string | undefined;
        prettyPrint?: boolean | undefined;
        indent?: string | undefined;
        removeIllegalNameCharacters?: boolean | undefined;
        html?: boolean | undefined;
    }
}

declare function jsontoxml(data: any, options?: jsontoxml.JsonToXmlOptions): string;

export = jsontoxml;
