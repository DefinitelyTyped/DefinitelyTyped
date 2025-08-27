export interface Node {
    node: "root" | "element" | "text" | "comment";
    tag?: string;
    child?: Node[] | Node;
    text?: string;
    attr?: { [key: string]: string | string[] };
}
export function html2json(html: string): Node;
export function json2html(json: Node): string;
