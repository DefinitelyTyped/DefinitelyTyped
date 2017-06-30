import css = require("css");

// Check that user can parse, modify and persist CSS content

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

// Create new stylesheet and save it

var bgDeclaration: css.Declaration = {
	type: "declaration",
	property: "background",
	value: "#eee"
};

var colorDeclaration: css.Declaration = {
	type: "declaration",
	property: "color",
	value: "#888"
};

var ruleComment: css.Comment = {
	type: "comment",
	comment: "New CSS AST Tree Rule"
};

var bodyRule: css.Rule = {
	type: "rule",
	selectors: ["body"],
	declarations: [ruleComment, bgDeclaration, colorDeclaration]
};

var newStylesheet: css.Stylesheet = {
	type: "stylesheet",
	stylesheet: {
		rules: [bodyRule]
	}
};

content = css.stringify(newStylesheet);