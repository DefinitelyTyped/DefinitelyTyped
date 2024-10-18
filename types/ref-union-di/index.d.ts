import ref = require("ref-napi");

declare var UnionType: {
    new<TDefinition extends union.UnionTypeObjectDefinitionBase | union.UnionTypeObjectDefinitionInferenceMarker>(
        fields: TDefinition,
    ): union.UnionType<union.UnionTypeObjectDefinitionToUnionTypeDefinition<TDefinition>>;
    new(fields?: Record<string, string | ref.Type>): union.UnionType;

    <TDefinition extends union.UnionTypeObjectDefinitionBase | union.UnionTypeObjectDefinitionInferenceMarker>(
        fields: TDefinition,
    ): union.UnionType<union.UnionTypeObjectDefinitionToUnionTypeDefinition<TDefinition>>;
    (fields?: Record<string, string | ref.Type>): union.UnionType;
};

type RefModuleLike = Pick<typeof ref, "coerceType" | "get" | "set" | "alignof" | "sizeof" | "NULL">;

declare function union(ref: RefModuleLike): typeof UnionType;
declare namespace union {
    /**
     * Base constraint for an object-based union type definition.
     */
    type UnionTypeObjectDefinitionBase = Record<string, ref.TypeLike>;

    /**
     * This is a marker type that causes TypeScript to use string literal inference when inferring a generic from {@link UnionTypeObjectDefinitionBase}.
     * If it is not used, `new UnionType({ x: "int" })` will be inferred as `new UnionType<{ x: string }>(...)` instead of `new UnionType<{ x: "int" }>(...)`.
     */
    type UnionTypeObjectDefinitionInferenceMarker = Record<string, "void">;

    /**
     * Converts a {@link UnionTypeObjectDefinitionBase} into a consistent subtype of {@link UnionTypeDefinitionBase}. If `any` is used, it is passed along
     * to be interpreted to use a fallback definition for a union.
     */
    type UnionTypeObjectDefinitionToUnionTypeDefinition<T extends UnionTypeObjectDefinitionBase> = [T] extends
        [never] | [0] ? any // catches T extends never/any (since `0` doesn't overlap with our constraint)
        : { [P in keyof T]: ref.Type<ref.UnderlyingType<T[P]>> };

    /**
     * Base constraint for a consistent union type definition.
     */
    type UnionTypeDefinitionBase = Record<string, ref.Type>;

    /**
     * Converts a {@link UnionTypeDefinitionBase} into a set of fields for use with {@link UnionType.fields}.
     */
    type UnionFields<T extends UnionTypeDefinitionBase> = [T] extends [never] | [0] ? Record<string, Field> // catches T extends never/any (since `0` doesn't overlap with our constraint)
        : { [P in keyof T]: Field<ref.UnderlyingType<T[P]>> };

    /**
     * The base type of any {@link UnionObjectProperties}
     */
    interface UnionObjectBase {
        /**
         * Returns a {@link Buffer} pointing to this struct data structure.
         */
        ref(): ref.Pointer<this>;
    }

    /**
     * Converts a {@link UnionTypeDefinitionBase} into a an object type representing the runtime shape of a {@link UnionType}.
     */
    type UnionObjectProperties<T extends UnionTypeDefinitionBase> = [T] extends [never] | [0] ? Record<string, any> // catches T extends never/any (since `0` doesn't overlap with our constraint)
        : { [P in keyof T]: ref.UnderlyingType<T[P]> };

    /**
     * Represents the instance type of a union type.
     */
    type UnionObject<T> = UnionObjectBase & T;

    /**
     * Converts a {@link UnionTypeDefinitionBase} into a union of possible inputs, allowing only a single key/value of the union.
     */
    type UnionInput<T extends UnionTypeDefinitionBase> = [T] extends [never] | [0] ? Record<string, any> // catches T extends never/any (since `0` doesn't overlap with our constraint)
        : {
            // For each key in T, construct an object where that key is defined, and the other keys are `never`.
            //
            // For example:
            //      { x: Type<number>, y: Type<number> }
            // Becomes:
            //      {
            //          x: { x: number, y?: never };
            //          y: { y: number, x?: never };
            //      }
            [P in keyof UnionObjectProperties<T>]:
                & Pick<UnionObjectProperties<T>, P>
                & Partial<Record<Exclude<keyof UnionObjectProperties<T>, P>, never>>;
            // Performing an indexed access on the result using the expected keys gives us a union of non-overlapping values.
            //
            // For example:
            //      {
            //          x: { x: number, y?: never };
            //          y: { y: number, x?: never };
            //      }
            // Becomes:
            //      { x: number, y?: never } | { y: number, x?: never };
        }[keyof UnionObjectProperties<T>];

    /**
     * Defines a field in a {@link UnionType}.
     */
    interface Field<T = any> {
        type: ref.Type<T>;
    }

    /**
     * This is the `constructor` of the union type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the union.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the union fields to auto-populate the
     * union with the data.
     */
    interface UnionType<TDefinition extends UnionTypeDefinitionBase = any>
        extends ref.Type<UnionObject<UnionObjectProperties<TDefinition>>>
    {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new(arg: Buffer, data?: UnionInput<TDefinition>): UnionObject<UnionObjectProperties<TDefinition>>;
        new(data?: UnionInput<TDefinition>): UnionObject<UnionObjectProperties<TDefinition>>;

        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (arg: Buffer, data?: UnionInput<TDefinition>): UnionObject<UnionObjectProperties<TDefinition>>;
        (data?: UnionInput<TDefinition>): UnionObject<UnionObjectProperties<TDefinition>>;

        fields: UnionFields<TDefinition>;

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
