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
    range: false,
    loc: false,
    comment: false,
    tokens: false,
    ecmaVersion: 3,
    allowReserved: true,
    sourceType: "script",
    ecmaFeatures: {
        jsx: false,
        globalReturn: false,
        impliedStrict: false,
    },
};

const empty_options: Options = {};

const latest_options: Options = {
    ecmaVersion: 16,
};
