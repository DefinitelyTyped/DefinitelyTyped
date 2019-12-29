import * as prettier from 'prettier';
import { ExpressionStatement, CallExpression, Identifier } from 'babel-types';
import * as prettierStandalone from 'prettier/standalone';
import typescriptParser = require('prettier/parser-typescript');
import graphqlParser = require('prettier/parser-graphql');
import babylonParser = require('prettier/parser-babylon');
import htmlParser = require('prettier/parser-html');
import markdownParser = require('prettier/parser-markdown');
import postcssParser = require('prettier/parser-postcss');
import yamlParser = require('prettier/parser-yaml');

const formatted = prettier.format('foo ( );', { semi: false });

const isFormatted = prettier.check('foo ( );', { semi: false });

const result = prettier.formatWithCursor(' 1', { cursorOffset: 2 });

const customFormatted = prettier.format('lodash ( )', {
    parser(text, { babylon }) {
        const ast = babylon(text);
        const statement = ast.program.body[0] as ExpressionStatement;
        const expression = statement.expression as CallExpression;
        const identifier = expression.callee as Identifier;
        identifier.name = '_';
        return ast;
    },
});

prettier.resolveConfig('path/to/somewhere').then(options => {
    if (options !== null) {
        const formatted = prettier.format('hello world', options);
    }
});

if (prettier.getFileInfo.sync('./tsconfig.json').inferredParser !== 'json') {
    throw new Error('Bad parser');
}

prettier.getFileInfo('./tsconfig.json').then(result => {
    if (result.inferredParser !== 'json') {
        throw new Error('Bad parser');
    }
});

// $ExpectError
prettier.resolveConfig();

const options = prettier.resolveConfig.sync('path/to/somewhere');
if (options !== null) {
    const formatted = prettier.format('hello world', options);
}

prettier.resolveConfigFile().then(filePath => {
    if (filePath !== null) {
        prettier.resolveConfig(filePath);
    }
});
prettier.resolveConfigFile('/path').then(filePath => {
    if (filePath !== null) {
        prettier.resolveConfig(filePath);
    }
});

const configFilePathInCurrentDir = prettier.resolveConfigFile.sync();
const configFilePathInSpecificPath = prettier.resolveConfigFile.sync('/path');

prettier.clearConfigCache();

const currentSupportInfo = prettier.getSupportInfo();
const specificSupportInfo = prettier.getSupportInfo('1.8.0');

prettierStandalone.formatWithCursor(' 1', { cursorOffset: 2, parser: 'babel' });

prettierStandalone.format(' 1', { parser: 'babel' });
prettierStandalone.check(' console.log(b)');

typescriptParser.parsers.typescript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
graphqlParser.parsers.graphql.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
babylonParser.parsers.babylon.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
htmlParser.parsers.html.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
markdownParser.parsers.markdown.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
postcssParser.parsers.postcss.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any
yamlParser.parsers.yaml.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser; }, options: ParserOptions) => any

prettier.format('hello world', {plugins: [typescriptParser, graphqlParser, babylonParser, htmlParser, markdownParser, postcssParser, yamlParser]});
