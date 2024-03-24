import espree = require("espree");
import type { Options } from "espree";

const ast = espree.parse("let foo = \"bar\"");
const ast_option = espree.parse("let foo = \"bar\"", { ecmaVersion: 6 });

const tokens = espree.tokenize("let foo = \"bar\"");
const tokens_option = espree.tokenize("let foo = \"bar\"", { ecmaVersion: 6 });

// $ExpectType string
const version = espree.version;

const visitor_keys = espree.VisitorKeys;

// $ExpectType number
const latest_ecma = espree.latestEcmaVersion;

// $ExpectType number[]
const supported_ecma = espree.supportedEcmaVersions;

const full_options: Options = {
    // attach range information to each node
    range: false,

    // attach line/column location information to each node
    loc: false,

    // create a top-level comments array containing all comments
    comment: false,

    // create a top-level tokens array containing all tokens
    tokens: false,

    // Set to 3, 5 (the default), 6, 7, 8, 9, 10, 11, 12, 13, 14 or 15 to specify the version of ECMAScript syntax you want to use.
    // You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13), 2023 (same as 14) or 2024 (same as 15) to use the year-based naming.
    // You can also set "latest" to use the most recently supported version.
    ecmaVersion: 3,

    allowReserved: true, // only allowed when ecmaVersion is 3

    // specify which type of script you're parsing ("script", "module", or "commonjs")
    sourceType: "script",

    // specify additional language features
    ecmaFeatures: {
        // enable JSX parsing
        jsx: false,

        // enable return in global scope (set to true automatically when sourceType is "commonjs")
        globalReturn: false,

        // enable implied strict mode (if ecmaVersion >= 5)
        impliedStrict: false,
    },
};

const empty_options: Options = {};
