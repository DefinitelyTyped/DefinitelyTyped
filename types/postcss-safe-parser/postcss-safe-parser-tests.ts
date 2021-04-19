import safe = require('postcss-safe-parser');
import postcss from "postcss";

const badCss = 'a {';

postcss()
    .process(badCss, { parser: safe })
    .then(result => {
        result.css; // = 'a {}'
        result.css; // $ExpectType string
    });

safe; // $ExpectType Parser
