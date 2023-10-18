export = beautify;

declare function beautify(content: string, options: Options): string;

interface Options {
    format: "css" | "json" | "js" | "html" | "xml";
}
