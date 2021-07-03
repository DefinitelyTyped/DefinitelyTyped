// Type definitions for react-json-editor-ajrm 2.5
// Project: https://github.com/AndrewRedican/react-json-editor-ajrm#readme
// Definitions by: “GlennChia” <https://github.com/GlennChia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface locale {
    format: string;
    symbols: {
        colon: string;
        comma: string;
        semicolon: string;
        slash: string;
        backslash: string;
        brackets: {
            round: string;
            square: string;
            curly: string;
            angle: string;
        };
        period: string;
        quotes: {
            single: string;
            double: string;
            grave: string;
        };
        space: string;
        ampersand: string;
        asterisk: string;
        at: string;
        equals: string;
        hash: string;
        percent: string;
        plus: string;
        minus: string;
        dash: string;
        hyphen: string;
        tilde: string;
        underscore: string;
        bar: string;
    };
    types: {
        key: string;
        value: string;
        number: string;
        string: string;
        primitive: string;
        boolean: string;
        character: string;
        integer: string;
        array: string;
        float: string;
    };
    invalidToken: {
        tokenSequence: {
            prohibited: string;
            permitted: string;
        };
        termSequence: {
            prohibited: string;
            permitted: string;
        };
        double: string;
        useInstead: string;
        unexpected: string;
    };
    brace: {
        curly: {
            missingOpen: string;
            missingClose: string;
            cannotWrap: string;
        };
        square: {
            missingOpen: string;
            missingClose: string;
            cannotWrap: string;
        }
    };
    string: {
        missingOpen: string;
        missingClose: string;
        mustBeWrappedByQuotes: string;
        nonAlphanumeric: string;
        unexpectedKey: string;
    };
    key: {
        numberAndLetterMissingQuotes: string;
        spaceMissingQuotes: string;
        unexpectedString: string;
    };
    noTrailingOrLeadingComma: string;
}

interface colors {
    default?: string;
    background?: string;
    background_warning?: string;
    string?: string;
    number?: string;
    colon?: string;
    keys?: string;
    keys_whiteSpace?: string;
    primitive?: string;
}

interface error {
    reason?: string;
    line?: number;
    theme?: string;
}

interface style {
    outerBox?: any;
    container?: any;
    warningBox?: any;
    errorMessage?: any;
    body?: any;
    labelColumn?: any;
    labels?: any;
    contentBox?: any;
}

interface JSONInputProperties {
    locale: locale;
    id?: string;
    placeholder?: any;
    reset?: boolean;
    viewOnly?: boolean;
    onChange?: any;
    onBlur?: any;
    confirmGood?: boolean;
    height?: string;
    width?: string;
    onKeyPressUpdate?: string;
    waitAfterKeyPress?: number;
    modifyErrorText?: (errorReason: string) => string;
    error?: error;
    colors?: colors;
    style?: style;
    theme?: string;
}

declare class JSONInput extends React.Component<JSONInputProperties> {
}

export default JSONInput;
