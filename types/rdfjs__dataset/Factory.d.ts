import { BaseQuad, Quad } from 'rdf-js';
import DatasetCore from './DatasetCore';

export default class Factory {
    static readonly exports: ['dataset'];
    dataset<Q extends BaseQuad = Quad>(quads?: Q[]): DatasetCore<Q>;
}
