import * as prettier from 'prettier';
import { ExpressionStatement, CallExpression, Identifier } from 'babel-types';
import * as prettierStandalone from 'prettier/standalone';
import typescriptParser = require('prettier/parser-typescript');
import graphqlParser = require('prettier/parser-graphql');
import babelParser = require('prettier/parser-babel');
import htmlParser = require('prettier/parser-html');
import markdownParser = require('prettier/parser-markdown');
import postcssParser = require('prettier/parser-postcss');
import yamlParser = require('prettier/parser-yaml');
import meriyahParser = require('prettier/parser-meriyah');
import espreeParser = require('prettier/parser-espree');
import glimmerParser = require('prettier/parser-glimmer');
import * as doc from 'prettier/doc';

const formatted = prettier.format('foo ( );', { semi: false });

const isFormatted = prettier.check('foo ( );', { semi: false });

const result = prettier.formatWithCursor(' 1', { cursorOffset: 2 });

const customFormatted = prettier.format('lodash ( )', {
    parser(text, { babel }) {
        const ast = babel(text);
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

prettierStandalone.formatWithCursor(' 1', { cursorOffset: 2, parser: 'babel' });

prettierStandalone.format(' 1', { parser: 'babel' });
prettierStandalone.check(' console.log(b)');

typescriptParser.parsers.typescript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
graphqlParser.parsers.graphql.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
babelParser.parsers.babel.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
htmlParser.parsers.html.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
markdownParser.parsers.markdown.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
postcssParser.parsers.css.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
yamlParser.parsers.yaml.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
meriyahParser.parsers.javascript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
espreeParser.parsers.javascript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
glimmerParser.parsers.javascript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any

prettier.format('hello world', {
    plugins: [typescriptParser, graphqlParser, babelParser, htmlParser, markdownParser, postcssParser, yamlParser],
});

prettier.doc.builders.trim;
prettier.doc.builders.trim.type;
prettier.doc.builders.cursor;
prettier.doc.builders.cursor.type;
prettier.doc.builders.cursor.placeholder;

doc.builders.dedent;
doc.printer.printDocToString;
doc.utils.isEmpty;
doc.debug.printDocToDebug;

interface PluginAST {
    kind: 'line';
    value: string;
}

const plugin: prettier.Plugin<PluginAST> = {
    parsers: {
        lines: {
            parse(text, parsers, options) {
                return { kind: 'line', value: 'This is a line' };
            },
            astFormat: 'lines',
            locStart: node => {
                node; // $ExpectType PluginAST
                return 0;
            },
            locEnd: node => {
                node; // $ExpectType PluginAST
                return 0;
            },
        },
    },
    printers: {
        lines: {
            print(path, options, print) {
                path; // $ExpectType FastPath<PluginAST>
                print; // $ExpectType (path: FastPath<PluginAST>) => Doc

                const node = path.getValue();
                node; // $ExpectType PluginAST

                return node.value;
            },
            printComment(commentPath, options) {
                const comment = commentPath.getValue();
                return comment.value;
            },
        },
    },
    options: {
        testBoolOption: {
            since: '1.0.1',
            type: 'boolean',
            category: 'Test',
            default: true,
            description: 'Move open brace for code blocks onto new line.',
            oppositeDescription: "Don't move open brace for code blocks onto new line.",
        },
        testBoolArrOption: {
            since: '1.0.1',
            type: 'boolean',
            array: true,
            category: 'Test',
            default: [{ value: [true, false, true] }],
            deprecated: true,
            description: 'Move open brace for code blocks onto new line.',
        },
        testIntOption: {
            since: '1.0.2',
            type: 'int',
            category: 'Global',
            default: 15,
            range: {
                start: 5,
                end: 100,
                step: 5,
            },
            deprecated: 'Deprecated can be a string describing deprecation status.',
            description: 'This is a number.',
        },
        testIntArrOption: {
            since: 'forever',
            type: 'int',
            category: 'Test',
            default: [{ value: [3, 8, 12] }],
            array: true,
            description: 'This is a number.',
        },
        testChoiceOption: {
            since: '1.0.3',
            type: 'choice',
            default: 'one',
            choices: [
                { value: 'one', description: 'The number one' },
                { value: 'two', description: 'The number two' },
                { value: 'three', description: 'The number three' },
            ],
            category: 'Test',
            description: 'Choose one of three.',
        },
        testChoiceComplexOption: {
            since: '1.0.5',
            type: 'choice',
            default: [{ since: '1.0.7', value: 'banana' }, { value: 'apple' }],
            choices: [
                { value: 'apple', description: 'A fruit.' },
                { value: 'orange', since: '1.0.6', description: 'A different fruit.' },
                { value: 'banana', since: '1.0.5', description: 'Added in 1.0.5, made default in 1.0.7.' },
            ],
            category: 'Test',
            description: 'Choose one of three.',
        },
        testPathOption: {
            since: '1.0.0',
            type: 'path',
            category: 'Test',
            default: './path.js',
        },
        testPathArrOption: {
            since: '1.0.0',
            type: 'path',
            category: 'Test',
            array: true,
            default: [{ value: ['./pathA.js', './pathB.js'] }],
        },
    },
};

prettier.format('a line!', { parser: 'lines', plugins: [plugin] });
