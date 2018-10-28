// Type definitions for uri-templates 0.1.9
// Project: https://github.com/geraintluff/uri-templates
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Bartek Szczepański <https://github.com/barnski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function utpl(template: string): utpl.URITemplate;

declare namespace utpl {
    export interface URITemplate {
        fillFromObject(vars: { [key: string]: string }): string;
        fill(callback: (varName: string) => string): string;
        fill(vars: { [key: string]: string }): string;
        fromUri(uri: string): { [key: string]: string };
        varNames: string[];
        template: string;
    }
}

export = utpl;
