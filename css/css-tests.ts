/// <reference path="./css.d.ts" />

import css = require("css");
var parserOptions: css.ParserOptions;
parserOptions = {
	silent: true,
	source: "test.css"
};

var stylesheet = css.parse("body { font-size: 12px; }", parserOptions);

var comment: css.Comment;
comment = {
	type: "comment",
	comment: "Hello World"
};

stylesheet.stylesheet.rules.push(comment);

var stringifyOptions: css.StringifyOptions;
stringifyOptions = {
	indent: "    "
};

var content = css.stringify(stylesheet, stringifyOptions);
console.log(content);