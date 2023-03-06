// Type definitions for ref-struct-di 1.1
// Project: https://github.com/node-ffi-napi/ref-struct-di
// Definitions by: Keerthi Niranjan <https://github.com/keerthi16>, Kiran Niranjan <https://github.com/KiranNiranjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ref = require('ref-napi');

declare var StructType: {
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    new <TDefinition extends struct.StructTypeObjectDefinitionBase | struct.StructTypeObjectDefinitionInferenceMarker>(
        fields: TDefinition,
        opt?: { packed?: boolean | undefined }
    ): struct.StructType<struct.StructTypeObjectDefinitionToStructTypeDefinition<TDefinition>>;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    new <TDefinition extends struct.StructTypeTupleDefinitionBase | struct.StructTypeTupleDefinitionInferenceMarker>(
        fields: TDefinition,
        opt?: { packed?: boolean | undefined }
    ): struct.StructType<struct.StructTypeTupleDefinitionToStructTypeDefinition<TDefinition>>;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    new (fields?: Record<string, ref.TypeLike>, opt?: { packed?: boolean | undefined }): struct.StructType;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    new (fields?: Array<[ref.TypeLike, string]>, opt?: { packed?: boolean | undefined }): struct.StructType;

    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    <TDefinition extends struct.StructTypeObjectDefinitionBase | struct.StructTypeObjectDefinitionInferenceMarker>(
        fields: TDefinition,
        opt?: { packed?: boolean | undefined }
    ): struct.StructType<struct.StructTypeObjectDefinitionToStructTypeDefinition<TDefinition>>;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    <TDefinition extends struct.StructTypeTupleDefinitionBase | struct.StructTypeTupleDefinitionInferenceMarker>(
        fields: TDefinition,
        opt?: { packed?: boolean | undefined }
    ): struct.StructType<struct.StructTypeTupleDefinitionToStructTypeDefinition<TDefinition>>;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    (fields?: Record<string, ref.TypeLike>, opt?: { packed?: boolean | undefined }): struct.StructType;
    /**
     * Creates a new {@link struct.StructType} for the provided field definitions.
     */
    (fields?: Array<[ref.TypeLike, string]>, opt?: { packed?: boolean | undefined }): struct.StructType;
};

type RefModuleLike = Pick<typeof ref, "coerceType" | "get" | "set" | "alignof" | "sizeof" | "NULL">;

declare function struct(ref: RefModuleLike): typeof StructType;
declare namespace struct {
    /**
     * Base constraint for an object-based struct type definition.
     */
    type StructTypeObjectDefinitionBase = Record<string, ref.TypeLike>;

    /**
     * This is a marker type that causes TypeScript to use string literal inference when inferring a generic from {@link StructTypeObjectDefinitionBase}.
     * If it is not used, `new StructType({ x: "int" })` will be inferred as `new StructType<{ x: string }>(...)` instead of `new StructType<{ x: "int" }>(...)`.
     */
    type StructTypeObjectDefinitionInferenceMarker = Record<string, "void">;

    /**
     * Converts a {@link StructTypeObjectDefinitionBase} into a consistent subtype of {@link StructTypeDefinitionBase}. If `any` is used, it is passed along
     * to be interpreted to use a fallback definition for a struct.
     */
    type StructTypeObjectDefinitionToStructTypeDefinition<T extends StructTypeObjectDefinitionBase> =
        [T] extends [never] | [0] ? any : // catches T extends never/any (since `0` doesn't overlap with our constraint)
        { [P in keyof T]: ref.Type<ref.UnderlyingType<T[P]>>; };

    /**
     * Base constraint for an array-based struct type definition.
     */
    type StructTypeTupleDefinitionBase = Array<[ref.TypeLike, string]>;

    /**
     * This is a marker type that causes TypeScript to use tuple-type and string literal inference when inferring a generic from {@link StructTypeTupleDefinitionBase}.
     * If it is not used, `new StructType([["int", "x"]])` will be inferred as `new StructType<[string, string][]>(...)` instead of `new StructType<[["int", "x"]]>(...)`.
     */
    type StructTypeTupleDefinitionInferenceMarker = [["void", ""]];

    /**
     * Converts a {@link StructTypeTupleDefinitionBase} into a consistent subtype of {@link StructTypeDefinitionBase}. If `any` is used, it is passed along
     * to be interpreted to use a fallback definition for a struct.
     */
    type StructTypeTupleDefinitionToStructTypeDefinition<T extends StructTypeTupleDefinitionBase> =
        [T] extends [never] | [0] ? any : // catches T extends never/any (since `0` doesn't overlap with our constraint)
        { [P in Extract<keyof T, `${number}`> as Extract<T[P], [ref.TypeLike, string]>[1]]: ref.Type<ref.UnderlyingType<Extract<T[P], [ref.TypeLike, string]>[0]>>; };

    /**
     * Base constraint for a consistent struct type definition.
     */
    type StructTypeDefinitionBase = Record<string, ref.Type>;

    /**
     * Converts a {@link StructTypeDefinitionBase} into a set of fields for use with {@link StructType.fields}.
     */
    type StructFields<T extends StructTypeDefinitionBase> =
        [T] extends [never] | [0] ? Record<string, Field> : // catches T extends never/any (since `0` doesn't overlap with our constraint)
        { [P in keyof T]: Field<ref.UnderlyingType<T[P]>>; };

    /**
     * The base type of any {@link StructObjectProperties}
     */
    interface StructObjectBase {
        /**
         * Flattens the Struct instance into a regular JavaScript Object. This function
         * "gets" all the defined properties.
         */
        toObject(): any;
        /**
         * Basic `JSON.stringify(struct)` support.
         */
        toJSON(): any;
        /**
         * `.inspect()` override. For the REPL.
         */
        inspect(): string;
        /**
         * Returns a {@link Buffer} pointing to this struct data structure.
         */
        ref(): ref.Pointer<this>;
    }

    /**
     * Converts a {@link StructTypeDefinitionBase} into a an object type representing the runtime shape of a {@link StructType}.
     */
    type StructObjectProperties<T extends StructTypeDefinitionBase> =
        [T] extends [never] | [0] ? Record<string, any> : // catches T extends never/any (since `0` doesn't overlap with our constraint)
        { [P in keyof T]: ref.UnderlyingType<T[P]>; };

    /**
     * Represents the instance type of a struct type.
     */
    type StructObject<T> = StructObjectBase & T;

    /**
     * Defines a field in a {@link StructType}.
     */
    interface Field<T = any> {
        type: ref.Type<T>;
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
    interface StructType<TDefinition extends StructTypeDefinitionBase = any> extends ref.Type<StructObject<StructObjectProperties<TDefinition>>> {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new (
            arg?: Buffer | Partial<StructObjectProperties<TDefinition>>,
            data?: Partial<StructObjectProperties<TDefinition>>
        ): StructObject<StructObjectProperties<TDefinition>>;

        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (
            arg?: Buffer | Partial<StructObjectProperties<TDefinition>>,
            data?: Partial<StructObjectProperties<TDefinition>>
        ): StructObject<StructObjectProperties<TDefinition>>;

        fields: StructFields<TDefinition>;

        /**
         * Adds a new field to the struct instance with the given name and type.
         * Note that this function will throw an Error if any instances of the struct
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: ref.TypeLike): void;

        /**
         * Custom for struct type instances.
         * @override
         */
        toString(): string;
    }
}

export = struct;
