window.StyleFix === StyleFix;
window.PrefixFree === PrefixFree;

StyleFix.register((css, raw, element) => {
	return css + "\n/* Custom end comment */\n";
});
StyleFix.process();

const browser = (() => {
	switch (PrefixFree.prefix) {
		case "-moz-":
			return "firefox";
		case "-ms-":
			return "ie";
		case "-o-":
			return "opera";
		case "-webkit-":
			return "chrome";
		default:
			return "unknown";
	}
})();

// $ExpectError
if (browser === "safari") {
	// There's no way to differentiate Safari from Chrome using just prefixes
}
