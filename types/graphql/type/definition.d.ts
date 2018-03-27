import { MaybePromise } from "../jsutils/MaybePromise";
import {
    ScalarTypeDefinitionNode,
    ObjectTypeDefinitionNode,
    FieldDefinitionNode,
    InputValueDefinitionNode,
    InterfaceTypeDefinitionNode,
    UnionTypeDefinitionNode,
    EnumTypeDefinitionNode,
    EnumValueDefinitionNode,
    InputObjectTypeDefinitionNode,
    ObjectTypeExtensionNode,
    InterfaceTypeExtensionNode,
    OperationDefinitionNode,
    FieldNode,
    FragmentDefinitionNode,
    ValueNode,
} from "../language/ast";
import { GraphQLSchema } from "./schema";

/**
 * These are all of the possible kinds of types.
 */
export type GraphQLType =
    | GraphQLScalarType
    | GraphQLObjectType
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<any>
    | GraphQLNonNull<any>;

export function isType(type: any): type is GraphQLType;

export function assertType(type: any): GraphQLType;

export function isScalarType(type: GraphQLType): type is GraphQLScalarType;

export function assertScalarType(type: GraphQLType): GraphQLScalarType;

export function isObjectType(type: GraphQLType): type is GraphQLObjectType;

export function assertObjectType(type: GraphQLType): GraphQLObjectType;

export function isInterfaceType(type: GraphQLType): type is GraphQLInterfaceType;

export function assertInterfaceType(type: GraphQLType): GraphQLInterfaceType;

export function isUnionType(type: GraphQLType): type is GraphQLUnionType;

export function assertUnionType(type: GraphQLType): GraphQLUnionType;

export function isEnumType(type: GraphQLType): type is GraphQLEnumType;

export function assertEnumType(type: GraphQLType): GraphQLEnumType;

export function isInputObjectType(type: GraphQLType): type is GraphQLInputObjectType;

export function assertInputObjectType(type: GraphQLType): GraphQLInputObjectType;

export function isListType(type: GraphQLType): type is GraphQLList<any>;

export function assertListType(type: GraphQLType): GraphQLList<any>;

export function isNonNullType(type: GraphQLType): type is GraphQLNonNull<any>;

export function assertNonNullType(type: GraphQLType): GraphQLNonNull<any>;

/**
 * These types may be used as input types for arguments and directives.
 */
export type GraphQLInputType =
    | GraphQLScalarType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<any>
    | GraphQLNonNull<GraphQLScalarType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any>>;

export function isInputType(type: GraphQLType): type is GraphQLInputType;

export function assertInputType(type: GraphQLType): GraphQLInputType;

/**
 * These types may be used as output types as the result of fields.
 */
export type GraphQLOutputType =
    | GraphQLScalarType
    | GraphQLObjectType
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLList<any>
    | GraphQLNonNull<
          | GraphQLScalarType
          | GraphQLObjectType
          | GraphQLInterfaceType
          | GraphQLUnionType
          | GraphQLEnumType
          | GraphQLList<any>
      >;

export function isOutputType(type: GraphQLType): type is GraphQLOutputType;

export function assertOutputType(type: GraphQLType): GraphQLOutputType;

/**
 * These types may describe types which may be leaf values.
 */
export type GraphQLLeafType = GraphQLScalarType | GraphQLEnumType;

export function isLeafType(type: GraphQLType): type is GraphQLLeafType;

export function assertLeafType(type: GraphQLType): GraphQLLeafType;

/**
 * These types may describe the parent context of a selection set.
 */
export type GraphQLCompositeType = GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType;

export function isCompositeType(type: GraphQLType): type is GraphQLCompositeType;

export function assertCompositeType(type: GraphQLType): GraphQLCompositeType;

/**
 * These types may describe the parent context of a selection set.
 */
export type GraphQLAbstractType = GraphQLInterfaceType | GraphQLUnionType;

export function isAbstractType(type: GraphQLType): type is GraphQLAbstractType;

export function assertAbstractType(type: GraphQLType): GraphQLAbstractType;

/**
 * List Modifier
 *
 * A list is a kind of type marker, a wrapping type which points to another
 * type. Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: new GraphQLList(Person) },
 *         children: { type: new GraphQLList(Person) },
 *       })
 *     })
 *
 */
