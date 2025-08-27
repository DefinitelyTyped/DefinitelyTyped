import cardinal = require("cardinal");
import defaultTheme = require("cardinal/themes/default");
import colors = require("ansicolors");

cardinal.highlight("var x = 1;"); // $ExpectType string
cardinal.highlight("var x = 1;", { theme: defaultTheme }); // $ExpectType string
cardinal.highlightFile("path/to/file.js", { theme: defaultTheme }, (error, result) => {
    error; // $ExpectType Error | null
    result; // $ExpectType string
});
cardinal.highlightFile("path/to/file.js", (error, result) => {
    error; // $ExpectType Error | null
    result; // $ExpectType string
});

const customTheme = {
    "Boolean": {
        // changed from default
        "true": colors.red,
        "false": undefined,
        _default: colors.brightRed,
    },
    "Identifier": {
        "undefined": colors.brightBlack,
        "self": colors.brightRed,
        "console": colors.blue,
        _default: colors.brightCyan,
    },
    "Null": {
        _default: colors.brightBlack,
    },
    "Numeric": {
        _default: colors.blue,
    },
    "String": {
        _default: colors.brightGreen,
    },
    "Keyword": {
        "break": undefined,
        "case": undefined,
        "catch": colors.cyan,
        "continue": undefined,
        "debugger": undefined,
        "default": undefined,
        _default: colors.brightBlue,
    },
    "Punctuator": {
        ";": colors.brightBlack,
        ".": colors.green,
        ",": colors.green,
        "{": colors.yellow,
        "}": colors.yellow,
        "(": colors.brightBlack,
        ")": colors.brightBlack,
        "[": colors.yellow,
        "]": colors.yellow,
        _default: colors.brightYellow,
    },
    Line: {
        _default: colors.brightBlack,
    },
    Block: {
        _default: colors.brightBlack,
    },
    _default: undefined,
};

cardinal.highlight("var x = 1;", { theme: customTheme }); // $ExpectType string
