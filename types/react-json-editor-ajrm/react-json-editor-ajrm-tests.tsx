import * as React from 'react';
import JSONInput from 'react-json-editor-ajrm';

const sampleObject = {
    greeting: "hello world"
};

const localeEn = {
    format: "{reason} at line {line}",
    symbols: {
        colon: "colon",           // :
        comma: "comma",           // ,  ،  、
        semicolon: "semicolon",   // ;
        slash: "slash",           // /  relevant for comment syntax support
        backslash: "backslash",   // \  relevant for escaping character
        brackets: {
            round: "round brackets",   // ( )
            square: "square brackets", // [ ]
            curly: "curly brackets",   // { }
            angle: "angle brackets"    // < >
        },
        period: "period",          // . Also known as full point, full stop, or dot
        quotes: {
            single: "single quote", // '
            double: "double quote", // "
            grave: "grave accent"   // ` used on Javascript ES6 Syntax for String Templates
        },
        space: "space",           //
        ampersand: "ampersand",   // &
        asterisk: "asterisk",     // *  relevant for some comment sytanx
        at: "at sign",            // @  multiple uses in other coding languages including certain data types
        equals: "equals sign",    // =
        hash: "hash",             // #
        percent: "percent",       // %
        plus: "plus",             // +
        minus: "minus",           // −
        dash: "dash",             // −
        hyphen: "hyphen",         // −
        tilde: "tilde",           // ~
        underscore: "underscore", // _
        bar: "vertical bar",      // |
    },
    types: { // ... Reference: https://en.wikipedia.org/wiki/List_of_data_structures
        key: "key",
        value: "value",
        number: "number",
        string: "string",
        primitive: "primitive",
        boolean: "boolean",
        character: "character",
        integer: "integer",
        array: "array",
        float: "float",
    },
    invalidToken: {
        tokenSequence: {
            prohibited: "'{firstToken}' token cannot be followed by '{secondToken}' token(s)",
            permitted: "'{firstToken}' token can only be followed by '{secondToken}' token(s)"
        },
        termSequence: {
            prohibited: "A {firstTerm} cannot be followed by a {secondTerm}",
            permitted: "A {firstTerm} can only be followed by a {secondTerm}"
        },
        double: "'{token}' token cannot be followed by another '{token}' token",
        useInstead: "'{badToken}' token is not accepted. Use '{goodToken}' instead",
        unexpected: "Unexpected '{token}' token found"
    },
    brace: {
        curly: {
            missingOpen: "Missing '{' open curly brace",
            missingClose: "Open '{' curly brace is missing closing '}' curly brace",
            cannotWrap: "'{token}' token cannot be wrapped in '{}' curly braces"
        },
        square: {
            missingOpen: "Missing '[' open square brace",
            missingClose: "Open '[' square brace is missing closing ']' square brace",
            cannotWrap: "'{token}' token cannot be wrapped in '[]' square braces"
        }
    },
    string: {
        missingOpen: "Missing/invalid opening string '{quote}' token",
        missingClose: "Missing/invalid closing string '{quote}' token",
        mustBeWrappedByQuotes: "Strings must be wrapped by quotes",
        nonAlphanumeric: "Non-alphanumeric token '{token}' is not allowed outside string notation",
        unexpectedKey: "Unexpected key found at string position"
    },
    key: {
        numberAndLetterMissingQuotes: "Key beginning with number and containing letters must be wrapped by quotes",
        spaceMissingQuotes: "Key containing space must be wrapped by quotes",
        unexpectedString: "Unexpected string found at key position"
    },
    noTrailingOrLeadingComma: "Trailing or leading commas in arrays and objects are not permitted"
};

const dark_vscode_tribute = {
    default            : '#D4D4D4',
    background         : '#1E1E1E',
    background_warning : '#1E1E1E',
    string             : '#CE8453',
    number             : '#B5CE9F',
    colon              : '#49B8F7',
    keys               : '#9CDCFE',
    keys_whiteSpace    : '#AF74A5',
    primitive          : '#6392C6'
};

<JSONInput
    id          = 'a_unique_id'
    placeholder = { sampleObject }
    colors      = { dark_vscode_tribute }
    locale      = { localeEn }
    height      = '550px'
/>;
