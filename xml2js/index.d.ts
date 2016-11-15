// Type definitions for node-xml2js
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>, Jason McNeil <https://github.com/jasonrm>, Christopher Currens <https://github.com/ccurrens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export = xml2js;

declare namespace xml2js {
    function parseString(xml: string, callback: (err: any, result: any) => void): void;
    function parseString(xml: string, options: OptionsV2, callback: (err: any, result: any) => void): void;

    var defaults: {
        '0.1': Options;
        '0.2': OptionsV2;
    }

    class Builder {
        constructor(options?: OptionsV2);
        buildObject(rootObj: any): string;
    }

    class Parser {
        constructor(options?: OptionsV2);
        parseString(str: string, cb?: Function): void;
    }

    interface Options {
        async?: boolean;
        attrkey?: string;
        attrNameProcessors?: [(name: string) => string];
        attrValueProcessors?: [(name: string) => string];
        charkey?: string;
        charsAsChildren?: boolean;
        childkey?: string;
        emptyTag?: any;
        explicitArray?: boolean;
        explicitCharkey?: boolean;
        explicitChildren?: boolean;
        explicitRoot?: boolean;
        ignoreAttrs?: boolean;
        includeWhiteChars?: boolean;
        mergeAttrs?: boolean;
        normalize?: boolean;
        normalizeTags?: boolean;
        strict?: boolean;
        tagNameProcessors?: [(name: string) => string];
        trim?: boolean;
        validator?: Function;
        valueProcessors?: [(name: string) => string];
        xmlns?: boolean;
    }

    interface OptionsV2 extends Options {
        preserveChildrenOrder?: boolean;
        rootName?: string;
        xmldec?: {
            version: string;
            encoding?: string;
            standalone?: boolean;
        };
        doctype?: any;
        renderOpts?: {
            pretty?: boolean;
            indent?: string;
            newline?: string;
        };
        headless?: boolean;
        chunkSize?: number;
        cdata?: boolean;
    }
}

