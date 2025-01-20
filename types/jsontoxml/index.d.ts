declare namespace jsontoxml {
    function escape(str: string): string;
    function cdata(str: string): string;
    interface JsonToXmlOptions {
        escape?: boolean | undefined;
        xmlHeader?: boolean | { standalone?: boolean | undefined } | undefined;
        docType?: string | undefined;
        prettyPrint?: boolean | undefined;
        indent?: string | undefined;
        removeIllegalNameCharacters?: boolean | undefined;
        html?: boolean | undefined;
    }
}

declare function jsontoxml(data: any, options?: jsontoxml.JsonToXmlOptions): string;

export = jsontoxml;
