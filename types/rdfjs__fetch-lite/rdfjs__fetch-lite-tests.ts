import fetch from '@rdfjs/fetch-lite';
import { SinkMap } from '@rdfjs/sink-map';
import { Stream, Dataset, Quad, DatasetCoreFactory } from 'rdf-js';
import { EventEmitter } from 'events';

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
