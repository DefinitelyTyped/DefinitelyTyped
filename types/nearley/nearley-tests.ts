import { Parser, Rule, Grammar, CompiledRules, Lexer } from 'nearley';

declare const compiledRules: CompiledRules;
declare const lexer: Lexer;

compiledRules.Lexer; // $ExpectType Lexer | undefined
compiledRules.ParserStart; // $ExpectType string
compiledRules.ParserRules; // $ExpectType ParserRule[]
compiledRules.ParserRules[0].name; // $ExpectType string
compiledRules.ParserRules[0].symbols; // $ExpectType any[]
compiledRules.ParserRules[0].postprocess; // $ExpectType Postprocessor | undefined

lexer.reset('');
lexer.reset('', {});
lexer.next(); // $ExpectType string | { value: string; } | undefined
lexer.save(); // $ExpectType LexerState
lexer.formatError('', ''); // $ExpectType string
lexer.formatError({value: ''}, '');

const rule = new Rule(compiledRules.ParserRules[0].name, compiledRules.ParserRules[0].symbols, compiledRules.ParserRules[0].postprocess);

rule.id; // $ExpectType number
rule.name; // $ExpectType string
rule.symbols; // $ExpectType any[]
rule.postprocess; // $ExpectType Postprocessor | undefined

rule.toString(); // $ExpectType string
rule.toString(1);

Grammar.fromCompiled(compiledRules); // $ExpectType Grammar
const grammar = new Grammar([rule]);

grammar.rules; // $ExpectType Rule[]
grammar.start; // $ExpectType string
grammar.byName; // $ExpectType { [ruleName: string]: Rule[]; }
grammar.lexer; // $ExpectType Lexer | undefined

Parser.fail; // $ExpectType {}

const parser = new Parser(grammar);
new Parser(grammar, {lexer});
new Parser(grammar, {keepHistory: false});

parser.grammar; // $ExpectType Grammar
parser.options; // $ExpectType ParserOptions
parser.lexer; // $ExpectType Lexer
parser.lexerState; // $ExpectType LexerState | undefined
parser.current; // $ExpectType number
parser.results; // $ExpectType any[]

parser.feed(''); // $ExpectType Parser
parser.finish(); // $ExpectType any[]
const state = parser.save();
state; // $ExpectType { [key: string]: any; lexerState: LexerState; }
parser.restore(state);

try {
    parser.feed("<123>");
    if (parser.results) {
        console.log(parser.results[0]);
    }
} catch (error) {
    console.log(error);
}
