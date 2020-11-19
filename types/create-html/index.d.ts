// Type definitions for create-html 4.1
// Project: https://github.com/sethvincent/create-html#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function createHtml(opts: {
    /** Content to insert into <body> tag. */
    body?: string;
    /** CSS filename. */
    css?: string | string[];
    /** Add async attribute to CSS tag. */
    cssAsync?: string | string[];
    /** Direction of content. */
    dir?: string;
    /** Site favicon. */
    favicon?: string;
    /** Content to insert into <head> tag. */
    head?: string;
    /** Language of content. */
    lang?: string;
    /** JavaScript filename. */
    script?: string | string[];
    /** Add async attribute to script tag. */
    scriptAsync?: boolean;
    /** Page title. */
    title?: string;
}): string;

export = createHtml;
