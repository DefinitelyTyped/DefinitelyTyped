/// <reference path="uri-templates.d.ts" />

import utmpl = require('uri-templates');
import URITemplate = utmpl.URITemplate;

var str: string;
var u: URITemplate;
var obj: Object;

u = utmpl(str);

str = u.fillFromObject(obj);
str = u.fill((key) => {
	return str;
});
obj = u.fromUri(str);
