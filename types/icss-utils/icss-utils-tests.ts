import { replaceValueSymbols, replaceSymbols, extractICSS, createICSSRules } from "icss-utils";
import postcss = require("postcss");

const root = postcss.parse("a#css.string { color: red }");

const replacements = {
    quick: "slow",
    lazy: "energetic",
};

const s: string = replaceValueSymbols("The quick brown fox jumps over the lazy dog.", replacements);

replaceSymbols(root, replacements);

const { icssImports, icssExports } = extractICSS(root);
const s2: string = icssImports.monkey.bagel;
const s3: string = icssExports.foo;

extractICSS(root, false);

const rules: postcss.Rule[] = createICSSRules(icssImports, icssExports);
