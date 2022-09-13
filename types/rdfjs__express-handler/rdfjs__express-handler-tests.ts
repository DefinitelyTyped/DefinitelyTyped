import express = require('express');
import { EventEmitter } from 'events';
import { DatasetCore, DatasetCoreFactory, Stream } from 'rdf-js';
import { SinkMap } from '@rdfjs/sink-map';
import rdfHandler = require('@rdfjs/express-handler');

const factory: DatasetCoreFactory = <any> {};
const formats: {
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
} = <any> {};

const app = express();

app.use(rdfHandler());
app.use(rdfHandler({
    factory,
    formats,
    defaultMediaType: 'text/turtle',
}));

app.use(rdfHandler({
    baseIriFromRequest: true,
}));

app.use(rdfHandler({
    baseIriFromRequest: (req: express.Request) => req.path,
}));

app.use(rdfHandler({
    baseIriFromRequest: (req: express.Request) => Promise.resolve(req.path),
}));

async function streams(req: express.Request, res: express.Response) {
    if (req.quadStream) {
        let stream: Stream = req.quadStream();
        stream = req.quadStream({
            baseIRI: 'foo'
        });

        await res.quadStream(stream);
    }
}

async function datasets(req: express.Request, res: express.Response) {
    if (req.dataset) {
        let dataset: DatasetCore = await req.dataset();
        dataset = await req.dataset({
            baseIRI: 'foo'
        });

        await res.dataset(dataset);
    }
}

async function attach(req: express.Request, res: express.Response) {
    await rdfHandler.attach(req, res);
    await rdfHandler.attach(req, res, {
        baseIriFromRequest: true
    });
}
