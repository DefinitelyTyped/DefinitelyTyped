// Type definitions for node-xml2js
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>, Jason McNeil <https://github.com/jasonrm>, Christopher Currens <https://github.com/ccurrens>, Edward Hinkle <https://github.com/edwardhinkle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./processors.d.ts" />

export = xml2js;

import * as events from 'events'

declare namespace xml2js {
    function parseString(xml: convertableToString, callback: (err: any, result: any) => void): void;
    function parseString(xml: convertableToString, options: OptionsV2, callback: (err: any, result: any) => void): void;

    var defaults: {
        '0.1': Options;
        '0.2': OptionsV2;
    }

    class Builder {
        constructor(options?: OptionsV2);
        buildObject(rootObj: any): string;
    }

    class Parser extends events.EventEmitter {
        constructor(options?: OptionsV2);
        parseString(str: convertableToString, cb?: Function): void;
        reset(): void;
    }

    interface Options {
        async?: boolean;
        attrkey?: string;
        attrNameProcessors?: [(name: string) => any];
        attrValueProcessors?: [(name: string) => any];
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
        tagNameProcessors?: [(name: string) => any];
        trim?: boolean;
        validator?: Function;
        valueProcessors?: [(name: string) => any];
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

    interface convertableToString {
        toString(): string;
    }
}
