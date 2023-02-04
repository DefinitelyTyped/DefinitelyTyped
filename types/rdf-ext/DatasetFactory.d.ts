import { Quad , NamedNode, DefaultGraph } from 'rdf-js';
import DatasetExt from './lib/Dataset';

export interface DatasetFactory {
    dataset(quads?: Quad[], graph?: NamedNode | DefaultGraph): DatasetExt;

    exports: ['dataset'];
}

declare const datasetFactory: DatasetFactory;

export default datasetFactory;
