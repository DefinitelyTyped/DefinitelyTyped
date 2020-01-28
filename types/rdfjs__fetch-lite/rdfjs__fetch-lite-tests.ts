import fetch = require('@rdfjs/fetch-lite');
import { SinkMap } from '@rdfjs/sink-map';
import { Stream, Dataset, BaseQuad, DatasetCoreFactory } from 'rdf-js';
import { EventEmitter } from 'events';

const formats: {
    parsers: SinkMap<EventEmitter, Stream>;
} = <any> {};

async function fetchString(): Promise<string> {
    const response = await fetch('http://example.com', { formats });
    return response.text();
}

async function fetchQuadStream(): Promise<Stream> {
    const response = await fetch('http://example.com', { formats });
    return response.quadStream();
}

interface DatasetX extends Dataset<BaseQuad> {
    toCanonical(): string;
}
const factory: DatasetCoreFactory<BaseQuad, BaseQuad, DatasetX> = <any> {};

async function fetchDataset(): Promise<DatasetX> {
    const response = await fetch('http://example.com', { formats, factory });
    return response.dataset();
}
