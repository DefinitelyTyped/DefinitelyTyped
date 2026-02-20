import { Environment } from "@rdfjs/environment/Environment";
import { DatasetCore, Quad, Term } from "@rdfjs/types";
import Edge = require("./Edge");

declare class Path {
    constructor(options: {
        dataset: DatasetCore;
        edges?: Edge[];
        factory: Environment<any>;
        graph: Term;
        term: Term;
    });

    dataset: DatasetCore;
    edges: Edge[];
    factory: Environment<any>;

    get edge(): Edge | undefined;
    get graph(): Term;
    get length(): number;
    get startTerm(): Term;
    get term(): Term;
    get value(): string;

    addIn(predicates: Term[], subjects: Term[], callback?: (ptr: Path) => void): Path[];
    addList(predicates: Term[], items: Term[]): Path[];
    addOut(predicates: Term[], objects: Term[], callback?: (ptr: Path) => void): Path[];
    deleteIn(predicates: Term[], subjects: Term[]): Path[];
    deleteList(predicates: Term[]): Path[];
    deleteOut(predicates: Term[], objects: Term[]): Path[];

    execute(instruction: {
        operation: string;
        quantifier?: string;
        start?: string;
        end?: string;
        subjects?: Term[];
        predicates?: Term[];
        objects?: Term[];
        graphs?: Term[];
        items?: Term[];
        callback?: (edge: Edge, ptr: Path) => void;
    }): Path[];

    extend(edge: Edge): Path;
    hasIn(predicates: Term[], subjects: Term[]): Path[];
    hasOut(predicates: Term[], objects: Term[]): Path[];
    in(predicates: Term[], subjects: Term[]): Path[];
    isAny(): boolean;
    isList(): boolean;

    list(): IterableIterator<Path>;
    nodes(): IterableIterator<{ dataset: DatasetCore; term: Term }>;
    out(predicates: Term[], objects: Term[]): Path[];
    quads(): IterableIterator<Quad>;
    trim(): Path;
}

export = Path;
