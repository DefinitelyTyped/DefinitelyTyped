import { DatasetResponse, default as fetch, FactoryInit, FormatsInit, RdfFetchResponse } from "@rdfjs/fetch-lite";
import { BaseQuad, DatasetCore, Quad } from "@rdfjs/types";

export { Headers } from "@rdfjs/fetch-lite";

declare function rdfFetch(url: Parameters<typeof fetch>[0], options?: Partial<FormatsInit>): Promise<RdfFetchResponse>;
declare function rdfFetch<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
>(
    url: Parameters<typeof fetch>[0],
    options?: Partial<FactoryInit<D, OutQuad, InQuad>>,
): Promise<DatasetResponse<D, OutQuad, InQuad>>;

export default rdfFetch;
