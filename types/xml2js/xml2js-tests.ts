import xml2js = require('xml2js');
import * as processors from 'xml2js/lib/processors';
import fs = require('fs');

xml2js.parseString('<root>Hello xml2js!</root>', (err: Error | null, result: any) => { });

xml2js.parseStringPromise('<root>Hello xml2js!</root>');

xml2js.parseString('<root>Hello xml2js!</root>', {trim: true}, (err: Error | null, result: any) => { });

xml2js.parseStringPromise('<root>Hello xml2js!</root>', {trim: true});

xml2js.parseString('<root>Hello xml2js!</root>', {
    attrkey: '$',
    charkey: '_',
    explicitCharkey: false,
    trim: false,
    normalizeTags: false,
    explicitRoot: true,
    emptyTag: '',
    explicitArray: true,
    ignoreAttrs: false,
    mergeAttrs: false,
    validator: undefined,
    xmlns: false,
    explicitChildren: false,
    childkey: '$$',
    preserveChildrenOrder: false,
    charsAsChildren: false,
    includeWhiteChars: false,
    async: false,
    strict: true,
    attrNameProcessors: undefined,
    attrValueProcessors: undefined,
    tagNameProcessors: undefined,
    valueProcessors: undefined
}, (err: Error | null, result: any) => { });

xml2js.parseString('<root>Hello xml2js!</root>', {
    attrNameProcessors: [processors.firstCharLowerCase, xml2js.processors.normalize],
    attrValueProcessors: [processors.normalize],
    tagNameProcessors: [processors.stripPrefix],
    valueProcessors: [processors.parseBooleans, processors.parseNumbers]
}, (err: Error | null, result: any) => { });

let builder = new xml2js.Builder({
    renderOpts: {
        pretty: false
    }
});

builder = new xml2js.Builder({
    rootName: 'root',
    renderOpts: {
        pretty: true,
        indent: ' ',
        newline: '\n'
    },
    xmldec: {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: true
    },
    doctype: { ext: 'hello.dtd' },
    headless: false,
    cdata: false
});

const outString = builder.buildObject({
    hello: 'xml2js!'
});

const parser = new xml2js.Parser();

parser.on('end', (result: any) => {
    console.log("Parser Finished");
    return;
});

const v1Defaults = xml2js.defaults['0.1'];
v1Defaults.async = true;
new xml2js.Parser(v1Defaults);
new xml2js.Builder(v1Defaults);
xml2js.parseString('', v1Defaults, () => undefined);
xml2js.parseStringPromise('', v1Defaults);

const v2Defaults = xml2js.defaults['0.2'];
v2Defaults.async = false;
v2Defaults.chunkSize = 20000;
v2Defaults.emptyTag = () => ({});
new xml2js.Parser(v2Defaults);
new xml2js.Builder(v2Defaults);
xml2js.parseString('', v2Defaults, () => undefined);
xml2js.parseStringPromise('', v2Defaults);

fs.readFile(__dirname + '/foo.xml', (err, data) => {
    parser.parseString(data, (err: Error | null, result: any) => {
        console.dir(result);
        console.log('Done parseString');
    });

    parser.parseStringPromise(data).then(result => {
        console.dir(result);
        console.log('Done parseStringPromise');
    });
});

xml2js.parseString('<root>Hello xml2js!</root>', {
    validator: (xpath: string, previousValue: any, newValue: any) => {
        throw new xml2js.ValidationError('validation error');
    }
}, (err: Error | null, result: any) => { });
