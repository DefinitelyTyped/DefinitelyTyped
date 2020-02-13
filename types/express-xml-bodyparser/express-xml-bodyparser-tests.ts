import express = require('express');
import xmlparser = require('express-xml-bodyparser');

const app: express.Express = express();

// xml-parser with no options
app.use(xmlparser());

// xml-parser with implicit default options
app.use(xmlparser({}));

// xml-parser with explicit default options
app.use(xmlparser({
    async: false,
    explicitArray: true,
    normalize: true,
    normalizeTags: true,
    trim: true
}));

// xml-parser with all options
app.use(xmlparser({
    async: true,
    attrkey: 'attrkey',
    attrNameProcessors: [(name => String.fromCharCode((42 + name.length) & 127))],
    attrValueProcessors: [(name => String.fromCharCode((24 + name.length) & 127))],
    charkey: 'charKey',
    charsAsChildren: true,
    childkey: 'childkey',
    emptyTag: 'emptyTag',
    explicitArray: true,
    explicitCharkey: true,
    explicitChildren: true,
    explicitRoot: true,
    ignoreAttrs: false,
    includeWhiteChars: false,
    mergeAttrs: true,
    normalize: true,
    normalizeTags: true,
    strict: true,
    tagNameProcessors: [(name) => name.toLocaleLowerCase()],
    trim: true,
    validator: () => false,
    valueProcessors: [],
    xmlns: true,
}));

// xml-parser as route middleware with custom options
const routeMiddleware: express.Handler = xmlparser({ explicitArray: false, strict: false });
const routeHandler: express.RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Success!');
};
app.post('/auth', [routeMiddleware], routeHandler);

// overriding mime-type regexp
xmlparser.regexp = /text\/(stranger|things)/;
