// Type definitions for uri-template-lite 19.12
// Project: https://github.com/litejs/uri-template-lite#readme
// Definitions by: Vincenzo Chianese <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace URI {
    function expand(template: string, data: { [key: string]: unknown }): string;
    const Template: Template
}

export type Template = {
    new(template: string): Template;
    expand: (data: { [key: string]: unknown }) => string;
    match: (template: string) => { [key: string]: unknown };
}
