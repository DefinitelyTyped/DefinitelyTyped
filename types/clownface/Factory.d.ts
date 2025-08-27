import { DatasetCore, DatasetCoreFactory, Literal, Term } from "@rdfjs/types";
import {
    AnyContext,
    AnyPointer,
    ClownfaceInit,
    ClownfaceInitWithTerms,
    ClownfaceInitWithValue,
    ClownfaceInitWithValues,
} from "./index.js";

type ExtractDataset<This> = This extends DatasetCoreFactory ? ReturnType<This["dataset"]> : never;

export default class ClownfaceFactory {
    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options?: ClownfaceInit<D>,
    ): AnyPointer<AnyContext, D>;

    clownface<T extends Term | Term[], D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithTerms<T, D>,
    ): AnyPointer<T, D>;

    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithValue<D>,
    ): AnyPointer<Literal, D>;

    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithValues<D>,
    ): AnyPointer<Literal[], D>;

    clownface<T extends AnyContext, D extends DatasetCore = ExtractDataset<this>>(
        other: AnyPointer<T, D>,
    ): AnyPointer<T, D>;
    static readonly exports: ["clownface"];
}

export {};
