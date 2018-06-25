import cssjsParser = require("jotform-css.js");

function addNamespace(cssString: string): string {
	const parser = new cssjsParser.cssjs();
	let parsed = parser.parseCSS(cssString);
	parsed = parser.applyNamespacing(parsed, "#id1");
	const css = parser.getCSSForEditor(parsed);
	return css;
}
