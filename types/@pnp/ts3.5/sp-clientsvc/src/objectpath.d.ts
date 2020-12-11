import { TypedHash } from "@pnp/common";
/**
 * Defines the properties and method of an ObjectPath
 */
export interface IObjectPath {
    /**
     * The ObjectPath xml node
     */
    path: string;
    /**
     * Collection of xml action nodes
     */
    actions: string[];
    /**
     * The id of this object path, used for processing, not set directly
     */
    id: number | undefined;
}
/**
 * Represents an ObjectPath used when querying ProcessQuery
 */
export declare class ObjectPath implements IObjectPath {
    path: string;
    actions: string[];
    id: number;
    replaceAfter: IObjectPath[];
    constructor(path: string, actions?: string[], id?: number, replaceAfter?: IObjectPath[]);
}
/**
 * Replaces all found instance of the $$ID$$ placeholder in the supplied xml string
 *
 * @param id New value to be insterted
 * @param xml The existing xml fragment in which the replace should occur
 */
export declare function opSetId(id: string, xml: string): string;
/**
 * Replaces all found instance of the $$PATH_ID$$ placeholder in the supplied xml string
 *
 * @param id New value to be insterted
 * @param xml The existing xml fragment in which the replace should occur
 */
export declare function opSetPathId(id: string, xml: string): string;
/**
 * Replaces all found instance of the $$PARENT_ID$$ placeholder in the supplied xml string
 *
 * @param id New value to be insterted
 * @param xml The existing xml fragment in which the replace should occur
 */
export declare function opSetParentId(id: string, xml: string): string;
/**
 * Replaces all found instance of the $$OP_PARAM_ID$$ placeholder in the supplied xml string
 *
 * @param map A mapping where [index] = replaced_object_path_id
 * @param xml The existing xml fragment in which the replace should occur
 * @param indexMapper Used when creating batches, not meant for direct use external to this library
 */
export declare function opSetPathParamId(map: number[], xml: string, indexMapper?: (n: number) => number): string;
/**
 * Represents a collection of IObjectPaths
 */
export declare class ObjectPathQueue {
    protected _paths: IObjectPath[];
    protected _relationships: TypedHash<number[]>;
    private _xml;
    private _contextIndex;
    private _siteIndex;
    private _webIndex;
    constructor(_paths?: IObjectPath[], _relationships?: TypedHash<number[]>);
    /**
     * Adds an object path to the queue
     *
     * @param op The action to add
     * @returns The index of the added object path
     */
    add(op: IObjectPath): number;
    addChildRelationship(parentIndex: number, childIndex: number): void;
    getChildRelationship(parentIndex: number): number[];
    getChildRelationships(): TypedHash<number[]>;
    /**
     * Appends an action to the supplied IObjectPath, replacing placeholders
     *
     * @param op IObjectPath to which the action will be appended
     * @param action The action to append
     */
    appendAction(op: IObjectPath, action: string): this;
    /**
     * Appends an action to the last IObjectPath in the collection
     *
     * @param action
     */
    appendActionToLast(action: string): this;
    /**
     * Creates a linked copy of this ObjectPathQueue
     */
    copy(): ObjectPathQueue;
    /**
     * Creates an independent clone of this ObjectPathQueue
     */
    clone(): ObjectPathQueue;
    /**
     * Gets a copy of this instance's paths
     */
    toArray(): IObjectPath[];
    /**
     * The last IObjectPath instance added to this collection
     */
    readonly last: IObjectPath;
    /**
     * Index of the last IObjectPath added to the queue
     */
    readonly lastIndex: number;
    /**
     * Gets the index of the current site in the queue
     */
    readonly siteIndex: number;
    /**
     * Gets the index of the current web in the queue
     */
    readonly webIndex: number;
    /**
     * Gets the index of the Current context in the queue, can be used to establish parent -> child rels
     */
    readonly contextIndex: number;
    toBody(): string;
    /**
     * Conducts the string replacements for id, parent id, and path id
     *
     * @returns The tree with all string replacements made
     */
    toIndexedTree(): IObjectPath[];
    /**
     * Dirties this queue clearing any cached data
     */
    protected dirty(): void;
}
