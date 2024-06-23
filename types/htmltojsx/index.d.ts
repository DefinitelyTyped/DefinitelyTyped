declare class HTMLtoJSX {
    constructor(options?: {
        createClass?: boolean | undefined;
        outputClassName?: string | undefined;
        /** as a string e.g. '    ' or '\t' */
        indent?: string | undefined;
    });
    convert(html: string): string;
}
export = HTMLtoJSX;
