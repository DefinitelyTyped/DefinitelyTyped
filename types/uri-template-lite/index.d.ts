// Type definitions for uri-template-lite 19.12
// Project: https://github.com/litejs/uri-template-lite#readme
// Definitions by: Vincenzo Chianese <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export namespace URI {
    function expand(template: string, data: { [key: string]: unknown }): string;

    class Template {
        constructor(template: string);
        expand: (data: { [key: string]: unknown }) => string;
        match: (template: string) => { [key: string]: string };
    }
}
