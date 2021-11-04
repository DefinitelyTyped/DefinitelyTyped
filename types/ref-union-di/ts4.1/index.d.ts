import ref = require('ref-napi');

declare var UnionType: {
    new (fields?: Record<string, string | ref.Type>): union.UnionType;
    (fields?: Record<string, string | ref.Type>): union.UnionType;
};

type RefModuleLike = Pick<typeof ref, "coerceType" | "get" | "set" | "alignof" | "sizeof" | "NULL">;

declare function union(ref: RefModuleLike): typeof UnionType;
declare namespace union {
    interface Field {
        type: ref.Type;
    }

    /**
     * This is the `constructor` of the Struct type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the union.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the union fields to auto-populate the
     * union with the data.
     *
     * @constructor
     */
    interface UnionType extends ref.Type {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new (arg: Buffer, data?: Record<string, any>): Record<string, any>;
        new (data?: Record<string, any>): Record<string, any>;

        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (arg: Buffer, data?: Record<string, any>): Record<string, any>;
        (data?: Record<string, any>): Record<string, any>;

        fields: Record<string, Field>;

        /**
         * Adds a new field to the union instance with the given name and type.
         * Note that this function will throw an Error if any instances of the union
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: string | ref.Type): void;

        /**
         * Custom for union type instances.
         * @override
         */
        toString(): string;
    }
}

export = union;
