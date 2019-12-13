import { DatasetCore, Term, BlankNode, NamedNode, Literal, Quad_Graph } from 'rdf-js';

export type TermOrClownface = Clownface | Term;
export type TermOrLiteral = TermOrClownface | string | number | boolean;

export type AddCallback<D extends DatasetCore, X extends Term> = (added: Clownface<D, X>) => void;
export type SingleOrArray<T> = T | T[];

export type SingleOrArrayOfTerms = SingleOrArray<TermOrClownface>;
export type SingleOrArrayOfTermsOrLiterals = SingleOrArray<TermOrLiteral>;

export interface NodeOptions {
    type?: 'BlankNode' | 'Literal' | 'NamedNode';
    datatype?: Term | { toString(): string };
    language?: string;
}

export interface ClownfaceOptions<D extends DatasetCore> {
    dataset?: D;
    graph?: Quad_Graph;
    _context?: any;
}

export interface WithValue {
    value: string | string[];
}

export interface WithTerm {
    term: Term | Term[];
}

export interface Clownface<D extends DatasetCore = DatasetCore, T extends Term = Term> {
    readonly term: T | undefined;
    readonly terms: T[];
    readonly value: string | undefined;
    readonly values: string[];
    readonly dataset: D;
    readonly datasets: D[];
    list(): Iterator<Term>;
    toArray(): Array<Clownface<D, T>>;
    filter(cb: (quad: Clownface<D, T>) => boolean): Clownface<D, T>;
    forEach(cb: (quad: Clownface<D, T>) => void): void;
    map<X>(cb: (quad: Clownface<D, T>, index: number) => X): X[];

    // tslint:disable:no-unnecessary-generics
    node<X extends Term = Term>(values: SingleOrArray<boolean | string | number | Term | null>, options?: NodeOptions): SafeClownface<D, X>;
    blankNode(values?: SingleOrArray<string>): SafeClownface<D, BlankNode>;
    literal(values: SingleOrArray<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): SafeClownface<D, Literal>;
    namedNode(values: SingleOrArray<string | NamedNode>): SafeClownface<D, NamedNode>;

    in<X extends Term = Term>(predicates: SingleOrArrayOfTerms): SafeClownface<D, X>;
    out<X extends Term = Term>(predicates: SingleOrArrayOfTerms): SafeClownface<D, X>;

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

export interface SafeClownface<D extends DatasetCore = DatasetCore, T extends Term = Term> extends Clownface<D, T> {
    filter(cb: (quad: SingleContextClownface<D, T>) => boolean): SafeClownface<D, T>;
    forEach(cb: (quad: SingleContextClownface<D, T>) => void): void;
    map<X>(cb: (quad: SingleContextClownface<D, T>, index: number) => X): X[];
    toArray(): Array<SingleContextClownface<D, T>>;
}

export interface SingleContextClownface<D extends DatasetCore = DatasetCore, T extends Term = Term> extends SafeClownface<D, T> {
    readonly term: T;
    readonly terms: [T];
    readonly value: string;
    readonly values: [string];
}
