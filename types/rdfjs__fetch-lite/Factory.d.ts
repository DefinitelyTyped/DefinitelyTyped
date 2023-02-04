import { BaseQuad, DatasetCore, Quad, Stream } from 'rdf-js';
import { FormatsInit } from '.';

interface RdfFetchResponse<D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad> extends Response {
    quadStream(): Promise<Stream<OutQuad>>;
    dataset(): Promise<D>;
}

export interface FetchFactory {
    fetch(url: string, options: FormatsInit): Promise<RdfFetchResponse<DatasetCore>>;
    exports: ['fetch'];
}

declare const factory: FetchFactory;

export default factory;
