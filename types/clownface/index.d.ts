// Type definitions for clownface 0.12
// Project: https://github.com/rdf-ext/clownface
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { Term, DatasetCore, Quad_Graph, NamedNode, BlankNode, Literal } from 'rdf-js';
import { Context } from './lib/Context';

declare namespace clownface {
  type AnyContext = Term | Term[] | undefined;

  type TermOrClownface<X extends Term = Term> = SafeClownface<X> | X;
  type TermOrLiteral<X extends Term = Term> = TermOrClownface<X> | string | number | boolean;

  type AddCallback<D extends DatasetCore, X extends Term> = (added: Clownface<X, D>) => void;
  type SingleOrArray<T> = T | readonly T[];
  type SingleOrOneElementArray<T> = T | readonly [T];

  type SingleOrArrayOfTerms<X extends Term> = SingleOrArray<X> | SafeClownface<X>;
  type SingleOrArrayOfTermsOrLiterals<X extends Term> = SingleOrArray<TermOrLiteral<X>>;

  interface NodeOptions {
    type?: 'BlankNode' | 'Literal' | 'NamedNode';
    datatype?: Term | { toString(): string };
    language?: string;
  }

  type ClownfaceInit<D extends DatasetCore = DatasetCore>
    = Partial<Pick<Clownface<AnyContext, D>, 'dataset' | '_context'> & { graph: Quad_Graph }>;

  type Iteratee<T extends AnyContext = undefined, D extends DatasetCore = DatasetCore> =
    T extends undefined
      ? never
      : T extends any[]
      ? Clownface<T[0], D>
      : Clownface<T, D>;

  interface Clownface<T extends AnyContext = AnyContext, D extends DatasetCore = DatasetCore> {
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
    node(values: Array<null>, options?: NodeOptions): Clownface<BlankNode[], D>;

    node(values: Array<boolean | string | number | Term | null>, options?: NodeOptions): Clownface<Term[], D>;

    blankNode(value?: SingleOrOneElementArray<string>): Clownface<BlankNode, D>;
    blankNode(values: string[]): Clownface<BlankNode[], D>;

    literal(value: SingleOrOneElementArray<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): Clownface<Literal, D>;
    literal(values: Array<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): Clownface<Literal[], D>;

    namedNode(value: SingleOrOneElementArray<string | NamedNode>): Clownface<NamedNode, D>;
    namedNode(values: Array<string | NamedNode>): Clownface<NamedNode[], D>;

    in(predicates?: SingleOrArrayOfTerms<Term>): SafeClownface<T extends undefined ? never : NamedNode | BlankNode, D>;
    out(predicates?: SingleOrArrayOfTerms<Term>): SafeClownface<T extends undefined ? never : Term, D>;

    has(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<Term>): Clownface<Array<NamedNode | BlankNode>, D>;

    addIn(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): Clownface<T, D>;
    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, subjects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    addOut(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): Clownface<T, D>;
    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): Clownface<T, D>;

    deleteIn(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
    deleteOut(predicates?: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
    deleteList(predicates: SingleOrArrayOfTerms<Term>): Clownface<T, D>;
  }

  type SafeClownface<T extends Term = Term, D extends DatasetCore = DatasetCore> = Clownface<T | T[], D>;
  type SingleContextClownface<T extends Term = Term, D extends DatasetCore = DatasetCore> = Clownface<T, D>;

  type ClownfaceInitWithTerms<T extends Term | Term[], D extends DatasetCore> = ClownfaceInit<D> & { term: T };
  type ClownfaceInitWithValue<D extends DatasetCore> = ClownfaceInit<D> & { value: string };
  type ClownfaceInitWithValues<D extends DatasetCore> = ClownfaceInit<D> & { value: string[] };
}

declare function clownface<D extends DatasetCore, T extends clownface.AnyContext>(other: clownface.Clownface<T, D>): clownface.Clownface<T, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInitWithValue<D>): clownface.Clownface<Literal, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInitWithValues<D>): clownface.Clownface<Literal[], D>;
declare function clownface<D extends DatasetCore, T extends Term | Term[]>(options: clownface.ClownfaceInitWithTerms<T, D>): clownface.Clownface<T, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInit<D>): clownface.Clownface<clownface.AnyContext, D>;

export = clownface;
