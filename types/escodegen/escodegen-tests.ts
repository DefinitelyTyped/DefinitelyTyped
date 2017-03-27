import * as escodegen from 'escodegen';

let emptyIndentOptions: escodegen.IndentOptions = {};
let indentOptions: escodegen.IndentOptions = {
    style: ' ',
    base: 0,
    adjustMultilineComment: true
};

let emptyFormatOptions: escodegen.FormatOptions = {};
let formatOptions: escodegen.FormatOptions = {
    indent: indentOptions,
    newline: '\n',
    space: ' ',
    json: true,
    renumber: true,
    hexadecimal: true,
    quotes: 'single',
    escapeless: true,
    compact: true,
    parentheses: true,
    semicolons: true,
    safeConcatenation: true,
    preserveBlankLines: true
};

let emptyMozillaOptions: escodegen.MozillaOptions = {};
let mozillaOptions: escodegen.MozillaOptions = {
    starlessGenerator: true,
    parenthesizedComprehensionBlock: true,
    comprehensionExpressionStartsWithAssignment: true
}

let emptyGenerateOptions: escodegen.GenerateOptions = {};
let generateOptions: escodegen.GenerateOptions = {
    format: formatOptions,
    moz: mozillaOptions,
    parse: () => {},
    comment: true,
    sourceMap: " ",
    sourceMapWithCode: true,
    sourceContent: " ",
    sourceCode: " ",
    sourceMapRoot: " ",
    directive: true,
    file: " ",
    verbatim: " "
};

let precedence: escodegen.Precedence = escodegen.Precedence.Primary;
let myCode: string = escodegen.generate({}, generateOptions);
let ast: any = escodegen.attachComments({}, {}, {});
