import * as AsObjects from "./AsObjects";
import * as Parser from "./Parser";
import * as Stringer from "./Stringer";

export = make;

declare function make(options?: Parser.ParserOptions): Parser;

type ParserClass = Parser;
type ParserType = typeof Parser;

declare namespace make {
    type Parser = ParserClass;
    const Parser: ParserType;
    function parser(options?: Parser.ParserOptions): Parser;
}
