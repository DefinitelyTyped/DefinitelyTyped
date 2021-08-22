// Type definitions for create-html 4.1
// Project: https://github.com/sethvincent/create-html#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function createHtml(opts: {
    /** Content to insert into <body> tag. */
    body?: string | undefined;
    /** CSS filename. */
    css?: string | string[] | undefined;
    /** Add async attribute to CSS tag. */
    cssAsync?: string | string[] | undefined;
    /** Direction of content. */
    dir?: string | undefined;
    /** Site favicon. */
    favicon?: string | undefined;
    /** Content to insert into <head> tag. */
    head?: string | undefined;
    /** Language of content. */
    lang?: string | undefined;
    /** JavaScript filename. */
    script?: string | string[] | undefined;
    /** Add async attribute to script tag. */
    scriptAsync?: boolean | undefined;
    /** Page title. */
    title?: string | undefined;
}): string;

export = createHtml;
