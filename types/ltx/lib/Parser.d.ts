import { EventEmitter } from "events";
import Element = require("./Element.js");

declare class Parser extends EventEmitter {
    static DefaultParser: typeof Parser;
    static DefaultElement: typeof Element;

    constructor(options?: Parser.ParserOptions);

    write(data: string | { toString(): string }): void;
    end(data: string | { toString(): string }): void;
}
export = Parser;

declare namespace Parser {
    interface ParserOptions {
        Parser?: typeof Parser | undefined;
        Element?: typeof Element | undefined;
    }
}
