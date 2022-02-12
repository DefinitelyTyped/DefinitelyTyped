// Type definitions for @rdfjs/fetch 3.0
// Project: https://github.com/rdfjs-base/fetch
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { FormatsInit, RdfFetchResponse, FactoryInit, DatasetResponse } from '@rdfjs/fetch-lite';
import { DatasetCore, Quad, BaseQuad } from 'rdf-js';

export { Headers } from '@rdfjs/fetch-lite';

declare function rdfFetch(url: string, options?: Partial<FormatsInit>): Promise<RdfFetchResponse>;
declare function rdfFetch <D extends DatasetCore<OutQuad, InQuad>, OutQuad extends BaseQuad = Quad, InQuad extends BaseQuad = OutQuad>(
    url: string,
    options?: Partial<FactoryInit<D, OutQuad, InQuad>>): Promise<DatasetResponse<D, OutQuad, InQuad>>;

export default rdfFetch;
