import { Dataset, Term, BlankNode, NamedNode, Literal, Quad_Graph } from 'rdf-js';

type TermOrClownface = Clownface | Term;
type TermOrLiteral = TermOrClownface | string | number | boolean;

type AddCallback<D extends Dataset, X extends Term> = (added: Clownface<D, X>) => void;
type SingleOrArray<T> = T | T[];

type SingleOrArrayOfTerms = SingleOrArray<TermOrClownface>;
type SingleOrArrayOfTermsOrLiterals = SingleOrArray<TermOrLiteral>;

interface NodeOptions {
    type?: 'BlankNode' | 'Literal' | 'NamedNode';
    datatype?: Term | { toString(): string };
    language?: string;
}

interface ClownfaceOptions<D extends Dataset> {
    dataset?: D;
    graph?: Quad_Graph;
    term?: Term | Term[];
    value?: string | string[];
    _context?: any;
}

interface Clownface<D extends Dataset = Dataset, T extends Term = Term> {
    term: T | undefined;
    terms: T[];
    value: string | undefined;
    values: string[];
    dataset: D;
    datasets: D[];
    list(): Iterator<Term>;
    toArray(): Array<Clownface<D, T>>;
    filter(cb: (quad: SingleContextClownface<D, T>) => boolean): Clownface<D, T>;
    forEach(cb: (quad: SingleContextClownface<D, T>) => void): void;
    map<X>(cb: (quad: SingleContextClownface<D, T>, index: number) => X): X[];

    // tslint:disable:no-unnecessary-generics
    node<X extends Term = Term>(values: SingleOrArray<boolean | string | number | Term | null>, { type, datatype, language }?: NodeOptions): Clownface<D, X>;
    blankNode(values?: SingleOrArray<string>): Clownface<D, BlankNode>;
    literal(values: SingleOrArray<boolean | string | number | Term | null>, languageOrDatatype?: string | NamedNode): Clownface<D, Literal>;
    namedNode(values: SingleOrArray<string | NamedNode>): Clownface<D, NamedNode>;
    in<X extends Term = Term>(predicates: SingleOrArrayOfTerms): Clownface<D, X>;
    out<X extends Term = Term>(predicates: SingleOrArrayOfTerms): Clownface<D, X>;

    has<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects?: SingleOrArrayOfTermsOrLiterals): Clownface<D, X>;

    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objectsOrCallback?: SingleOrArrayOfTermsOrLiterals | AddCallback<D, X>): Clownface<D, X>;
    addIn<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<D, X>): Clownface<D, X>;

    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objectsOrCallback?: SingleOrArrayOfTermsOrLiterals | AddCallback<D, X>): Clownface<D, X>;
    addOut<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<D, X>): Clownface<D, X>;

    addList<X extends Term = Term>(predicates: SingleOrArrayOfTerms, objects?: SingleOrArrayOfTerms, callback?: AddCallback<D, X>): Clownface<D, X>;

    deleteIn<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): Clownface<D, X>;
    deleteOut<X extends Term = Term>(predicates?: SingleOrArrayOfTerms): Clownface<D, X>;
    deleteList<X extends Term = Term>(predicates: SingleOrArrayOfTerms): Clownface<D, X>;
    // tslint:enable:no-unnecessary-generics
}

interface SingleContextClownface<D extends Dataset = Dataset, T extends Term = Term> extends Clownface<D, T> {
  term: T;
  terms: [T];
  value: string;
  values: [string];
}

// tslint:disable-next-line no-unnecessary-class
declare class Clownface<D extends Dataset = Dataset, T extends Term = Term> implements Clownface<D, T> {
  constructor(options: ClownfaceOptions<D>);
}

export = Clownface;
