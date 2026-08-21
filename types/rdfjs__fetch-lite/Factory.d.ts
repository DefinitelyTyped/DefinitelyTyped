import { BaseQuad, DatasetCore, DatasetCoreFactory, Quad, Stream } from "@rdfjs/types";
import { FormatsInit } from "./index.js";

type ExtractDataset<This> = This extends DatasetCoreFactory ? ReturnType<This["dataset"]> : never;

interface RdfFetchResponse<
    D extends DatasetCore<OutQuad, InQuad>,
    OutQuad extends BaseQuad = Quad,
    InQuad extends BaseQuad = OutQuad,
> extends Response {
    quadStream(): Promise<Stream<OutQuad>>;
    dataset(): Promise<D>;
}

interface Fetch {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    <D extends DatasetCore = ExtractDataset<this>>(
        url: Parameters<typeof fetch>[0],
        options?: FormatsInit,
    ): Promise<RdfFetchResponse<D>>;
    config(key: string, value: unknown): void;
    Headers: Headers;
}

export interface FetchFactory {
    fetch: Fetch;
    clone(original: FetchFactory): FetchFactory;
}

interface FetchFactoryCtor {
    new(): FetchFactory;
}

declare const factory: FetchFactoryCtor;

export default factory;
