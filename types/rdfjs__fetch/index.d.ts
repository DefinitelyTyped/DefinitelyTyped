import { DatasetResponse, FactoryInit, FormatsInit, RdfFetchResponse } from "@rdfjs/fetch-lite";
import { BaseQuad, DatasetCore, Quad } from "rdf-js";

export { Headers } from "@rdfjs/fetch-lite";

declare function rdfFetch(url: string, options?: Partial<FormatsInit>): Promise<RdfFetchResponse>;
declare function rdfFetch<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
>(
    url: string,
    options?: Partial<FactoryInit<D, OutQuad, InQuad>>,
): Promise<DatasetResponse<D, OutQuad, InQuad>>;

export default rdfFetch;
