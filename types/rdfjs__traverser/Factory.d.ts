import { DatasetCore } from 'rdf-js';
import Traverser, { Options, TraversePredicate } from './Traverser';

interface DatasetFactory {
    dataset(): DatasetCore;
}

type ExtractDataset<This> = This extends DatasetFactory ? ReturnType<This["dataset"]> : never;

export interface TraverserFactory {
    traverser<D extends DatasetCore = ExtractDataset<this>>(
        filter: TraversePredicate<D>,
        options?: Omit<Options, 'factory'>
    ): Traverser<D>;
    exports: ['traverser'];
}

declare const factory: TraverserFactory;
export default factory;
