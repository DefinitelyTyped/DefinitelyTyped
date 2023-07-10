import fetch from '@rdfjs/fetch-lite';
import { Stream, Dataset, Quad, DatasetCoreFactory, DatasetCore } from '@rdfjs/types';
import { Formats } from '@rdfjs/formats-common';
import Environment from '@rdfjs/environment/Environment';
import FetchFactory from '@rdfjs/fetch-lite/Factory';

const formats: Formats = <any> {};

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
        FetchFactory
    ]);

    environmentTest.fetch.config('foo', 'bar');
    // $ExpectType Headers
    const headers = environmentTest.fetch.Headers;

    const res = await environmentTest.fetch('foo', { formats });
    return res.quadStream();
}

interface TestDataset extends DatasetCore {
    foo: 'bar';
}
async function environmentDatasetFetch(): Promise<DatasetCore> {
    class DatasetFactory {
        dataset(): TestDataset {
            return <any> {};
        }
        exports: ['dataset'];
    }
    const environmentTest = new Environment([
        FetchFactory,
        DatasetFactory
    ]);
    const res = await environmentTest.fetch('foo', { formats });
    return res.dataset();
}
