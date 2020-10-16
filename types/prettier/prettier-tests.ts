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
    kind: "line";
    value: string;
}

const plugin: prettier.Plugin<PluginAST> = {
    parsers: {
        lines: {
            parse(text, parsers, options) {
                return { kind: "line", value: "This is a line" };
            },
            astFormat: "lines",
            locStart: (node) => {
                node; // $ExpectType PluginAST
                return 0;
            },
            locEnd: (node) => {
                node; // $ExpectType PluginAST
                return 0;
            }
        }
    },
    printers: {
        lines: {
            print(path, options, print) {
                path; // $ExpectType FastPath<PluginAST>
                print; // $ExpectType (path: FastPath<PluginAST>) => Doc

                const node = path.getValue();
                node; // $ExpectType PluginAST

                return node.value;
            }
        }
    }
};

prettier.format("a line!", { parser: "lines", plugins: [plugin] });
