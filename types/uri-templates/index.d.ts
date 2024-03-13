declare function utpl(template: string): utpl.URITemplate;

declare namespace utpl {
    export interface URITemplate {
        fillFromObject(vars: { [key: string]: string | { [key: string]: string } }): string;
        fill(callback: (varName: string) => string): string;
        fill(vars: { [key: string]: string | { [key: string]: string } }): string;
        fromUri(uri: string): { [key: string]: string } | undefined;
        varNames: string[];
        template: string;
    }
}

export = utpl;
