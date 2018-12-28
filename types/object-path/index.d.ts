// Type definitions for objectPath 0.11
// Project: https://github.com/mariocasciaro/object-path
// Definitions by: Paulo Cesar <https://github.com/pocesar>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare const objectPath: objectPath.ObjectPathStatic & {
    withInheritedProps: objectPath.ObjectPathStatic;
    create(options?: objectPath.Options): objectPath.ObjectPathStatic;
};

declare namespace objectPath {
    interface Options {
        includeInheritedProps?: boolean;
    }

    type Path = Array<number | string> | number | string;

    interface ObjectPathStatic {
        /**
         * Binds an object
         */
        <T extends object>(object: T): ObjectPathBound<T>;

        /**
         * Deletes a member from object or array
         * @param object
         * @param path
         * @return object
         */
        del(object: object, path: Path): { [key: string]: any };

        /**
         * Tests path existence
         * @param object
         * @param path
         * @return object
         */
        has(object: object, path: Path): boolean;

        /**
         * Get a path from an object
         * @param object
         * @param path
         * @param [defaultValue=undefined]
         */
        get(object: object, path: Path): any;
        get<TResult>(object: object, path: Path, defaultValue: TResult): TResult;

        /**
         * Set a path to a value
         * @param object
         * @param path
         * @param value
         * @param [doNotReplace=false]
         * @return Any existing value on the path if any
         */
        set<TResult = any>(
            object: object,
            path: Path,
            value: TResult,
            doNotReplace?: boolean
        ): TResult | undefined;

        /**
         * Create (if path isn't an array) and push the value to it. Can push unlimited number of values
         * @param object
         * @param path
         * @param items
         */
        push(object: object, path: Path, ...items: any[]): void;

        /**
         * Get the first non undefined property
         * @param object
         * @param paths
         * @param defaultValue
         * @return
         */
        coalesce<TResult>(object: object, paths: Path | Path[], defaultValue: TResult): TResult;
        coalesce<TResult = any>(
            object: object,
            paths: Path | Path[],
            defaultValue?: TResult
        ): TResult | undefined;

        /**
         * Empty a path. Arrays are set to length 0, objects have all elements deleted, strings
         * are set to empty, numbers to 0, everything else is set to null
         * @param object
         * @param path
         */
        empty(object: object, path: Path): any;

        /**
         * Set a value if it doesn't exist, do nothing if it does
         * @param object
         * @param path
         * @param defaultValue
         */
        ensureExists<TResult>(object: object, path: Path, defaultValue: TResult): TResult;
        ensureExists<TResult = any>(
            object: object,
            path: Path,
            defaultValue?: TResult
        ): TResult | undefined;

        /**
         * Insert an item in an array path
         * @param object
         * @param path
         * @param value
         * @param [at=0]
         */
        insert(object: object, path: Path, value: any, at?: number): void;
    }

    interface ObjectPathBound<T extends object> {
        /**
         * @see objectPath.del
         */
        del(path: Path): { [key: string]: any };

        /**
         * @see objectPath.has
         */
        has(path: Path): boolean;

        /**
         * @see objectPath.get
         */
        get(path: Path): any;
        get<TResult>(path: Path, defaultValue: TResult): TResult;

        /**
         * @see objectPath.set
         */
        set<TResult = any>(path: Path, value: TResult, doNotReplace?: boolean): TResult | undefined;

        /**
         * @see objectPath.push
         */
        push(path: Path, ...items: any[]): void;

        /**
         * @see objectPath.coalesce
         */
        coalesce<TResult>(paths: Path | Path[], defaultValue: TResult): TResult;
        coalesce<TResult = any>(paths: Path | Path[], defaultValue?: TResult): TResult | undefined;

        /**
         * @see objectPath.empty
         */
        empty(path: Path): any;

        /**
         * @see objectPath.ensureExists
         */
        ensureExists<TResult>(path: Path, defaultValue: TResult): TResult;
        ensureExists<TResult = any>(path: Path, defaultValue?: TResult): TResult | undefined;

        /**
         * @see objectPath.insert
         */
        insert(path: Path, value: any, at?: number): void;
    }
}

export = objectPath;
