import { Formats } from "@rdfjs/formats";
import { BaseQuad, DatasetCore, DatasetCoreFactory, Quad, Stream } from "@rdfjs/types";

export interface FormatsInit extends Omit<RequestInit, "body"> {
    formats?: Formats;
    fetch?: typeof fetch | undefined;
    body?: RequestInit["body"] | Iterable<BaseQuad> | Stream;
}

export interface FactoryInit<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
> extends FormatsInit {
    factory: DatasetCoreFactory<OutQuad, InQuad, D>;
}

export interface RdfFetchResponse<Q extends BaseQuad = Quad> extends Response {
    quadStream(): Promise<Stream<Q>>;
}

export interface DatasetResponse<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
> extends RdfFetchResponse<OutQuad> {
    dataset(): Promise<D>;
}

type FetchUrl = Parameters<typeof fetch>[0];

declare function rdfFetch(url: FetchUrl, options: FormatsInit): Promise<RdfFetchResponse>;
declare function rdfFetch<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
>(
    url: FetchUrl,
    options: FactoryInit<D, OutQuad, InQuad>,
): Promise<DatasetResponse<D, OutQuad, InQuad>>;

export default rdfFetch;
export const Headers: Headers;
