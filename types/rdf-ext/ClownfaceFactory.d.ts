import { Term, Literal, DatasetCore } from '@rdfjs/types';
import { ClownfaceInit, ClownfaceInitWithTerms, ClownfaceInitWithValue, ClownfaceInitWithValues, AnyContext, AnyPointer } from "clownface";

type ExtractDataset<This> = This extends DatasetFactory ? ReturnType<This["dataset"]> : never;

interface DatasetFactory {
    dataset(): DatasetCore;
}

export interface ClownfaceFactory {
    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options?: ClownfaceInit<D>
    ): AnyPointer<AnyContext, D>;

    clownface<T extends Term | Term[], D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithTerms<T, D>
    ): AnyPointer<T, D>;

    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithValue<D>
    ): AnyPointer<Literal, D>;

    clownface<D extends DatasetCore = ExtractDataset<this>>(
        options: ClownfaceInitWithValues<D>
    ): AnyPointer<Literal[], D>;

    clownface<T extends AnyContext, D extends DatasetCore = ExtractDataset<this>>(
        other: AnyPointer<T, D>,
    ): AnyPointer<T, D>;
}

interface ClownfaceFactoryCtor {
    new (): ClownfaceFactory;
    exports: ['clownface'];
}

declare const clownfaceFactory: ClownfaceFactoryCtor;

export default clownfaceFactory;
