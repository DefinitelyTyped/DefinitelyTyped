import * as React from "react";

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
        };
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
    default?: string | undefined;
    background?: string | undefined;
    background_warning?: string | undefined;
    string?: string | undefined;
    number?: string | undefined;
    colon?: string | undefined;
    keys?: string | undefined;
    keys_whiteSpace?: string | undefined;
    primitive?: string | undefined;
}

interface error {
    reason?: string | undefined;
    line?: number | undefined;
    theme?: string | undefined;
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
    id?: string | undefined;
    placeholder?: any;
    reset?: boolean | undefined;
    viewOnly?: boolean | undefined;
    onChange?: any;
    onBlur?: any;
    confirmGood?: boolean | undefined;
    height?: string | undefined;
    width?: string | undefined;
    onKeyPressUpdate?: boolean | undefined;
    waitAfterKeyPress?: number | undefined;
    modifyErrorText?: ((errorReason: string) => string) | undefined;
    error?: error | undefined;
    colors?: colors | undefined;
    style?: style | undefined;
    theme?: string | undefined;
}

declare class JSONInput extends React.Component<JSONInputProperties> {
}

export default JSONInput;
