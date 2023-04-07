import { BaseQuad, Quad } from '@rdfjs/types';
import DatasetCore from './DatasetCore';

export default class Factory {
    static readonly exports: ['dataset'];
    dataset<Q extends BaseQuad = Quad>(quads?: Q[]): DatasetCore<Q>;
}
