function addNamespace(cssString: string): string {
    const parser = new cssjs();
    const parsed = parser.applyNamespacing(cssString, "#id1");
    return parser.getCSSForEditor(parsed);
}
