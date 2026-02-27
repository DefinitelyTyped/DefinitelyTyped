import { DataFactory, DatasetCore, Quad, Term } from "@rdfjs/types";
import type Path from "./Path.d.ts"

/**
 * List of paths
 */
export default class PathList {
    /**
     * Create a new instance
     * @param options Options for creating the PathList
     */
    constructor(options: {
        dataset: DatasetCore;
        factory: DataFactory;
        ptrs?: Path[];
        terms?: Term[];
        graphs?: Term[];
    });

    factory: DataFactory;
    ptrs: Path[];

    /**
     * Dataset of the pointer or null if there is no unique dataset.
     */
    get dataset(): DatasetCore | null;

    /**
     * An array of all datasets of all pointers.
     */
    get datasets(): DatasetCore[];

    /**
     * The term of the pointers if all pointers refer to a unique term.
     */
    get term(): Term | undefined;

    /**
     * An array of all terms of all pointers.
     */
    get terms(): Term[];

    /**
     * The value of the pointers if all pointers refer to a unique term.
     */
    get value(): string | undefined;

    /**
     * An array of all values of all pointers.
     */
    get values(): string[];

    /**
     * Add quads with the current terms as the object
     */
    addIn(predicates: Term[], subjects: Term[], callback?: (ptr: this) => void): this;

    /**
     * Add lists with the given items
     */
    addList(predicates: Term[], items: Term[]): this;

    /**
     * Add quads with the current terms as the subject
     */
    addOut(predicates: Term[], objects: Term[], callback?: (ptr: this) => void): this;

    /**
     * Create a new instance of the Constructor with a cloned list of pointers.
     */
    clone(args: any): this;

    /**
     * Delete quads with the current terms as the object.
     */
    deleteIn(predicates: Term[], subjects: Term[]): this;

    /**
     * Delete lists.
     */
    deleteList(predicates: Term[]): this;

    /**
     * Delete quads with the current terms as the subject.
     */
    deleteOut(predicates: Term[], objects: Term[]): this;

    /**
     * Create a new instance with a unique set of pointers.
     * The path of the pointers is trimmed.
     */
    distinct(): this;

    /**
     * Executes a single instruction.
     */
    execute(instruction: any): this;

    /**
     * Executes an array of instructions.
     */
    executeAll(instructions: any): this;

    /**
     * Filter the pointers based on the result of the given callback function.
     */
    filter(callback: (ptr: this) => boolean): this;

    /**
     * Filter the pointers based on matching quad(s) with the current terms as the object.
     */
    hasIn(predicates: Term[], subjects: Term[]): this;

    /**
     * Filter the pointers based on matching quad(s) with the current terms as the subject.
     */
    hasOut(predicates: Term[], objects: Term[]): this;

    /**
     * Traverse the graph with the current terms as the object.
     */
    in(predicates: Term[], subjects: Term[]): this;

    /**
     * Check if any pointer is an any-pointer.
     */
    isAny(): boolean;

    /**
     * Check if there is only one pointer and whether that pointer is a list.
     */
    isList(): boolean;

    /**
     * Create an iterator for the list if the instance is a list; otherwise, return undefined.
     */
    list(): IterableIterator<this> | undefined;

    /**
     * Map each pointer using the given callback function.
     */
    map<T>(callback: (ptr: this) => T): T[];

    /**
     * Create a new instance with pointers using the given terms.
     */
    node(terms: Term[] | Term): this;

    /**
     * Traverse the graph with the current terms as the subject.
     */
    out(predicates: Term[], objects: Term[]): this;

    /**
     * Create an iterator of all quads of all pointer paths.
     */
    quads(): Quad[];

    /**
     * Trim the path of all pointers and create a new instance for the result.
     */
    trim(): this;

    /**
     * Iterator for each pointer wrapped into a new instance.
     */
    [Symbol.iterator](): Iterator<this>;
}
