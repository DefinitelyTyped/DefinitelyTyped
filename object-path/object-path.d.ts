// Type definitions for objectPath v0.9.x
// Project: https://github.com/mariocasciaro/object-path
// Definitions by: Paulo Cesar <https://github.com/pocesar/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var objectPath: ObjectPathGlobal.IObjectPathStatic;

declare module ObjectPathGlobal {

    var Path: Array<number|string>|number|string;
    var multiArray: Array<typeof Path>;

    interface IObjectPathStatic {
        /**
         * Binds an object
         */
        <T extends {}>(object: T): IObjectPathBound<T>;

        /*======== Del =========*/

        /**
         * Deletes a member from object or array
         * @param {object} object
         * @param {string[]|string} path
         * @return object
         */
        del<T extends {}>(object: T, path: typeof Path): T;
        /**
         * @see objectPath.del
         */
        del<T extends {}>(object: T):T;
        /**
         * @see objectPath.del
         */
        del():void;

        /*======== Has =========*/
        /**
         * Tests path existence
         * @param {object} object
         * @param {string[]|string} path
         * @return object
         */
        has<T extends {}>(object: T, path: typeof Path): boolean;
        /**
         * @see objectPath.has
         */
        has<T extends {}>(object: T): boolean;
        /**
         * @see objectPath.has
         */
        has(): boolean;

        /*======== Get =========*/
        /**
         * Get a path from an object
         * @param {object} object
         * @param {string|string[]|number|number[]} path
         * @param {*} [defaultValue=undefined]
         */
        get<T extends {}, TResult>(object: T, path: typeof Path, defaultValue?: TResult): TResult;
        /**
         * @see objectPath.get
         */
        get<T extends {}>(object: T): T;
        /**
         * @see objectPath.get
         */
        get():void;

        /*======== Set =========*/
        /**
         * Set a path to a value
         * @param {object} object
         * @param {string|string[]|number|number[]} path
         * @param {*} value
         * @param {boolean} [doNotReplace=false]
         * @return Any existing value on the path if any
         */
        set<T extends {}, TExisting>(object: T, path: typeof Path, value: any, doNotReplace?:boolean): TExisting;
        /**
         * @see objectPath.set
         */
        set<T extends {}>(object: T): T;
        /**
         * @see objectPath.set
         */
        set():void;

        /*======== Push =========*/
        /**
         * Create (if path isn't an array) and push the value to it. Can push unlimited number of values
         * @param {object} object
         */
        push<T extends {}>(object: T, path: typeof Path, ...args:any[]):void;
        /**
         * @see objectPath.push
         */
        push():void;

        /*======== Coalesce =========*/
        /**
         * Get the first non undefined property
         * @param {object} object
         * @param {string[]|string[][]|number[]|number[][]} paths
         * @param {*} defaultValue
         * @return {*}
         */
        coalesce<T extends {}, TResult>(object: T, paths: typeof multiArray, defaultValue?: TResult):TResult;

        /*======== Empty =========*/
        /**
         * Empty a path. Arrays are set to length 0, objects have all elements deleted, strings
         * are set to empty, numbers to 0, everything else is set to null
         * @param {object} object
         * @param {string|string[]|number[]} path
         */
        empty<T extends {}, TResult>(object: T, path: typeof Path):TResult;
        /**
         * @see objectPath.empty
         */
        empty<T extends {}>(object: T):T;
        /**
         * @see objectPath.empty
         */
        empty():void;

        /*======== EnsureExists =========*/
        /**
         * Set a value if it doesn't exist, do nothing if it does
         * @param {object} object
         * @param {string|string[]|number|number[]} path
         */
        ensureExists<T extends {}, TExisting>(object: T, path: typeof Path, value: any):TExisting;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists<T extends {}>(object: T): T;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists():void;

        /*======== Insert =========*/
        /**
         * Insert an item in an array path
         * @param {object} object
         * @param {string|string[]|number|number[]} path
         * @param {*} value
         * @param {number} [at=0]
         */
        insert<T extends {}>(object: T, path: typeof Path, value: any, at?: number):void;
    }

    interface IObjectPathBound<T extends {}> {
        /*======== Del =========*/

        /**
         * @see objectPath.ensureExists
         */
        del(path: typeof Path): T;
        /**
         * @see objectPath.del
         */
        del(): T;

        /*======== Has =========*/
        /**
         * @see objectPath.ensureExists
         */
        has(path: typeof Path): boolean;
        /**
         * @see objectPath.has
         */
        has(): boolean;

        /*======== Get =========*/
        /**
         * @see objectPath.ensureExists
         */
        get<TResult>(path: typeof Path, defaultValue?: TResult): TResult;
        /**
         * @see objectPath.get
         */
        get(): T;

        /*======== Set =========*/
        /**
         * @see objectPath.ensureExists
         */
        set<TExisting>(path: typeof Path, value: any, doNotReplace?:boolean): TExisting;
        /**
         * @see objectPath.set
         */
        set(): T;

        /*======== Push =========*/
        /**
         * @see objectPath.ensureExists
         */
        push(path: typeof Path, ...args:any[]):void;
        /**
         * @see objectPath.push
         */
        push():void;

        /*======== Coalesce =========*/
        /**
         * @see objectPath.ensureExists
         */
        coalesce<TResult>(paths: typeof multiArray, defaultValue?: TResult):TResult;

        /*======== Empty =========*/
        /**
         * @see objectPath.ensureExists
         */
        empty(path: typeof Path):T;
        /**
         * @see objectPath.empty
         */
        empty():T;

        /*======== EnsureExists =========*/
        /**
         * @see objectPath.ensureExists
         */
        ensureExists<TExisting>(path: typeof Path, value: any):TExisting;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists(): T;

        /*======== Insert =========*/
        /**
         * @see objectPath.insert
         */
        insert(path: typeof Path, value: any, at?: number):void;
    }
}

// browser version
declare module 'objectPath' {
    export = objectPath;
}

// node version
declare module 'object-path' {
    export = objectPath;
}