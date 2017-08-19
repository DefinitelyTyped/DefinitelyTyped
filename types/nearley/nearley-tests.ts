import { Parser, Grammar, Rule, Lexer } from 'nearley';

declare const parserRules: Rule[];
declare const parserStart: string;
declare const lexer: Lexer;
declare const grammar: Grammar;

let parser = new Parser(parserRules, parserStart, { lexer, keepHistory: false });
parser = new Parser(grammar);

try {
    parser.feed("<123>");
    if (parser.results) {
        console.log(parser.results[0]);
    }
} catch (error) {
    console.log(error);
}
