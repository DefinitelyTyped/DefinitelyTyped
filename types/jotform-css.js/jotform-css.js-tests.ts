// DefinitelyTyped scripts are forcing me to have this, I don't need or want this file
function addNamespace2(cssString: string): string {
	const parser = new cssjs();
	const parsed = parser.applyNamespacing(cssString, "#id1");
	return parser.getCSSForEditor(parsed);
}
