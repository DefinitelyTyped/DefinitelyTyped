import {InputStream, CommonTokenStream, Lexer} from 'antlr4';
import {CLexer, CParser} from './c-parser';

const inputStream = new InputStream('int x = 10;');
const lexer = new CLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CParser(tokenStream);

// execute the parse, and generate the parse tree
const tree = parser.compilationUnit();
console.log(tree);
