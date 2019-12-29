import { createServer } from 'http';
import { createWriteStream } from 'fs';
import * as express from 'express';
import * as asyncWriter from 'async-writer';

import * as markoExpress from 'marko/express';
import { load } from 'marko';
import { createWriter, AsyncStream, Template, RenderResult } from 'marko/src/runtime/html';
import { Component } from 'marko/src/components';
import { buildTaglibLookup, taglibFinder } from 'marko/src/compiler';

// tslint:disable-next-line no-var-requires
const template: Template = require('template.marko');

// Working with document

(document: Document) => {
    // $ExpectType RenderResult
    template
        .renderSync({ name: 'Marko' })
        .appendTo(document.body);

    createServer((req, res) => {
        res.setHeader('content-type', 'text/html');
        // $ExpectType void
        template.render({ name: 'Marko' }, res);
    }).listen(8080);

    template
        .render({ $global: { flags: ['mobile'] } })
        .then((result) => {
            // $ExpectType RenderResult
            result.appendTo(document.body);
        });

    template.render({}, (err: Error | null, result: RenderResult) => {
        // $ExpectType RenderResult
        result.appendTo(document.body);
    });
};

// WriteStream tests

const writeStream = createWriteStream('template.html', { encoding: 'utf8' });

// $ExpectType void
template.render({ name: 'Frank' }, writeStream);

// $ExpectType WriteStream
template.stream({}).pipe(writeStream);

// $ExpectType Readable
template.stream({ name: 'Frank' });

// rendering tests

const out = template.createOut();

// $ExpectType void
template.render({}, out);
out.on('finish', () => {
    // $ExpectType string
    out.getOutput();
});
out.end();

// $ExpectType void
template.render({ name: 'Frank' }, process.stdout);

// $ExpectType string
template.renderToString({ label: 'Click me!' });

template.renderToString({}, (err, html) => {
    // $ExpectType string
    html;
});

// AsyncStream/AsyncWriter tests

const writer: AsyncStream = createWriter(process.stdout);

// $ExpectType void
template.render({ name: 'Frank' }, writer);
writer.end();

const asyncWriterInstance = asyncWriter.create(process.stdout);

// $ExpectType AsyncWriter
asyncWriterInstance.write('Hello');

const asyncOut = asyncWriterInstance.beginAsync();

setTimeout(() => {
    asyncOut.write('World');
    asyncOut.end();
}, 100);

template.render({}, asyncWriterInstance);

// Component tests

(component: Component) => {
    // $ExpectType HTMLElement
    component.getEl('header');

    // $ExpectType HTMLElement[]
    component.getEls('colors');

    // $ExpectType Component
    component.getComponent('myFancyButton');
};

// markoExpress() tests

const app = express();

// $ExpectType Express
app.use(markoExpress());

// $ExpectType Express
app.get('/', (req: express.Request, res: express.Response) => {
    // $ExpectType void
    res.marko(template, {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

// Taglib tests

const lookup = buildTaglibLookup('some/dir');

lookup.forEachTag(tag => {
    // $ExpectType string
    tag.name;
});

lookup.forEachAttribute('div', attr => {
    // $ExpectType string | undefined
    attr.name;
});

// $ExpectType Attribute | undefined
lookup.getAttribute('foo', 'cat');

// $ExpectType void
taglibFinder.excludeDir('dir/Path');

// $ExpectType void
taglibFinder.excludePackage('packageName');

// load() tests

const isomorphicTemplate = load(require.resolve('./template.marko'));
isomorphicTemplate.render({ name: 'Frank' }, process.stdout);

const serverTemplateFromFile = load('./sample.marko', { writeToDisk: false });
serverTemplateFromFile.render({ name: 'Frank' }, process.stdout);

const serverTemplateFromString = load('sample.marko', '<div>Hello $!{data.name}</div>');
serverTemplateFromString.render({ name: 'Frank' }, process.stdout);

// node-require tests

import { install, getExtensions } from 'marko/node-require';

// $ExpectType void
install();

// $ExpectType any
getExtensions();
