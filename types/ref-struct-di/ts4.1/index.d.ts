import ref = require('ref-napi');

declare var StructType: {
    new (fields?: Record<string, string | ref.Type>, opt?: { packed?: boolean }): struct.StructType;
    new (fields?: Array<[string | ref.Type, string]>, opt?: { packed?: boolean }): struct.StructType;
    (fields?: Record<string, string | ref.Type>, opt?: { packed?: boolean }): struct.StructType;
    (fields?: Array<[string | ref.Type, string]>, opt?: { packed?: boolean }): struct.StructType;
};

type RefModuleLike = Pick<typeof ref, "coerceType" | "get" | "set" | "alignof" | "sizeof" | "NULL">;

declare function struct(ref: RefModuleLike): typeof StructType;
declare namespace struct {
    interface Field {
        type: ref.Type;
        offset: number;
    }
    /**
     * This is the `constructor` of the Struct type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the struct.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the struct fields to auto-populate the
     * struct with the data.
     *
     * @constructor
     */
    interface StructType extends ref.Type {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new (
            arg?: Buffer | Record<string, any>,
            data?: Record<string, any>
        ): Record<string, any>;

        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (
            arg?: Buffer | Record<string, any>,
            data?: Record<string, any>
        ): Record<string, any>;

        fields: Record<string, Field>;

        /**
         * Adds a new field to the struct instance with the given name and type.
         * Note that this function will throw an Error if any instances of the struct
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: string | ref.Type): void;

        /**
         * Custom for struct type instances.
         * @override
         */
        toString(): string;
    }
}

export = struct;
