/**
 * An object pool implementation. Used for pooling objects to avoid unnecessary
 * garbage collection.
 *
 */
export default class Pool {
    /**
     * Constructs a Pool instance.
     *
     * @return void
     */
    constructor();
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    /**
     * @desc Incrementing id that keeps a count of the number of objects created
     * @type {integer}
     */
    cID: number;
    /**
     * @desc Map of pools in the format of PUID<String>: pool<Array>
     * @type {object}
     */
    list: object;
    /**
     * Attempts to create a new object either by creating a new instance or calling its
     * clone method.
     *
     * @param {function|object} functionOrObject - The object to instantiate or clone
     * @return {object|undefined}
     */
    create(functionOrObject: (args: any) => any, ...coonstuctorArgs: any[]): object | undefined;
    /**
     * Determines if the object is able to be instantiated or not.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canInstantiateObject(object: object): boolean;
    /**
     * Determines if the object is able to be cloned or not.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canCloneObject(object: object): boolean;
    /**
     * Determines if a new object is able to be created.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canCreateNewObject(object: object): boolean;
    /**
     * Gets a count of all objects in the pool.
     *
     * @return {integer}
     */
    getCount(): number;
    /**
     * Gets an object either by creating a new one or retrieving it from the pool.
     *
     * @param {function|object} obj - The function or object to get
     * @param {array} args - The args to pass to the function on creation
     * @return {object}
     */
    get(obj: (obj: any) => any | object, ...args: any[]): object;
    /**
     * Pushes an object into the pool.
     *
     * @param {object} obj - The object to expire
     * @return {integer}
     */
    expire(obj: object): number;
    /**
     * Destroys all pools.
     *
     * @return void
     */
    destroy(): void;
    /**
     * Gets the pool mapped to the UID.
     *
     * @param {string} uid - The pool uid
     * @return {array}
     */
    _getList(uid: string): any[];
}
