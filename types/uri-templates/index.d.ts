// Type definitions for uri-templates 0.1.2
// Project: https://github.com/geraintluff/uri-templates
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function utpl(template: string): utpl.URITemplate;

declare namespace utpl {
    export interface URITemplate {
        fillFromObject(vars: Object): string;
        fill(callback: (varName: string) => string): string;
        fromUri(uri: string): Object;
    }
}

export = utpl;
