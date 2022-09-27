import * as prettier from 'prettier';
import { ExpressionStatement, CallExpression, Identifier } from 'babel-types';
import * as prettierStandalone from 'prettier/standalone';
import angularParser = require('prettier/parser-angular');
import babelParser = require('prettier/parser-babel');
import espreeParser = require('prettier/parser-espree');
import flowParser = require('prettier/parser-flow');
import glimmerParser = require('prettier/parser-glimmer');
import graphqlParser = require('prettier/parser-graphql');
import htmlParser = require('prettier/parser-html');
import markdownParser = require('prettier/parser-markdown');
import meriyahParser = require('prettier/parser-meriyah');
import postcssParser = require('prettier/parser-postcss');
import typescriptParser = require('prettier/parser-typescript');
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

// @ts-expect-error
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

prettier.getSupportInfo(); // $ExpectType SupportInfo

prettierStandalone.formatWithCursor(' 1', { cursorOffset: 2, parser: 'babel' });
// @ts-expect-error
prettierStandalone.formatWithCursor(' 1', { cursorOffset: 2, parser: 'babel', rangeStart: 2 });
// @ts-expect-error
prettierStandalone.formatWithCursor(' 1', { cursorOffset: 2, parser: 'babel', rangeEnd: 2 });

prettierStandalone.format(' 1', { parser: 'babel' });
prettierStandalone.check(' console.log(b)');
prettierStandalone.getSupportInfo(); // $ExpectType SupportInfo

angularParser.parsers.__ng_action.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
babelParser.parsers.babel.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
espreeParser.parsers.espree.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
flowParser.parsers.flow.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
glimmerParser.parsers.glimmer.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
graphqlParser.parsers.graphql.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
htmlParser.parsers.html.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
markdownParser.parsers.markdown.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
meriyahParser.parsers.meriyah.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
postcssParser.parsers.css.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
typescriptParser.parsers.typescript.parse; // $ExpectType (text: string, parsers: { [parserName: string]: Parser<any>; }, options: ParserOptions<any>) => any
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
    kind: 'line';
    value: string;
}

const plugin: prettier.Plugin<PluginAST> = {
    languages: [
        {
            name: 'Shell',
            parsers: ['sh'],
            interpreters: ['bash', 'zsh']
        }
    ],
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
                path; // $ExpectType AstPath<PluginAST>
                print; // $ExpectType (path: AstPath<PluginAST>) => Doc

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
        testNoDefaultOption: {
            since: '1.0.0',
            type: 'path',
            category: 'Test',
        },
    },
};

prettier.format('a line!', { parser: 'lines', plugins: [plugin] });

prettier.format('pluginSearchDir is empty', {
    pluginSearchDirs: [],
});

prettier.format('pluginSearchDir is not empty', {
    pluginSearchDirs: ['/a', '/b'],
});

prettier.format('pluginSearchDir is not empty and mixed with weird stuff', {
    pluginSearchDirs: ['c', 'd', ''],
});

prettier.format('pluginSearchDir is false', {
    pluginSearchDirs: false,
});

prettier.format('pluginSearchDir can not be true', {
    // @ts-expect-error
    pluginSearchDirs: true,
});

prettier.format('singleAttributePerLine is available', {
    singleAttributePerLine: true,
});

type NestedAst = Nested1 | Nested2 | Nested3;
interface Nested1 {
    kind: '1';
    item2: Nested2;
    list2: Nested2[];
    list4?: Nested2[];
}
interface Nested2 {
    kind: '2';
    item3: Nested3;
    list3: Nested3[];
}
interface Nested3 {
    kind: '3';
    item1: Nested1;
    list1: Nested1[];
}

function print(
    // Using Nested1 because we're assuming you've already determined the kind
    // of node based on some discriminated union. If you're determining the kind
    // of node within the same place that you need access to the path, it's
    // easiest to do something the to effect of:
    //
    //     if (node.kind === "1") {
    //       const nodePath = path as AstPath<typeof node>;
    //     }
    //
    // In the example above, nodePath will then be a type-narrowed version of
    // the path variable that you can then use to correctly type the tree-walk
    // functions.
    path: prettier.AstPath<Nested1>,
    options: prettier.ParserOptions<NestedAst>,
    print: (path: prettier.AstPath<NestedAst>) => prettier.doc.builders.Doc,
): prettier.doc.builders.Doc {
    path.call(child => {
        child; // $ExpectType AstPath<Nested1>
    });

    path.call(child => {
        child; // $ExpectType AstPath<Nested2>
    }, 'item2');

    path.call(
        child => {
            child; // $ExpectType AstPath<Nested3>
        },
        'item2',
        'item3',
    );

    path.call(
        child => {
            child; // $ExpectType AstPath<Nested1>
        },
        'item2',
        'item3',
        'item1',
    );

    path.call(
        child => {
            child; // $ExpectType AstPath<Nested2>
        },
        'item2',
        'item3',
        'item1',
        'item2',
    );

    path.call(
        child => {
            child; // $ExpectType AstPath<any>
        },
        'item2',
        'item3',
        'item1',
        'item2',
        'item3',
    );

    path.each(child => {
        child; // $ExpectType AstPath<Nested2>
    }, 'list2');

    path.each(child => {
        child; // $ExpectType AstPath<Nested2>
    }, 'list4');

    path.each(
        child => {
            child; // $ExpectType AstPath<Nested3>
        },
        'list2',
        0,
        'list3',
    );

    path.each(
        child => {
            child; // $ExpectType AstPath<any>
        },
        'list2',
        0,
        'list3',
        0,
        'list1',
    );

    path.map(child => {
        child; // $ExpectType AstPath<Nested2>
    }, 'list2');

    path.map(child => {
        child; // $ExpectType AstPath<Nested2>
    }, 'list4');

    path.map(
        child => {
            child; // $ExpectType AstPath<Nested3>
        },
        'list2',
        0,
        'list3',
    );

    path.map(
        child => {
            child; // $ExpectType AstPath<any>
        },
        'list2',
        0,
        'list3',
        0,
        'list1',
    );

    // @ts-expect-error
    path.call(print, 'list2');
    // @ts-expect-error
    path.call(print, 'list4');
    // @ts-expect-error
    path.call(print, 'item2', 'list3');

    // @ts-expect-error
    path.each(print, 'item2');
    // @ts-expect-error
    path.each(print, 'item2', 'item3');

    // @ts-expect-error
    path.map(print, 'item2');
    // @ts-expect-error
    path.map(print, 'item2', 'item3');

    return '';
}
