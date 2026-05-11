/**
 * An object pool implementation. Used for pooling objects to avoid unnecessary
 * garbage collection.
 */
export default class Pool {
    /**
     * Constructs a Pool instance.
     */
    constructor();
    /**
     * @description The class type.
     */
    type: string;
    /**
     * @description Incrementing id that keeps a count of the number of objects created
     */
    cID: number;
    /**
     * @description Map of pools in the format of PUID<String>: pool<Array>
     */
    list: object;
    /**
     * Attempts to create a new object either by creating a new instance or calling its
     * clone method.
     */
    create(functionOrObject: (args: any) => any, ...coonstuctorArgs: any[]): object | undefined;
    /**
     * Determines if the object is able to be instantiated or not.
     */
    canInstantiateObject(object: object): boolean;
    /**
     * Determines if the object is able to be cloned or not.
     */
    canCloneObject(object: object): boolean;
    /**
     * Determines if a new object is able to be created.
     */
    canCreateNewObject(object: object): boolean;
    /**
     * Gets a count of all objects in the pool.
     */
    getCount(): number;
    /**
     * Gets an object either by creating a new one or retrieving it from the pool.
     */
    get(obj: (obj: any) => any, ...args: any[]): object;
    /**
     * Pushes an object into the pool.
     */
    expire(obj: object): number;
    /**
     * Destroys all pools.
     */
    destroy(): void;
    /**
     * Gets the pool mapped to the UID.
     */
    _getList(uid: string): any[];
}
