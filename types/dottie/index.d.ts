declare const dottie: dottie.Dottie;
export = dottie;

declare namespace dottie {
    type DottiePath = string | string[];

    /**
     * @example
     * {
     *  'foo.bar.baz': 'baz',
     *  'foo.baz': 'baz',
     * }
     */
    interface FlatPaths {
        [path: string]: any;
    }

    interface SetOptions {
        /**
         * force overwrite defined non-object keys into objects if needed
         */
        force?: boolean | undefined;
    }

    interface TransformOptions {
        /**
         * Use a custom delimiter for path
         */
        delimiter?: string | undefined;
    }

    interface Dottie {
        /**
         * Dottie memoization flag
         */
        memoizePath: boolean;

        /**
         * Check path exists in object
         *
         * @example
         * const values = {
         *  some: {
         *    key: 'foobar';
         *  },
         * }
         *
         * dottie.exists(values, 'some.key'); // true
         * dottie.exists(values, 'some.otherKey'); // false
         */
        exists(obj: object, path: DottiePath): boolean;

        /**
         * Gets nested value, or undefined if unreachable, or a default value if passed.
         *
         * @example
         * const values = {
         *  some: {
         *    nested: {
         *      key: 'foobar';
         *    }
         *  },
         *  'some.dot.included': {
         *    key: 'barfoo'
         *  }
         * }
         *
         * dottie.get<string>(values, 'some.nested.key'); // 'foobar'
         * dottie.get<string>(values, 'some.undefined.key'); // undefined
         * dottie.get<string>(values, 'some.undefined.key', 'defaultval'); // 'defaultval'
         * dottie.get<string>(values, ['some.dot.included', 'key']); // 'barfoo'
         */
        get<T>(obj: object, path: DottiePath, defaultValue?: T): T;

        /**
         * Sets nested value, creates nested structure if needed
         *
         * @example
         * dottie.set(values, 'some.nested.value', someValue);
         * dottie.set(values, ['some.dot.included', 'value'], someValue);
         * dottie.set(values, 'some.nested.object', someValue, { force: true });
         */
        set(obj: object, path: DottiePath, value: any, options?: SetOptions): void;

        /**
         * Set the default value if path does not exist
         *
         * @example
         * dottie.default({}, 'some.value', 'a') as MyType; // { some: { value: 'a' }}
         * dottie.default({ some: { value: 'a' }}, 'some.value', 'b') as MyType; // { some: { value: 'a' }}
         */
        default(obj: object, path: DottiePath, value: any): any;

        /**
         * Transform object from keys with dottie notation to nested objects
         *
         * @example
         * const values = {
         *   'user.name': 'Gummy Bear',
         *   'user.email': 'gummybear@candymountain.com',
         *   'user.professional.title': 'King',
         *   'user.professional.employer': 'Candy Mountain'
         * };
         * const transformed = dottie.transform(values) as MyType;
         *
         * assert.deepEqual(transformed, {
         *   user: {
         *     name: 'Gummy Bear',
         *     email: 'gummybear@candymountain.com',
         *     professional: {
         *       title: 'King',
         *       employer: 'Candy Mountain'
         *     }
         *   }
         * });
         *
         * @example with custom delimiter
         * const values = {
         *   'user_name': 'Mick Hansen',
         *   'user_email': 'maker@mhansen.io'
         * };
         * const transformed = dottie.transform(values, { delimiter: '_' }) as MyType;
         *
         * assert.deepEqual(transformed, {
         *   user: {
         *     name: 'Mick Hansen',
         *     email: 'maker@mhansen.io'
         *   }
         * });
         */
        transform(obj: FlatPaths, options?: TransformOptions): any;

        /**
         * Opposite of transform. Flattens a nested object
         *
         * @example
         * const values = {
         *   user: {
         *     name: 'Gummy Bear',
         *     email: 'gummybear@candymountain.com',
         *     professional: {
         *       title: 'King',
         *       employer: 'Candy Mountain'
         *     }
         *   }
         * };
         * const transformed = dottie.transform(values);
         *
         * assert.deepEqual(transformed, {
         *   'user.name': 'Gummy Bear',
         *   'user.email': 'gummybear@candymountain.com',
         *   'user.professional.title': 'King',
         *   'user.professional.employer': 'Candy Mountain'
         * });
         *
         * @example with custom delimiter
         * const values = {
         *   user: {
         *     name: 'Mick Hansen',
         *     email: 'maker@mhansen.io'
         *   }
         * };
         * const transformed = dottie.flatten(values, '_');
         *
         * assert.deepEqual(transformed, {
         *   'user_name': 'Mick Hansen',
         *   'user_email': 'maker@mhansen.io'
         * });
         */
        flatten(obj: object, delimiter?: string): FlatPaths;

        /**
         * Get paths in object
         *
         * @example
         * const object = {
         *   a: 1,
         *   b: {
         *     c: 2,
         *     d: { e: 3 }
         *   }
         * };
         *
         * dottie.paths(object); // ["a", "b.c", "b.d.e"];
         */
        paths(obj: object): string[];
    }
}
