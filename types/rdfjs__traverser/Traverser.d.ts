import { DataFactory, DatasetCore, Quad, Term } from "@rdfjs/types";

export interface PointerLike<D extends DatasetCore> {
    term: Term;
    dataset: D;
}

export interface CallbackParams<D extends DatasetCore> {
    quad: Quad;
    dataset: D;
    level: number;
}

export interface TraversePredicate<D extends DatasetCore> {
    (arg: CallbackParams<D>): boolean;
}

export interface ForEachCallback<D extends DatasetCore> {
    (arg: CallbackParams<D>): void;
}

export interface ReduceCallback<D extends DatasetCore, R> {
    (context: CallbackParams<D>, result: R): R;
}

export interface Options {
    backward: boolean;
    factory: DataFactory;
    forward: boolean;
}

export default class Traverser<D extends DatasetCore = DatasetCore> {
    constructor(filter: TraversePredicate<D>, options?: Options);

    forEach(pointer: PointerLike<D>, callback: ForEachCallback<D>): void;
    match(pointer: PointerLike<D>): D;
    reduce<R>(pointer: PointerLike<D>, callback: ReduceCallback<D, R | undefined>): R | undefined;
    reduce<R>(pointer: PointerLike<D>, callback: ReduceCallback<D, R>, initialValue: R): R;
}
