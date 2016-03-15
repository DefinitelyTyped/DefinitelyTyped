// Type definitions for uri-templates 0.1.5
// Project: https://github.com/geraintluff/uri-templates
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Juan Tamayo <https://github.com/jtamayo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class UriTemplate {
    constructor(template: string);
    fillFromObject(vars: Object): string;
    fill(callback: (varName: string) => string): string;
    fromUri(uri: string): Object;
}

interface UriTemplateFactory {
    (template: string): typeof UriTemplate;
}

declare module "uri-templates" {
    export = UriTemplateFactory;
}
