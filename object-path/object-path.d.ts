// Type definitions for objectPath v0.6.0
// Project: https://github.com/mariocasciaro/object-path
// Definitions by: Paulo Cesar <https://github.com/pocesar/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var objectPath: objectPath.IObjectPathStatic;

declare module objectPath {

    interface IStringArray {
        [index: number]: string;
    }

    interface INumberArray {
        [index: number]: number;
    }

    interface IObjectPathStatic {
        /*======== Del =========*/

        /**
         * Deletes a member from object or array
         * @param {object} object
         * @param {string[]|string} path
         * @return object
         */
        del<T extends {}>(object: T, path: IStringArray): T;
        /**
         * @see objectPath.del
         */
        del<T extends {}>(object: T, path: INumberArray): T;
        /**
         * @see objectPath.del
         */
        del<T extends {}>(object: T, path: number): T;
        /**
         * @see objectPath.del
         */
        del<T extends {}>(object: T, path: string): T;
        /**
         * @see objectPath.del
         */
        del<T extends {}>(object: T): T;
        /**
         * @see objectPath.del
         */
        del():void;

        /*======== Get =========*/
        /**
         * Get a path from an object
         * @param {object} object
         * @param {string|string[]|number|number[]} path
         * @param {*} [defaultValue=undefined]
         */
        get<T extends {}, TResult>(object: T, path: string, defaultValue?: TResult): TResult;
        /**
         * @see objectPath.get
         */
        get<T extends {}, TResult>(object: T, path: IStringArray, defaultValue?: TResult): TResult;
        /**
         * @see objectPath.get
         */
        get<T extends {}, TResult>(object: T, path: number, defaultValue?: TResult): TResult;
        /**
         * @see objectPath.get
         */
        get<T extends {}, TResult>(object: T, path: INumberArray, defaultValue?: TResult): TResult;
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
        set<T extends {}, TExisting>(object: T, path: string, value: any, doNotReplace?:boolean): TExisting;
        /**
         * @see objectPath.set
         */
        set<T extends {}, TExisting>(object: T, path: number, value: any, doNotReplace?:boolean): TExisting;
        /**
         * @see objectPath.set
         */
        set<T extends {}, TExisting>(object: T, path: IStringArray, value: any, doNotReplace?:boolean): TExisting;
        /**
         * @see objectPath.set
         */
        set<T extends {}, TExisting>(object: T, path: INumberArray, value: any, doNotReplace?:boolean): TExisting;
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
        push<T extends {}>(object: T, path: INumberArray, ...args:any[]):void;
        /**
         * @see objectPath.push
         */
        push<T extends {}>(object: T, path: IStringArray, ...args:any[]):void;
        /**
         * @see objectPath.push
         */
        push<T extends {}>(object: T, path: number, ...args:any[]):void;
        /**
         * @see objectPath.push
         */
        push<T extends {}>(object: T, path: string, ...args:any[]):void;
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
        coalesce<T extends {}, TResult>(object: T, paths: IStringArray, defaultValue?: any):TResult;
        /**
         * @see objectPath.coalesce
         */
        coalesce<T extends {}, TResult>(object: T, paths: INumberArray, defaultValue?: any):TResult;
        /**
         * @see objectPath.coalesce
         */
        coalesce<T extends {}, TResult>(object: T, paths: IStringArray[], defaultValue?: any):TResult;
        /**
         * @see objectPath.coalesce
         */
        coalesce<T extends {}, TResult>(object: T, paths: INumberArray[], defaultValue?: any):TResult;

        /*======== Empty =========*/
        /**
         * Empty a path. Arrays are set to length 0, objects have all elements deleted, strings
         * are set to empty, numbers to 0, everything else is set to null
         * @param {object} object
         * @param {string|string[]|number[]} path
         */
        empty<T extends {}, TResult>(object: T, path: string):TResult;
        /**
         * @see objectPath.empty
         */
        empty<T extends {}, TResult>(object: T, path: INumberArray):TResult;
        /**
         * @see objectPath.empty
         */
        empty<T extends {}, TResult>(object: T, path: IStringArray):TResult;
        /**
         * @see objectPath.empty
         */
        empty<T extends {}, TResult>(object: T, path: number):TResult;
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
        ensureExists<T extends {}, TResult>(object: T, path: string, value: any):TResult;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists<T extends {}, TResult>(object: T, path: number, value: any):TResult;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists<T extends {}, TResult>(object: T, path: INumberArray, value: any):TResult;
        /**
         * @see objectPath.ensureExists
         */
        ensureExists<T extends {}, TResult>(object: T, path: IStringArray, value: any):TResult;
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
        insert<T extends {}>(object: T, path: string, value: any, at?: number):void;
        /**
         * @see objectPath.insert
         */
        insert<T extends {}>(object: T, path: INumberArray, value: any, at?: number):void;
        /**
         * @see objectPath.insert
         */
        insert<T extends {}>(object: T, path: IStringArray, value: any, at?: number):void;
        /**
         * @see objectPath.insert
         */
        insert<T extends {}>(object: T, path: number, value: any, at?: number):void;
    }

}

declare module 'objectPath' {
    export = objectPath;
}