import { BaseQuad, DatasetCore, Quad, Stream } from '@rdfjs/types';
import { FormatsInit } from './index.js';

interface RdfFetchResponse<D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad> extends Response {
    quadStream(): Promise<Stream<OutQuad>>;
    dataset(): Promise<D>;
}

interface Fetch {
    (url: string, options?: FormatsInit): Promise<RdfFetchResponse<DatasetCore>>;
    config(key: string, value: unknown): void;
    Headers: Headers;
}

export default class FetchFactory {
    fetch: Fetch;
}
