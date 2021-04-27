// Type definitions for clownface 1.2
// Project: https://github.com/rdf-ext/clownface
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { Term, DatasetCore, Quad_Graph, NamedNode, BlankNode, Literal } from 'rdf-js';
import { Context } from './lib/Context';

declare namespace clownface {
  type AnyContext = Term | Term[] | undefined;

  type TermOrClownface<X extends Term = Term> = MultiPointer<X> | X;
  type TermOrLiteral<X extends Term = Term> = TermOrClownface<X> | string | number | boolean;

  type AddCallback<D extends DatasetCore, X extends Term> = (added: AnyPointer<X, D>) => void;
  type SingleOrArray<T> = T | readonly T[];
  type SingleOrOneElementArray<T> = T | readonly [T];

  type SingleOrArrayOfTerms<X extends Term> = SingleOrArray<X> | MultiPointer<X>;
  type SingleOrArrayOfTermsOrLiterals<X extends Term> = SingleOrArray<TermOrLiteral<X>>;

  interface NodeOptions {
    type?: 'BlankNode' | 'Literal' | 'NamedNode';
    datatype?: Term | { toString(): string };
    language?: string;
  }

  type ClownfaceInit<D extends DatasetCore = DatasetCore>
    = Partial<Pick<AnyPointer<AnyContext, D>, 'dataset' | '_context'> & { graph: Quad_Graph }>;

  type Iteratee<T extends AnyContext = undefined, D extends DatasetCore = DatasetCore> =
    T extends undefined
      ? never
      : T extends any[]
      ? AnyPointer<T[0], D>
      : AnyPointer<T, D>;

  type Predicate<T extends AnyContext = undefined, D extends DatasetCore = DatasetCore> =
    T extends undefined
      ? never
      : T extends any[]
      ? Iteratee<T[0], D>
      : Iteratee<T, D>;

  interface OutOptions {
    language?: string | string[];
  }

  interface AnyPointer<T extends AnyContext = AnyContext, D extends DatasetCore = DatasetCore> {
    readonly term: T extends undefined ? undefined : T extends any[] ? undefined | T[0] : T;
    readonly terms: T extends undefined ? Term[] : T extends any[] ? T : [T];
    readonly value: T extends undefined ? undefined : T extends any[] ? undefined | string[0] : string;
    readonly values: T extends undefined ? string[] : T extends any[] ? string[] : [string];
    readonly dataset: D;
    readonly datasets: D[];
    readonly _context: Array<Context<D, Term>>;
    any(): AnyPointer<AnyContext, D>;
    list(): Iterable<Iteratee<T, D>> | null;
    toArray(): Array<AnyPointer<T extends undefined ? never : T extends any[] ? T[0] : T, D>>;
    filter<S extends T>(cb: (ptr: Iteratee<T, D>) => ptr is Predicate<S, any>): AnyPointer<S, D>;
    filter(cb: (ptr: Iteratee<T, D>) => boolean): AnyPointer<T, D>;
    forEach(cb: (quad: Iteratee<T, D>) => void): this;
    map<X>(cb: (quad: Iteratee<T, D>, index: number) => X): X[];

    node(value: SingleOrOneElementArray<boolean | string | number>, options?: NodeOptions): AnyPointer<Literal, D>;
    node(values: Array<boolean | string | number>, options?: NodeOptions): AnyPointer<Literal[], D>;

    node<X extends Term>(value: SingleOrOneElementArray<X> | AnyPointer<X, D>, options?: NodeOptions): AnyPointer<X, D>;
    node<X extends Term>(value: MultiPointer<X, D> | Iterable<X>, options?: NodeOptions): AnyPointer<X[], D>;
    node<X extends Term[]>(values: X, options?: NodeOptions): AnyPointer<X, D>;

    node(value: null, options?: NodeOptions): AnyPointer<BlankNode, D>;
    node(values: Array<null> | Iterable<BlankNode>, options?: NodeOptions): AnyPointer<BlankNode[], D>;

    node(values: Array<boolean | string | number | Term | null> | Iterable<Term>, options?: NodeOptions): AnyPointer<Term[], D>;

