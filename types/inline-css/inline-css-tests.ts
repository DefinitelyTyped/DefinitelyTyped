import inlineCss = require("inline-css");

const html = "<style>div{color:red;}</style><div/>";

const options: inlineCss.Options | null = null;

inlineCss(html, { url: "https://example.com" }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", extraCss: "" }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", applyStyleTags: false }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", applyLinkTags: false }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", removeStyleTags: false }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", removeLinkTags: false }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", preserveMediaQueries: true }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", applyWidthAttributes: true }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", applyTableAttributes: true }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", removeHtmlSelectors: true }); // $ExpectType Promise<string>
inlineCss(html, { url: "https://example.com", codeBlocks: { craze: { start: "<<", end: ">>" } } }); // $ExpectType Promise<string>

inlineCss(html, { url: "https://example.com", xmlMode: true }); // $ExpectType Promise<string>
