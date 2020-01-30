import { BlankNode, DatasetCore, Literal, NamedNode, Quad_Graph, Term, Variable, DefaultGraph } from 'rdf-js';
import {
    Clownface as ClownfaceContract,
    ClownfaceInit,
    AddCallback,
    NodeOptions,
    SafeClownface,
    SingleOrArray,
    SingleOrArrayOfTerms,
    SingleOrArrayOfTermsOrLiterals,
    WithValues,
    WithSingleValue,
    WithTerms,
    WithSingleTerm,
    SingleContextClownface,
    SingleOrOneElementArray
} from '..';
import { Context } from './Context';

declare class Clownface<D extends DatasetCore = DatasetCore, T extends Term = Term> implements ClownfaceContract<D, T> {
    constructor(options: ClownfaceInit & Partial<WithSingleTerm<T> | WithTerms<T>> & Partial<WithSingleValue | WithValues>);
    readonly term: T | undefined;
    readonly terms: T[];
    readonly value: string | undefined;
    readonly values: string[];
    readonly dataset: D;
    readonly datasets: D[];
    readonly _context: Array<Context<D, T>>;
    list(): Iterable<SingleContextClownface<D>>;
    toArray(): Array<Clownface<D, T>>;
    filter(cb: (quad: Clownface<D, T>) => boolean): Clownface<D, T>;
    forEach(cb: (quad: Clownface<D, T>) => void): void;
    map<X>(cb: (quad: Clownface<D, T>, index: number) => X): X[];

    node(value: SingleOrOneElementArray<string | number | boolean>, options?: NodeOptions): SingleContextClownface<D, Literal>;
    node(values: Array<string | number | boolean>, options?: NodeOptions): SafeClownface<D, Literal>;
    node<X extends Term>(value: SingleOrOneElementArray<X>, options?: NodeOptions): SingleContextClownface<D, X>;
    node<X extends Term>(values: X[], options?: NodeOptions): SafeClownface<D, X>;
    node(value: null, options?: NodeOptions): SingleContextClownface<D, BlankNode>;
    node(values: null[], options?: NodeOptions): SafeClownface<D, BlankNode>;
    node(values: SingleOrArray<string | number | boolean | NamedNode | BlankNode | Literal | Variable | DefaultGraph | null>, options?: NodeOptions): SafeClownface<D>;

    blankNode(value?: string | [string]): SingleContextClownface<D, BlankNode>;
    blankNode(values: string[]): SafeClownface<D, BlankNode>;

    literal(
        value: SingleOrOneElementArray<string | number | boolean | NamedNode | BlankNode | Literal | Variable | DefaultGraph | null>,
        languageOrDatatype?: string | NamedNode): SingleContextClownface<D, Literal>;
    literal(values: Array<string | number | boolean | NamedNode | BlankNode | Literal | Variable | DefaultGraph | null>, languageOrDatatype?: string | NamedNode): SafeClownface<D, Literal>;

    namedNode(value: SingleOrOneElementArray<string | NamedNode>): SingleContextClownface<D, NamedNode>;
    namedNode(values: Array<string | NamedNode>): SafeClownface<D, NamedNode>;

    // tslint:disable:no-unnecessary-generics
    in<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;
    out<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;

    has<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects?: SingleOrArrayOfTermsOrLiterals): SafeClownface<D, X>;

    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objectsOrCallback?: SingleOrArrayOfTermsOrLiterals | AddCallback<D, X>): SafeClownface<D, X>;
    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<D, X>): SafeClownface<D, X>;

    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objectsOrCallback?: SingleOrArrayOfTermsOrLiterals | AddCallback<D, X>): SafeClownface<D, X>;
    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<D, X>): SafeClownface<D, X>;

    addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects?: SingleOrArrayOfTerms, callback?: AddCallback<D, X>): SafeClownface<D, X>;

    deleteIn<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;
    deleteOut<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;
    deleteList<X extends Term = Term>(predicates: SingleOrArrayOfTerms): SafeClownface<D, X>;
    // tslint:enable:no-unnecessary-generics
}

export = Clownface;
