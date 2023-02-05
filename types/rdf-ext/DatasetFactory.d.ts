import { Quad , NamedNode, DefaultGraph } from 'rdf-js';
import DatasetExt from './lib/Dataset';

export interface DatasetFactory {
    dataset(quads?: Quad[], graph?: NamedNode | DefaultGraph): DatasetExt;
}

interface DatasetFactoryCtor {
    new(): DatasetFactory;
    exports: ['dataset'];
}

declare const datasetFactory: DatasetFactoryCtor;

export default datasetFactory;
