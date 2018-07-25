import utmpl = require('uri-templates');
import URITemplate = utmpl.URITemplate;

let str: string;
let u: URITemplate;
let obj: Object;

u = utmpl(str);

str = u.fillFromObject(obj);
str = u.fill(key => {
    return str;
});
str = u.fill(obj);
obj = u.fromUri(str);

let varNames: string[];

varNames = u.varNames;

let template: string;

template = u.template;
