import inlineCss = require('inline-css');

var str: string;
var bool: boolean;

var options: inlineCss.Options;

str = options.url;
str = options.extraCss;

bool = options.applyStyleTags;
bool = options.applyLinkTags;
bool = options.removeStyleTags;
bool = options.removeLinkTags;
bool = options.preserveMediaQueries;
bool = options.applyWidthAttributes;
bool = options.applyTableAttributes;
bool = options.removeHtmlSelectors;

options = {
    url: str,
    extraCss: str,
    applyStyleTags: bool,
    applyLinkTags: bool,
    removeStyleTags: bool,
    removeLinkTags: bool,
    preserveMediaQueries: bool,
    applyWidthAttributes: bool,
    applyTableAttributes: bool,
    removeHtmlSelectors: bool,
};

inlineCss(str, options).then((value: string) => {});
