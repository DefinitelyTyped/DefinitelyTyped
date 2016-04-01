/// <reference path="sanitize-html.d.ts" />

import sanitizeHtml = require('sanitize-html');

var s: string;
var t: string;

t = sanitizeHtml(s);
t = sanitizeHtml(s, {
});
t = sanitizeHtml(s, {
	allowedTags: ["a", "br"],
	allowedSchemes: ["http"],
	allowedAttributes: { "a": ["href"] },
	allowedClasses: { "a": ["someclass"] },
	transformTags: { 
		"a": "b", 
		"br": function(tagName: string, attributes: {[index: string]: string}): { tagName: string; attributes: {[index: string]: string};} {
			return { tagName: tagName, attributes: attributes };
		}
	},
	exclusiveFilter: {
		"a": function(frame: {
			tag: string;
			attribs: { [index: string]: string };
			text: string;
			tagPosition: number;
		}): boolean {
			return false;
		}
	}
});

