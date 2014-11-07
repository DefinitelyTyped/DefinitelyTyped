// Type definitions for node-xml2js
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>, Jason McNeil <https://github.com/jasonrm>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'xml2js' {

    export = xml2js;

    module xml2js {
        function parseString(xml: string, callback: (err: any, result: any) => void): void;
        function parseString(xml: string, options: Options, callback: (err: any, result: any) => void): void;

        class Builder {
            constructor(options?: BuilderOptions);
            buildObject(rootObj: any): string;
        }

        interface RenderOptions {
            indent?: string;
            newline?: string;
            pretty?: boolean;
        }

        interface XMLDeclarationOptions {
            encoding?: string;
            standalone?: boolean;
            version?: string;
        }

        interface BuilderOptions {
            doctype?: any;
            headless?: boolean;
            indent?: string;
            newline?: string;
            pretty?: boolean;
            renderOpts?: RenderOptions;
            rootName?: string;
            xmldec?: XMLDeclarationOptions;
        }

        interface Options {
            async?: boolean;
            attrkey?: string;
            attrNameProcessors?: (name: string) => string;
            charkey?: string;
            charsAsChildren?: boolean;
            childkey?: string;
            emptyTag?: any;
            explicitArray?: boolean;
            explicitCharkey?: boolean;
            explicitChildren?: boolean;
            explicitRoot?: boolean;
            ignoreAttrs?: boolean;
            mergeAttrs?: boolean;
            normalize?: boolean;
            normalizeTags?: boolean;
            strict?: boolean;
            tagNameProcessors?: (name: string) => string;
            trim?: boolean;
            validator?: Function;
            xmlns?: boolean;
        }
    }
}
