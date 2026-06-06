import { DatasetCore } from "@rdfjs/types";
import Traverser, { Options, TraversePredicate } from "./Traverser.js";

interface DatasetFactory {
    dataset(): DatasetCore;
}

type ExtractDataset<This> = This extends DatasetFactory ? ReturnType<This["dataset"]> : never;

export interface TraverserFactory {
    traverser<D extends DatasetCore = ExtractDataset<this>>(
        filter: TraversePredicate<D>,
        options?: Omit<Options, "factory">,
    ): Traverser<D>;
}

interface TraverserFactoryCtor {
    new(): TraverserFactory;

    exports: ["traverser"];
}

declare const factory: TraverserFactoryCtor;
export default factory;
