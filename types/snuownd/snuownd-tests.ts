// Default parser
SnuOwnd.getParser().render(""); // $ExpectType string

// Table of contents renderer
SnuOwnd.getParser(SnuOwnd.getTocRenderer()).render(""); // $ExpectType string

// Constructing a custom parser with totally fresh callbacks and state
const customCallbacks = SnuOwnd.createCustomCallbacks({
    blockcode(out, text, language, context) {
        out.s; // $ExpectType string
    },
});
const customState = SnuOwnd.defaultRenderState();
customState.flags = customState.flags | SnuOwnd.HTML_TOC;
customState.html_attr_whitelist.push("");
customState.html_element_whitelist.push("");
customState.nofollow = 1;
customState.target = "";
const customRenderer = SnuOwnd.createCustomRenderer(customCallbacks, customState);
const customParser = SnuOwnd.getParser(customRenderer, SnuOwnd.MKDEXT_NO_EMAIL_AUTOLINK, 20, 10);
customParser.render(""); // $ExpectType string
