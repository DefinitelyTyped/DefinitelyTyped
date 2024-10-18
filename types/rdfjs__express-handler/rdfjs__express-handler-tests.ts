import express = require("express");
import rdfHandler from "@rdfjs/express-handler";
import { SinkMap } from "@rdfjs/sink-map";
import { DatasetCore, DatasetCoreFactory, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

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
    defaultMediaType: "text/turtle",
}));

app.use(rdfHandler({
    baseIriFromRequest: true,
}));

app.use(rdfHandler({
    sendTriples: true,
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
            baseIRI: "foo",
        });

        await res.quadStream(stream);
    }
}

async function datasets(req: express.Request, res: express.Response) {
    if (req.dataset) {
        let dataset: DatasetCore = await req.dataset();
        dataset = await req.dataset({
            baseIRI: "foo",
        });

        await res.dataset(dataset);
    }
}

async function attach(req: express.Request, res: express.Response) {
    await rdfHandler.attach(req, res);
    await rdfHandler.attach(req, res, {
        baseIriFromRequest: true,
    });
}
