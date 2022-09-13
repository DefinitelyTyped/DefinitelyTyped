import * as antlr4 from 'antlr4';
import * as autosuggest from 'antlr4-autosuggest';

class Antlr4JSLexer extends antlr4.Lexer {
    constructor(chars: antlr4.InputStream) {
        super();
    }
}

class Antlr4JSParser extends antlr4.Parser {
    constructor(tokens: antlr4.CommonTokenStream) {
        super(tokens);
    }
}

const autosuggester: autosuggest.AutoSuggester = autosuggest.autosuggester(Antlr4JSLexer, Antlr4JSParser);
const suggestions: string[] = autosuggester.autosuggest('ABC');

const lowercase = autosuggest.autosuggester(Antlr4JSLexer, Antlr4JSParser, 'LOWER');
