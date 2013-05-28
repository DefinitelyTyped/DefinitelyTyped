/// <reference path="less.d.ts" />

import less = module("less");

declare var __dirname: string;

less.render('.class { width: (1 + 1) }', (e, css) => console.log(css));

var parser: less.Parser = new less.Parser;

parser.parse('.class { width: (1 + 1) }', function (err, tree) {
    if (err) return console.error(err);
    tree.toCSS();
});

var parser2 = new less.Parser({
    paths: ['.', './lib'],
    filename: 'style.less'
});

parser2.parse('.class { width: (1 + 1) }', (e, tree) => tree.toCSS({ compress: true }));

var lessParser = new less.Parser({
    paths: [__dirname],
    filename: "out.less"
});

lessParser.parse('.class { width: (1 + 1) }', function (err, tree) {
    tree.rules.forEach(function (rule) {
        if (rule.path) {
            console.log(rule.path);
        }
    });
});