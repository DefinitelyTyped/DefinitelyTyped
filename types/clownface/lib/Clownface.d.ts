    import { BlankNode, DatasetCore, Literal, NamedNode, Quad_Graph, Term } from 'rdf-js';
    import {
        Clownface as ClownfaceContract,
        ClownfaceInit,
        AddCallback,
        NodeOptions,
        SafeClownface,
        SingleOrArray,
        SingleOrArrayOfTerms,
        SingleOrArrayOfTermsOrLiterals,
        WithValue,
        WithTerm
    } from '..';

    declare class Clownface<D extends DatasetCore = DatasetCore, T extends Term = Term> implements ClownfaceContract<D, T> {
        constructor(options: ClownfaceInit & Partial<WithTerm<T>> & Partial<WithValue>);
        readonly term: T | undefined;
        readonly terms: T[];
        readonly value: string | undefined;
        readonly values: string[];
        readonly dataset: D;
        readonly datasets: D[];
        readonly _context: any;
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

    export = Clownface;
