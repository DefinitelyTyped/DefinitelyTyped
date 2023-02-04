import fetch from '@rdfjs/fetch-lite';
import { SinkMap } from '@rdfjs/sink-map';
import { Stream, Dataset, Quad, DatasetCoreFactory, DatasetCore } from 'rdf-js';
import { EventEmitter } from 'events';
import Environment from '@rdfjs/environment/Environment.js';
import fetchFactory from '@rdfjs/fetch-lite/Factory.js';

const formats: {
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<EventEmitter, Stream>;
} = <any> {};

async function fetchString(): Promise<string> {
    const response = await fetch('http://example.com', { formats });
    return response.text();
}

async function fetchQuadStream(): Promise<Stream> {
    const response = await fetch('http://example.com', { formats });
    return response.quadStream();
}

interface QuadExt extends Quad {
    toCanonical(): string;
}

interface DatasetX extends Dataset<QuadExt> {
    toCanonical(): string;
}
const factory: DatasetCoreFactory<QuadExt, QuadExt, DatasetX> = <any> {};

async function fetchDataset(): Promise<DatasetX> {
    const response = await fetch('http://example.com', { formats, factory });
    return response.dataset();
}

async function fetchTypedStream(): Promise<Stream<QuadExt>> {
    const response = await fetch('http://example.com', { formats, factory });
    return response.quadStream();
}

async function environmentRawFetch(): Promise<Stream> {
    const environmentTest = new Environment([
        fetchFactory
    ]);
    const res = await environmentTest.fetch('foo', { formats });
    return res.quadStream();
}

interface TestDataset extends DatasetCore {
    foo: 'bar';
}
async function environmentDatasetFetch(): Promise<DatasetCore> {
    const datasetFactory: {
        dataset(): TestDataset;
        exports: ['dataset'];
    } = <any> {};
    const environmentTest = new Environment([
        fetchFactory,
        datasetFactory
    ]);
    const res = await environmentTest.fetch('foo', { formats });
    return res.dataset();
}
