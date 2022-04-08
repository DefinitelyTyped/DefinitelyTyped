// Type definitions for @rdfjs/fetch-lite 2.0
// Project: https://github.com/rdfjs-base/fetch-lite
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DatasetCoreFactory, DatasetCore, Quad, Stream, BaseQuad } from 'rdf-js';
import formats = require('@rdfjs/formats-common');

declare namespace rdfFetch {
    interface FormatsInit extends RequestInit {
        formats: Pick<typeof formats, 'parsers'>;
        fetch?: typeof fetch;
    }

    interface FactoryInit<D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad> extends FormatsInit {
        factory: DatasetCoreFactory<OutQuad, InQuad, D>;
    }

    interface RdfFetchResponse<Q extends BaseQuad = Quad> extends Response {
        quadStream(): Promise<Stream<Q>>;
    }

    interface DatasetResponse<D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad> extends RdfFetchResponse<OutQuad> {
        dataset(): Promise<D>;
    }
}

declare function rdfFetch(url: string, options: rdfFetch.FormatsInit): Promise<rdfFetch.RdfFetchResponse>;
declare function rdfFetch <D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad>(
    url: string,
    options: rdfFetch.FactoryInit<D, OutQuad, InQuad>): Promise<rdfFetch.DatasetResponse<D, OutQuad, InQuad>>;

export = rdfFetch;
