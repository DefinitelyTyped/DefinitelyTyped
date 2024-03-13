export = JsonPointer;

declare const JsonPointer: JsonPointer.Wrapper & JsonPointer.Api;

declare namespace JsonPointer {
    type JsonObject = Record<string | number, any> | any[];

    interface Wrapper {
        /**
         * Convenience wrapper around the api.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const object = {
         *     example: 'hello'
         * };
         *
         * pointer(object);                      // bind object
         * pointer(object, '/example');          // get
         * pointer(object, '/example', 'world'); // set
         *
         * // The wrapper supports chainable object oriented style.
         * const obj = { anything: 'bla' };
         * const objPointer = pointer(obj);
         * objPointer.set('/example', 'bla').dict();
         */
        (object: JsonObject): BoundWrapper & BoundApi;
        (...args: Parameters<Api["get"]>): ReturnType<Api["get"]>;
        (...args: Parameters<Api["set"]>): ReturnType<Api["set"]>;
    }

    interface BoundWrapper {
        (pointer: string | string[]): any;
        (pointer: string | string[], value: any): BoundApi;
    }

    interface Api {
        /**
         * Looks up a JSON pointer in an object.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const obj = {
         *     example: {
         *         bla: 'hello'
         *     }
         * };
         * pointer.get(obj, '/example/bla');
         * // -> 'hello'
         */
        get(object: JsonObject, pointer: string | string[]): any;

        /**
         * Sets a new value on object at the location described by pointer.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const obj = {};
         * pointer.set(obj, '/example/bla', 'hello');
         * // obj -> { example: { bla: 'hello' } }
         */
        set(object: JsonObject, pointer: string | string[], value: any): Api;

        /**
         * Removes an attribute of object referenced by pointer.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const obj = {
         *     example: 'hello'
         * };
         * pointer.remove(obj, '/example');
         * // obj -> {}
         */
        remove(object: JsonObject, pointer: string | string[]): void;

        /**
         * Creates a dictionary object (pointer -> value).
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const obj = {
         *     hello: { bla: 'example' }
         * };
         * pointer.dict(obj);
         * // -> { '/hello/bla': 'example' }
         */
        dict(object: JsonObject, descend?: (value: any) => boolean): Record<string, any>;

        /**
         * Iterates over an object. Just like: `each(pointer.dict(obj), iterator);`.
         */
        walk(object: JsonObject, iterator: (value: any, ref: string) => void, descend?: (value: any) => boolean): void;

        /**
         * Tests if an object has a value for a JSON pointer.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * const obj = {
         *     bla: 'hello'
         * };
         *
         * pointer.has(obj, '/bla');          // -> true
         * pointer.has(obj, '/non/existing'); // -> false
         */
        has(object: any, pointer: string | string[]): boolean;

        /**
         * Escapes a reference token.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * pointer.escape('hello~bla'); // -> 'hello~0bla'
         * pointer.escape('hello/bla'); // -> 'hello~1bla'
         */
        escape(pointer: string): string;

        /**
         * Unescape a reference token.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * pointer.unescape('hello~0bla'); // -> 'hello~bla'
         * pointer.unescape('hello~1bla'); // -> 'hello/bla'
         */
        unescape(pointer: string): string;

        /**
         * Converts a JSON pointer into an array of reference tokens.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * pointer.parse('/hello/bla'); // -> ['hello', 'bla']
         */
        parse(pointer: string): string[];

        /**
         * Builds a JSON pointer from an array of reference tokens.
         *
         * @example
         * import pointer = require('json-pointer');
         *
         * pointer.compile(['hello', 'bla']); // -> '/hello/bla'
         */
        compile(tokens: string[]): string;
    }

    type BoundApi =
        & {
            [key in "get" | "remove" | "dict" | "walk" | "has"]: (
                ...params: DropFirst<Parameters<Api[key]>>
            ) => ReturnType<Api[key]>;
        }
        & {
            set: (...params: DropFirst<Parameters<Api["set"]>>) => BoundApi;
        };
}

type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;