export class GraphQLList<T extends GraphQLType> {
    readonly ofType: T;
    constructor(type: T);
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

/**
 * Non-Null Modifier
 *
 * A non-null is a kind of type marker, a wrapping type which points to another
 * type. Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: new GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */
export class GraphQLNonNull<T extends GraphQLNullableType> {
    readonly ofType: T;
    constructor(type: T);
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export type GraphQLWrappingType = GraphQLList<any> | GraphQLNonNull<any>;

export function isWrappingType(type: GraphQLType): type is GraphQLWrappingType;

export function assertWrappingType(type: GraphQLType): GraphQLWrappingType;

/**
 * These types can all accept null as a value.
 */
export type GraphQLNullableType =
    | GraphQLScalarType
    | GraphQLObjectType
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<any>;

export function isNullableType(type: GraphQLType): type is GraphQLNullableType;

export function assertNullableType(type: GraphQLType): GraphQLNullableType;

export function getNullableType(type: void): undefined;
export function getNullableType<T extends GraphQLNullableType>(type: T): T;
export function getNullableType<T extends GraphQLNullableType>(type: GraphQLNonNull<T>): T;

/**
 * These named types do not include modifiers like List or NonNull.
 */
export type GraphQLNamedType =
    | GraphQLScalarType
    | GraphQLObjectType
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType;

export function isNamedType(type: GraphQLType): type is GraphQLNamedType;

export function assertNamedType(type: GraphQLType): GraphQLNamedType;

export function getNamedType(type: void): undefined;
export function getNamedType(type: GraphQLType): GraphQLNamedType;

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */
export type Thunk<T> = (() => T) | T;

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         return value % 2 === 1 ? value : null;
 *       }
 *     });
 *
 */
export class GraphQLScalarType {
    name: string;
    description: string | void;
    astNode?: ScalarTypeDefinitionNode | void;
    constructor(config: GraphQLScalarTypeConfig<any, any>);

    // Serializes an internal value to include in a response.
    serialize(value: any): any;

    // Parses an externally provided value to use as an input.
    parseValue(value: any): any;

    // Parses an externally provided literal value to use as an input.
    parseLiteral(valueNode: ValueNode, variables?: { [key: string]: any } | void): any;

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLScalarTypeConfig<TInternal, TExternal> {
    name: string;
    description?: string | void;
    astNode?: ScalarTypeDefinitionNode | void;
    serialize(value: any): TExternal | void;
    parseValue?(value: any): TInternal | void;
    parseLiteral?(valueNode: ValueNode, variables: { [key: string]: any } | void): TInternal | void;
}

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
export class GraphQLObjectType {
    name: string;
    description: string | void;
    astNode: ObjectTypeDefinitionNode | void;
    extensionASTNodes: ReadonlyArray<ObjectTypeExtensionNode> | void;
    isTypeOf: GraphQLIsTypeOfFn<any, any> | void;

