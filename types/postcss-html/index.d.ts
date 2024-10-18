import { Parser, Stringifier, Syntax } from "postcss";

declare namespace postcssHtml {
    interface Config {
        css?: Syntax | undefined;
        less?: Syntax | undefined;
        scss?: Syntax | undefined;
    }

    let parse: Parser;
    let stringify: Stringifier;
}

declare function postcssHtml(config?: postcssHtml.Config): Syntax;

export = postcssHtml;
