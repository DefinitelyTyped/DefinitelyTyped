declare class Template {
    constructor(template: string);
    expand(data: { [key: string]: unknown }): string;
    match(uri: string): { [key: string]: string };
}

declare function expand(template: string, data: { [key: string]: unknown }): string;

declare namespace Template {
    export { expand };
}

export = Template;
