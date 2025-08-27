export namespace URI {
    function expand(template: string, data: { [key: string]: unknown }): string;

    class Template {
        constructor(template: string);
        expand: (data: { [key: string]: unknown }) => string;
        match: (template: string) => { [key: string]: string };
    }
}
