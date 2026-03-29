export = textile;
declare function textile(txt: string, opts?: textile.Options): string;
declare namespace textile {
    type Tag = string;
    type JMLAttributes = Record<string, string | number | boolean | null | undefined>;
    type JMLElement = [Tag, ...(JMLAttributes | JMLElement | string)[]];
    type JMLNode = Array<JMLElement | string> & { sourceLength?: number };
    type JMLDocument = ["html", ...(JMLElement | string)[]];
    type TokenType = "OPEN" | "CLOSE" | "TEXT" | "SINGLE" | "WS" | "COMMENT";
    type Token =
        | {
              type: "OPEN" | "CLOSE" | "SINGLE";
              tag: Tag;
              attr?: JMLAttributes;
              pos: number;
              src: string;
          }
        | {
              type: "TEXT" | "WS" | "COMMENT";
              data: string;
              pos: number;
              src: string;
          };
    interface Options {
        breaks?: boolean;
    }
    const defaults: Options;
    function setOptions(opt: Options): typeof textile;
    function setoptions(opt: Options): typeof textile;
    function parse(txt: string, opts?: Options): string;
    function convert(txt: string, opts?: Options): string;
    function jsonml(txt: string, opts?: Options): JMLDocument;
    function serialize(jsonml: JMLElement | string): string;
    function html_parser(tokens: Token[], lazy?: boolean): JMLNode;
}
