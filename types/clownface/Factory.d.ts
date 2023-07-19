import {
    AnyContext,
    AnyPointer,
    ClownfaceInit,
    InitClonePointer,
    InitLiteralMultiPointer,
    InitLiteralPointer,
    InitPointerFromTerms
} from './index.js';
import { DatasetCore } from 'rdf-js';

export interface InitAnyPointer {
    <D extends DatasetCore>(options?: ClownfaceInit<D>): AnyPointer<AnyContext, D>;
}

export default class ClownfaceFactory {
    clownface: InitClonePointer & InitLiteralPointer & InitLiteralMultiPointer & InitPointerFromTerms & InitAnyPointer;

    static readonly exports: ['clownface'];
}
