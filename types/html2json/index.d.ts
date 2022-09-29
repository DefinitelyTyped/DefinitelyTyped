// Type definitions for html2json 1.0
// Project: https://github.com/jxck/html2json
// Definitions by: YEK-PLUS <https://github.com/YEK-PLUS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Node {
    node: 'root' | 'element' | 'text' | 'comment';
    tag?: string;
    child?: Node[] | Node;
    text?: string;
    attr?: { [key: string]: string | string[] };
}
export function html2json(html: string): Node;
export function json2html(json: Node): string;
