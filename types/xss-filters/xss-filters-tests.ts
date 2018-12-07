

import xssFilters = require('xss-filters');

var s = '<script>alert("hello")</script>';

xssFilters.inHTMLComment(s);
xssFilters.inHTMLData(s);
xssFilters.inDoubleQuotedAttr(s);
xssFilters.inSingleQuotedAttr(s);
xssFilters.inUnQuotedAttr(s);
xssFilters.uriInHTMLComment(s);
xssFilters.uriInHTMLData(s);
xssFilters.uriInDoubleQuotedAttr(s);
xssFilters.uriInSingleQuotedAttr(s);
xssFilters.uriInUnQuotedAttr(s);
xssFilters.uriPathInHTMLComment(s);
xssFilters.uriPathInHTMLData(s);
xssFilters.uriPathInDoubleQuotedAttr(s);
xssFilters.uriPathInSingleQuotedAttr(s);
xssFilters.uriPathInUnQuotedAttr(s);
xssFilters.uriQueryInHTMLComment(s);
xssFilters.uriQueryInHTMLData(s);
xssFilters.uriQueryInDoubleQuotedAttr(s);
xssFilters.uriQueryInSingleQuotedAttr(s);
xssFilters.uriQueryInUnQuotedAttr(s);
xssFilters.uriComponentInHTMLComment(s);
xssFilters.uriComponentInHTMLData(s);
xssFilters.uriComponentInDoubleQuotedAttr(s);
xssFilters.uriComponentInSingleQuotedAttr(s);
xssFilters.uriComponentInUnQuotedAttr(s);
xssFilters.uriFragmentInHTMLComment(s);
xssFilters.uriFragmentInHTMLData(s);
xssFilters.uriFragmentInDoubleQuotedAttr(s);
xssFilters.uriFragmentInSingleQuotedAttr(s);
xssFilters.uriFragmentInUnQuotedAttr(s);

