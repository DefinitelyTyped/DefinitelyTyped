import xssFilters = require("xss-filters");

const s = "<script>alert(\"hello\")</script>";

// $ExpectType string
xssFilters.inHTMLComment(s);
// $ExpectType string
xssFilters.inHTMLData(s);
// $ExpectType string
xssFilters.inDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.inSingleQuotedAttr(s);
// $ExpectType string
xssFilters.inUnQuotedAttr(s);
// $ExpectType string
xssFilters.uriInHTMLComment(s);
// $ExpectType string
xssFilters.uriInHTMLData(s);
// $ExpectType string
xssFilters.uriInDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.uriInSingleQuotedAttr(s);
// $ExpectType string
xssFilters.uriInUnQuotedAttr(s);
// $ExpectType string
xssFilters.uriPathInHTMLComment(s);
// $ExpectType string
xssFilters.uriPathInHTMLData(s);
// $ExpectType string
xssFilters.uriPathInDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.uriPathInSingleQuotedAttr(s);
// $ExpectType string
xssFilters.uriPathInUnQuotedAttr(s);
// $ExpectType string
xssFilters.uriQueryInHTMLComment(s);
// $ExpectType string
xssFilters.uriQueryInHTMLData(s);
// $ExpectType string
xssFilters.uriQueryInDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.uriQueryInSingleQuotedAttr(s);
// $ExpectType string
xssFilters.uriQueryInUnQuotedAttr(s);
// $ExpectType string
xssFilters.uriComponentInHTMLComment(s);
// $ExpectType string
xssFilters.uriComponentInHTMLData(s);
// $ExpectType string
xssFilters.uriComponentInDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.uriComponentInSingleQuotedAttr(s);
// $ExpectType string
xssFilters.uriComponentInUnQuotedAttr(s);
// $ExpectType string
xssFilters.uriFragmentInHTMLComment(s);
// $ExpectType string
xssFilters.uriFragmentInHTMLData(s);
// $ExpectType string
xssFilters.uriFragmentInDoubleQuotedAttr(s);
// $ExpectType string
xssFilters.uriFragmentInSingleQuotedAttr(s);
// $ExpectType string
xssFilters.uriFragmentInUnQuotedAttr(s);
