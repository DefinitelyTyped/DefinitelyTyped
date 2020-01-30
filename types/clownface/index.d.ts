// Type definitions for clownface 0.12
// Project: https://github.com/rdf-ext/clownface
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Term, DatasetCore, Quad_Graph, NamedNode, BlankNode, Literal } from 'rdf-js';
import { Context } from './lib/Context';

declare namespace clownface {
    type TermOrClownface = Clownface | Term;
    type TermOrLiteral = TermOrClownface | string | number | boolean;

    type AddCallback<D extends DatasetCore, X extends Term> = (added: SingleContextClownface<D, X>) => void;
    type SingleOrArray<T> = T | T[];
    type SingleOrOneElementArray<T> = T | [T];

    type SingleOrArrayOfTerms = SingleOrArray<TermOrClownface>;
    type SingleOrArrayOfTermsOrLiterals = SingleOrArray<TermOrLiteral>;

    interface NodeOptions {
        type?: 'BlankNode' | 'Literal' | 'NamedNode';
        datatype?: Term | { toString(): string };
        language?: string;
    }

    type ClownfaceInit<D extends DatasetCore = DatasetCore, T extends Term = Term>
        = Partial<Pick<Clownface<D, T>, 'dataset' | '_context'> & { graph: Quad_Graph }>;

    interface WithSingleValue {
        value: string;
    }

    interface WithValues {
        value: string[];
    }

    interface WithSingleTerm<T extends Term = Term> {
        term: T;
    }

    interface WithTerms<T extends Term = Term> {
        term: T[];
    }

    interface Clownface<D extends DatasetCore = DatasetCore, T extends Term = Term> {
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

        node(value: SingleOrOneElementArray<boolean | string | number>, options?: NodeOptions): SingleContextClownface<D, Literal>;
        node(values: Array<boolean | string | number>, options?: NodeOptions): SafeClownface<D, Literal>;

        node<X extends Term>(value: SingleOrOneElementArray<X>, options?: NodeOptions): SingleContextClownface<D, X>;
        node<X extends Term>(values: X[], options?: NodeOptions): SafeClownface<D, X>;

        node(value: null, options?: NodeOptions): SingleContextClownface<D, BlankNode>;
        node(values: null[], options?: NodeOptions): SafeClownface<D, BlankNode>;

        node(values: SingleOrArray<boolean | string | number | Term | null>, options?: NodeOptions): SafeClownface<D>;

        blankNode(value?: SingleOrOneElementArray<string>): SingleContextClownface<D, BlankNode>;
        blankNode(values: string[]): SafeClownface<D, BlankNode>;

        literal(value: SingleOrOneElementArray<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): SingleContextClownface<D, Literal>;
        literal(values: Array<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): SafeClownface<D, Literal>;

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

        addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects?: SingleOrArrayOfTermsOrLiterals, callback?: AddCallback<D, X>): SafeClownface<D, X>;

        deleteIn<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;
        deleteOut<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): SafeClownface<D, X>;
        deleteList<X extends Term = Term>(predicates: SingleOrArrayOfTerms): SafeClownface<D, X>;
        // tslint:enable:no-unnecessary-generics
    }

    interface SafeClownface<D extends DatasetCore = DatasetCore, T extends Term = Term> extends Clownface<D, T> {
        filter(cb: (quad: SingleContextClownface<D, T>) => boolean): SafeClownface<D, T>;
        forEach(cb: (quad: SingleContextClownface<D, T>) => void): void;
        map<X>(cb: (quad: SingleContextClownface<D, T>, index: number) => X): X[];
        toArray(): Array<SingleContextClownface<D, T>>;
    }

    interface SingleContextClownface<D extends DatasetCore = DatasetCore, T extends Term = Term> extends SafeClownface<D, T> {
        readonly term: T;
        readonly terms: [T];
        readonly value: string;
        readonly values: [string];
        readonly _context: [Context<D, T>];
    }
}

type ClownfaceInitWithNodes<D extends DatasetCore, T extends Term> =
    clownface.ClownfaceInit<D> & clownface.WithTerms<T> |
    clownface.ClownfaceInit<D> & clownface.WithValues;

type ClownfaceInitWithSingleNode<D extends DatasetCore, T extends Term> =
    clownface.ClownfaceInit<D> & clownface.WithSingleTerm<T> |
    clownface.ClownfaceInit<D> & clownface.WithSingleValue;

declare function clownface<D extends DatasetCore, T extends Term = Term>(options: ClownfaceInitWithNodes<D, T>): clownface.SafeClownface<D, T>;
declare function clownface<D extends DatasetCore, T extends Term = Term>(options: ClownfaceInitWithSingleNode<D, T>): clownface.SingleContextClownface<D, T>;
declare function clownface<D extends DatasetCore, T extends Term = Term>(options: clownface.ClownfaceInit<D, T>): clownface.Clownface<D, T>;

export = clownface;