    constructor(config: GraphQLObjectTypeConfig<any, any>);
    getFields(): GraphQLFieldMap<any, any>;
    getInterfaces(): GraphQLInterfaceType[];
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLObjectTypeConfig<TSource, TContext> {
    name: string;
    interfaces?: Thunk<GraphQLInterfaceType[] | void>;
    fields: Thunk<GraphQLFieldConfigMap<TSource, TContext>>;
    isTypeOf?: GraphQLIsTypeOfFn<TSource, TContext> | void;
    description?: string | void;
    astNode?: ObjectTypeDefinitionNode | void;
    extensionASTNodes?: ReadonlyArray<ObjectTypeExtensionNode> | void;
}

export type GraphQLTypeResolver<TSource, TContext> = (
    value: TSource,
    context: TContext,
    info: GraphQLResolveInfo
) => MaybePromise<GraphQLObjectType | string | void>;

export type GraphQLIsTypeOfFn<TSource, TContext> = (
    source: TSource,
    context: TContext,
    info: GraphQLResolveInfo
) => MaybePromise<boolean>;

export type GraphQLFieldResolver<TSource, TContext, TArgs = { [argName: string]: any }> = (
    source: TSource,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => any;

export interface GraphQLResolveInfo {
    readonly fieldName: string;
    readonly fieldNodes: ReadonlyArray<FieldNode>;
    readonly returnType: GraphQLOutputType;
    readonly parentType: GraphQLObjectType;
    readonly path: ResponsePath;
    readonly schema: GraphQLSchema;
    readonly fragments: { [key: string]: FragmentDefinitionNode };
    readonly rootValue: any;
    readonly operation: OperationDefinitionNode;
    readonly variableValues: { [variableName: string]: any };
}

export type ResponsePath = {
    readonly prev: ResponsePath | undefined;
    readonly key: string | number;
};

export interface GraphQLFieldConfig<TSource, TContext, TArgs = { [argName: string]: any }> {
    type: GraphQLOutputType;
    args?: GraphQLFieldConfigArgumentMap;
    resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    deprecationReason?: string | void;
    description?: string | void;
    astNode?: FieldDefinitionNode | void;
}

export type GraphQLFieldConfigArgumentMap = { [key: string]: GraphQLArgumentConfig };

export interface GraphQLArgumentConfig {
    type: GraphQLInputType;
    defaultValue?: any;
    description?: string | void;
    astNode?: InputValueDefinitionNode | void;
}

export type GraphQLFieldConfigMap<TSource, TContext> = {
    [key: string]: GraphQLFieldConfig<TSource, TContext>;
};

export interface GraphQLField<TSource, TContext, TArgs = { [key: string]: any }> {
    name: string;
    description: string | void;
    type: GraphQLOutputType;
    args: GraphQLArgument[];
    resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    isDeprecated?: boolean;
    deprecationReason?: string | void;
    astNode?: FieldDefinitionNode | void;
}

export interface GraphQLArgument {
    name: string;
    type: GraphQLInputType;
    defaultValue?: any;
    description?: string | void;
    astNode?: InputValueDefinitionNode | void;
}

export type GraphQLFieldMap<TSource, TContext> = {
    [key: string]: GraphQLField<TSource, TContext>;
};

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
export class GraphQLInterfaceType {
    name: string;
    description: string | void;
    astNode?: InterfaceTypeDefinitionNode | void;
    extensionASTNodes: ReadonlyArray<InterfaceTypeExtensionNode> | void;
    resolveType: GraphQLTypeResolver<any, any> | void;

    constructor(config: GraphQLInterfaceTypeConfig<any, any>);

    getFields(): GraphQLFieldMap<any, any>;

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLInterfaceTypeConfig<TSource, TContext> {
    name: string;
    fields: Thunk<GraphQLFieldConfigMap<TSource, TContext>>;
    /**
     * Optionally provide a custom type resolver function. If one is not provided,
     * the default implementation will call `isTypeOf` on each implementing
     * Object type.
     */
    resolveType?: GraphQLTypeResolver<TSource, TContext> | void;
    description?: string | void;
    astNode?: InterfaceTypeDefinitionNode | void;
    extensionASTNodes?: ReadonlyArray<InterfaceTypeExtensionNode> | void;
}

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
export class GraphQLUnionType {
    name: string;
    description: string | void;
    astNode?: UnionTypeDefinitionNode | void;
    resolveType: GraphQLTypeResolver<any, any> | void;

    constructor(config: GraphQLUnionTypeConfig<any, any>);

    getTypes(): GraphQLObjectType[];

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLUnionTypeConfig<TSource, TContext> {
    name: string;
    types: Thunk<GraphQLObjectType[]>;
    /**
     * Optionally provide a custom type resolver function. If one is not provided,
     * the default implementation will call `isTypeOf` on each implementing
     * Object type.
     */
    resolveType?: GraphQLTypeResolver<TSource, TContext> | void;
    description?: string | void;
    astNode?: UnionTypeDefinitionNode | void;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
export class GraphQLEnumType {
    name: string;
    description: string | void;
    astNode: EnumTypeDefinitionNode | void;

    constructor(config: GraphQLEnumTypeConfig);
    getValues(): GraphQLEnumValue[];
    getValue(name: string): GraphQLEnumValue | void;
    serialize(value: any): string | void;
    parseValue(value: any): any;
    parseLiteral(valueNode: ValueNode, _variables: { [key: string]: any } | void): any;
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLEnumTypeConfig {
    name: string;
    values: GraphQLEnumValueConfigMap;
    description?: string | void;
    astNode?: EnumTypeDefinitionNode | void;
}

export type GraphQLEnumValueConfigMap = { [key: string]: GraphQLEnumValueConfig };

export interface GraphQLEnumValueConfig {
    value?: any;
    deprecationReason?: string | void;
    description?: string | void;
    astNode?: EnumValueDefinitionNode | void;
}

export interface GraphQLEnumValue {
    name: string;
    description: string | void;
    isDeprecated?: boolean;
    deprecationReason: string | void;
    astNode?: EnumValueDefinitionNode | void;
    value: any;
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
export class GraphQLInputObjectType {
    name: string;
    description: string | void;
    astNode: InputObjectTypeDefinitionNode | void;
    constructor(config: GraphQLInputObjectTypeConfig);
    getFields(): GraphQLInputFieldMap;
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLInputObjectTypeConfig {
    name: string;
    fields: Thunk<GraphQLInputFieldConfigMap>;
    description?: string | void;
    astNode?: InputObjectTypeDefinitionNode | void;
}

export interface GraphQLInputFieldConfig {
    type: GraphQLInputType;
    defaultValue?: any;
    description?: string | void;
    astNode?: InputValueDefinitionNode | void;
}

export type GraphQLInputFieldConfigMap = {
    [key: string]: GraphQLInputFieldConfig;
};

export interface GraphQLInputField {
    name: string;
    type: GraphQLInputType;
    defaultValue?: any;
    description?: string | void;
    astNode?: InputValueDefinitionNode | void;
}

export type GraphQLInputFieldMap = { [key: string]: GraphQLInputField };