    blankNode(value?: SingleOrOneElementArray<string> | AnyPointer<BlankNode, D>): AnyPointer<BlankNode, D>;
    blankNode(values: string[] | MultiPointer<BlankNode, D> | Iterable<BlankNode>): AnyPointer<BlankNode[], D>;

    literal(value: SingleOrOneElementArray<boolean | string | number | Term | null> | AnyPointer<Literal, D>, languageOrDatatype?: string | NamedNode): AnyPointer<Literal, D>;
    literal(values: Array<boolean | string | number | Term | null> | MultiPointer<Literal, D> | Iterable<Literal>, languageOrDatatype?: string | NamedNode): AnyPointer<Literal[], D>;

    namedNode<Iri extends string = string>(value: SingleOrOneElementArray<string | NamedNode<Iri> | AnyPointer<NamedNode<Iri>, D>>): AnyPointer<NamedNode<Iri>, D>;
    namedNode(values: Array<string | NamedNode> | MultiPointer<NamedNode, D> | Iterable<NamedNode>): AnyPointer<NamedNode[], D>;

    in(predicates?: SingleOrArrayOfTerms<Term>): MultiPointer<T extends undefined ? never : NamedNode | BlankNode, D>;
    out(predicates?: SingleOrArrayOfTerms<Term>): MultiPointer<T extends undefined ? never : Term, D>;
    out(predicates?: SingleOrArrayOfTerms<Term>, options?: OutOptions): MultiPointer<T extends undefined ? never : Literal, D>;

    has(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<Term>): AnyPointer<Array<NamedNode | BlankNode>, D>;

    addIn(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): AnyPointer<T, D>;
    addIn(predicates: SingleOrArrayOfTerms<Term>, bnode: SingleOrOneElementArray<null | undefined>, callback?: AddCallback<D, BlankNode>): AnyPointer<T, D>;
    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, subjects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): AnyPointer<T, D>;

    addOut(predicates: SingleOrArrayOfTerms<Term>, callback?: AddCallback<D, BlankNode>): AnyPointer<T, D>;
    addOut(predicates: SingleOrArrayOfTerms<Term>, bnode: SingleOrOneElementArray<null | undefined>, callback?: AddCallback<D, BlankNode>): AnyPointer<T, D>;
    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): AnyPointer<T, D>;

    addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTermsOrLiterals<X>, callback?: AddCallback<D, X>): AnyPointer<T, D>;

    deleteIn(predicates?: SingleOrArrayOfTerms<Term>, subjects?: SingleOrArrayOfTerms<Term>): AnyPointer<T, D>;
    deleteOut(predicates?: SingleOrArrayOfTerms<Term>, objects?: SingleOrArrayOfTerms<Term>): AnyPointer<T, D>;
    deleteList(predicates: SingleOrArrayOfTerms<Term>): AnyPointer<T, D>;
  }

  type MultiPointer<T extends Term = Term, D extends DatasetCore = DatasetCore> = AnyPointer<T | T[], D>;
  type GraphPointer<T extends Term = Term, D extends DatasetCore = DatasetCore> = AnyPointer<T, D>;

  type ClownfaceInitWithTerms<T extends Term | Term[], D extends DatasetCore> = ClownfaceInit<D> & { term: T };
  type ClownfaceInitWithValue<D extends DatasetCore> = ClownfaceInit<D> & { value: string };
  type ClownfaceInitWithValues<D extends DatasetCore> = ClownfaceInit<D> & { value: string[] };
}

declare function clownface<D extends DatasetCore, T extends clownface.AnyContext>(other: clownface.AnyPointer<T, D>): clownface.AnyPointer<T, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInitWithValue<D>): clownface.AnyPointer<Literal, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInitWithValues<D>): clownface.AnyPointer<Literal[], D>;
declare function clownface<D extends DatasetCore, T extends Term | Term[]>(options: clownface.ClownfaceInitWithTerms<T, D>): clownface.AnyPointer<T, D>;
declare function clownface<D extends DatasetCore>(options: clownface.ClownfaceInit<D>): clownface.AnyPointer<clownface.AnyContext, D>;

export = clownface;
