import { BlankNode, DatasetCore, Literal, NamedNode, Term } from 'rdf-js';
import {
    Clownface as ClownfaceContract,
    ClownfaceInit,
    AddCallback,
    NodeOptions,
    SingleOrArrayOfTerms,
    SingleOrArrayOfTermsOrLiterals,
    ClownfaceInitWithTerms,
    ClownfaceInitWithValue,
    ClownfaceInitWithValues,
    SingleOrOneElementArray,
    Iteratee,
    AnyContext
} from '..';
import { Context } from './Context';

declare class Clownface<T extends AnyContext = AnyContext, D extends DatasetCore = DatasetCore> implements ClownfaceContract<T, D> {
    constructor(options: ClownfaceInit<D> | ClownfaceInitWithTerms<Term | Term[], D> | ClownfaceInitWithValue<D> | ClownfaceInitWithValues<D>);

    readonly term: T extends undefined ? undefined : T extends any[] ? undefined | T[0] : T;
    readonly terms: T extends undefined ? Term[] : T extends any[] ? T : [T];
    readonly value: T extends undefined ? undefined : T extends any[] ? undefined | string[0] : string;
    readonly values: T extends undefined ? string[] : T extends any[] ? string[] : [string];
    readonly dataset: D;
    readonly datasets: D[];
    readonly _context: Array<Context<D, Term>>;
    list(): Iterable<Iteratee<T, D>>;
    toArray(): Array<Clownface<T extends undefined ? never : T extends any[] ? T[0] : T, D>>;
    filter(cb: (quad: Iteratee<T, D>) => boolean): Clownface<T, D>;
    forEach(cb: (quad: Iteratee<T, D>) => void): void;
    map<X>(cb: (quad: Iteratee<T, D>, index: number) => X): X[];

    node(value: SingleOrOneElementArray<boolean | string | number>, options?: NodeOptions): Clownface<Literal, D>;
    node(values: Array<boolean | string | number>, options?: NodeOptions): Clownface<Literal[], D>;

    node<X extends Term>(value: SingleOrOneElementArray<X>, options?: NodeOptions): Clownface<X, D>;
    node<X extends Term[]>(values: X, options?: NodeOptions): Clownface<X, D>;

    node(value: null, options?: NodeOptions): Clownface<BlankNode, D>;
    node(values: null[], options?: NodeOptions): Clownface<BlankNode[], D>;

    node(values: Array<boolean | string | number | Term | null>, options?: NodeOptions): Clownface<Term[], D>;

    blankNode(value?: SingleOrOneElementArray<string>): Clownface<BlankNode, D>;
    blankNode(values: string[]): Clownface<BlankNode[], D>;

    literal(value: SingleOrOneElementArray<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): Clownface<Literal, D>;
    literal(values: Array<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): Clownface<Literal[], D>;

    namedNode(value: SingleOrOneElementArray<string | NamedNode>): Clownface<NamedNode, D>;
    namedNode(values: Array<string | NamedNode>): Clownface<NamedNode[], D>;

    in(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T extends undefined ? never : Array<NamedNode | BlankNode>, D>;
    out(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T extends undefined ? never : Term[], D>;

    has(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<Term>): Clownface<Array<NamedNode | BlankNode>, D>;

    addIn(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): Clownface<T, D>;
    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    addOut(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): Clownface<T, D>;
    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    deleteIn(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
    deleteOut(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
    deleteList(predicates: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
}

export = Clownface;
