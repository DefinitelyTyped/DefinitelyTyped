import Maybe from "../tsutils/Maybe";
import { PromiseOrValue } from "../jsutils/PromiseOrValue";
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
    ScalarTypeExtensionNode,
    UnionTypeExtensionNode,
    EnumTypeExtensionNode,
    InputObjectTypeExtensionNode,
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

export function isScalarType(type: any): type is GraphQLScalarType;

export function assertScalarType(type: any): GraphQLScalarType;

export function isObjectType(type: any): type is GraphQLObjectType;

export function assertObjectType(type: any): GraphQLObjectType;

export function isInterfaceType(type: any): type is GraphQLInterfaceType;

export function assertInterfaceType(type: any): GraphQLInterfaceType;

export function isUnionType(type: any): type is GraphQLUnionType;

export function assertUnionType(type: any): GraphQLUnionType;

export function isEnumType(type: any): type is GraphQLEnumType;

export function assertEnumType(type: any): GraphQLEnumType;

export function isInputObjectType(type: any): type is GraphQLInputObjectType;

export function assertInputObjectType(type: any): GraphQLInputObjectType;

export function isListType(type: any): type is GraphQLList<any>;

export function assertListType(type: any): GraphQLList<any>;

export function isNonNullType(type: any): type is GraphQLNonNull<any>;

export function assertNonNullType(type: any): GraphQLNonNull<any>;

/**
 * These types may be used as input types for arguments and directives.
 */
export type GraphQLInputType =
    | GraphQLScalarType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<any>
    | GraphQLNonNull<GraphQLScalarType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any>>;

export function isInputType(type: any): type is GraphQLInputType;

export function assertInputType(type: any): GraphQLInputType;

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

export function isOutputType(type: any): type is GraphQLOutputType;

export function assertOutputType(type: any): GraphQLOutputType;

/**
 * These types may describe types which may be leaf values.
 */
export type GraphQLLeafType = GraphQLScalarType | GraphQLEnumType;

export function isLeafType(type: any): type is GraphQLLeafType;

export function assertLeafType(type: any): GraphQLLeafType;

/**
 * These types may describe the parent context of a selection set.
 */
export type GraphQLCompositeType = GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType;

export function isCompositeType(type: any): type is GraphQLCompositeType;

export function assertCompositeType(type: any): GraphQLCompositeType;

/**
 * These types may describe the parent context of a selection set.
 */
export type GraphQLAbstractType = GraphQLInterfaceType | GraphQLUnionType;

export function isAbstractType(type: any): type is GraphQLAbstractType;

export function assertAbstractType(type: any): GraphQLAbstractType;

/**
 * List Modifier
 *
 * A list is a kind of type marker, a wrapping type which points to another
 * type. Lists are often created within the context of defining the fields
 * of an object type.
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
interface GraphQLList<T extends GraphQLType> {
    readonly ofType: T;
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

interface _GraphQLList<T extends GraphQLType> {
    (type: T): GraphQLList<T>;
    new (type: T): GraphQLList<T>;
}

export const GraphQLList: _GraphQLList<GraphQLType>;

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
interface GraphQLNonNull<T extends GraphQLNullableType> {
    readonly ofType: T;
    toString(): string;
    toJSON(): string;
    inspect(): string;
}

interface _GraphQLNonNull<T extends GraphQLNullableType> {
    (type: T): GraphQLNonNull<T>;
    new (type: T): GraphQLNonNull<T>;
}

export const GraphQLNonNull: _GraphQLNonNull<GraphQLNullableType>;

export type GraphQLWrappingType = GraphQLList<any> | GraphQLNonNull<any>;

export function isWrappingType(type: any): type is GraphQLWrappingType;

export function assertWrappingType(type: any): GraphQLWrappingType;

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

export function isNullableType(type: any): type is GraphQLNullableType;

export function assertNullableType(type: any): GraphQLNullableType;

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

export function isNamedType(type: any): type is GraphQLNamedType;

export function assertNamedType(type: any): GraphQLNamedType;

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
    description: Maybe<string>;
    serialize: GraphQLScalarSerializer<any>;
    parseValue: GraphQLScalarValueParser<any>;
    parseLiteral: GraphQLScalarLiteralParser<any>;
    astNode: Maybe<ScalarTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<ScalarTypeExtensionNode>>;
    constructor(config: GraphQLScalarTypeConfig<any, any>);

    toConfig(): GraphQLScalarTypeConfig<any, any> & {
        parseValue: GraphQLScalarValueParser<any>;
        parseLiteral: GraphQLScalarLiteralParser<any>;
        extensionASTNodes: ReadonlyArray<ScalarTypeExtensionNode>;
    };

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export type GraphQLScalarSerializer<TExternal> = (value: any) => Maybe<TExternal>;
export type GraphQLScalarValueParser<TInternal> = (value: any) => Maybe<TInternal>;
export type GraphQLScalarLiteralParser<TInternal> = (
    valueNode: ValueNode,
    variables: Maybe<{ [key: string]: any }>
) => Maybe<TInternal>;

export interface GraphQLScalarTypeConfig<TInternal, TExternal> {
    name: string;
    description?: Maybe<string>;
    // Serializes an internal value to include in a response.
    serialize: GraphQLScalarSerializer<TExternal>;
    // Parses an externally provided value to use as an input.
    parseValue?: GraphQLScalarValueParser<TInternal>;
    // Parses an externally provided literal value to use as an input.
    parseLiteral?: GraphQLScalarLiteralParser<TInternal>;
    astNode?: Maybe<ScalarTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<ScalarTypeExtensionNode>>;
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
export class GraphQLObjectType<TSource = any, TContext = any, TArgs = { [key: string]: any }> {
    name: string;
    description: Maybe<string>;
    astNode: Maybe<ObjectTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<ObjectTypeExtensionNode>>;
    isTypeOf: Maybe<GraphQLIsTypeOfFn<TSource, TContext>>;

    constructor(config: GraphQLObjectTypeConfig<TSource, TContext, TArgs>);
    getFields(): GraphQLFieldMap<any, TContext, TArgs>;
    getInterfaces(): GraphQLInterfaceType[];

    toConfig(): GraphQLObjectTypeConfig<any, any> & {
        interfaces: GraphQLInterfaceType[];
        fields: GraphQLFieldConfigMap<any, any>;
        extensionASTNodes: ReadonlyArray<ObjectTypeExtensionNode>;
    };

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLObjectTypeConfig<TSource, TContext, TArgs = { [key: string]: any }> {
    name: string;
    interfaces?: Thunk<Maybe<GraphQLInterfaceType[]>>;
    fields: Thunk<GraphQLFieldConfigMap<TSource, TContext, TArgs>>;
    isTypeOf?: Maybe<GraphQLIsTypeOfFn<TSource, TContext>>;
    description?: Maybe<string>;
    astNode?: Maybe<ObjectTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<ObjectTypeExtensionNode>>;
}

export type GraphQLTypeResolver<TSource, TContext, TArgs = { [key: string]: any }> = (
    value: TSource,
    context: TContext,
    info: GraphQLResolveInfo
) => PromiseOrValue<Maybe<GraphQLObjectType<TSource, TContext, TArgs> | string>>;

export type GraphQLIsTypeOfFn<TSource, TContext> = (
    source: TSource,
    context: TContext,
    info: GraphQLResolveInfo
) => PromiseOrValue<boolean>;

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
    deprecationReason?: Maybe<string>;
    description?: Maybe<string>;
    astNode?: Maybe<FieldDefinitionNode>;
}

export type GraphQLFieldConfigArgumentMap = { [key: string]: GraphQLArgumentConfig };

export interface GraphQLArgumentConfig {
    type: GraphQLInputType;
    defaultValue?: any;
    description?: Maybe<string>;
    astNode?: Maybe<InputValueDefinitionNode>;
}

export type GraphQLFieldConfigMap<TSource, TContext, TArgs = { [key: string]: any }> = {
    [key: string]: GraphQLFieldConfig<TSource, TContext, TArgs>;
};

export interface GraphQLField<TSource, TContext, TArgs = { [key: string]: any }> {
    name: string;
    description: Maybe<string>;
    type: GraphQLOutputType;
    args: GraphQLArgument[];
    resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    isDeprecated?: boolean;
    deprecationReason?: Maybe<string>;
    astNode?: Maybe<FieldDefinitionNode>;
}

export interface GraphQLArgument {
    name: string;
    type: GraphQLInputType;
    defaultValue?: any;
    description?: Maybe<string>;
    astNode?: Maybe<InputValueDefinitionNode>;
}

export function isRequiredArgument(arg: GraphQLArgument): boolean;

export type GraphQLFieldMap<TSource, TContext, TArgs = { [key: string]: any }> = {
    [key: string]: GraphQLField<TSource, TContext, TArgs>;
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
    description: Maybe<string>;
    astNode?: Maybe<InterfaceTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<InterfaceTypeExtensionNode>>;
    resolveType: Maybe<GraphQLTypeResolver<any, any>>;

    constructor(config: GraphQLInterfaceTypeConfig<any, any>);

    getFields(): GraphQLFieldMap<any, any>;

    toConfig(): GraphQLInterfaceTypeConfig<any, any> & {
        fields: GraphQLFieldConfigMap<any, any>;
        extensionASTNodes: ReadonlyArray<InterfaceTypeExtensionNode>;
    };

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLInterfaceTypeConfig<TSource, TContext, TArgs = { [key: string]: any }> {
    name: string;
    fields: Thunk<GraphQLFieldConfigMap<TSource, TContext, TArgs>>;
    /**
     * Optionally provide a custom type resolver function. If one is not provided,
     * the default implementation will call `isTypeOf` on each implementing
     * Object type.
     */
    resolveType?: Maybe<GraphQLTypeResolver<TSource, TContext, TArgs>>;
    description?: Maybe<string>;
    astNode?: Maybe<InterfaceTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<InterfaceTypeExtensionNode>>;
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
    description: Maybe<string>;
    astNode: Maybe<UnionTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<UnionTypeExtensionNode>>;
    resolveType: Maybe<GraphQLTypeResolver<any, any>>;

    constructor(config: GraphQLUnionTypeConfig<any, any>);

    getTypes(): GraphQLObjectType[];

    toConfig(): GraphQLUnionTypeConfig<any, any> & {
        types: GraphQLObjectType[];
        extensionASTNodes: ReadonlyArray<UnionTypeExtensionNode>;
    };

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
    resolveType?: Maybe<GraphQLTypeResolver<TSource, TContext>>;
    description?: Maybe<string>;
    astNode?: Maybe<UnionTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<UnionTypeExtensionNode>>;
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
    description: Maybe<string>;
    astNode: Maybe<EnumTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<EnumTypeExtensionNode>>;

    constructor(config: GraphQLEnumTypeConfig);
    getValues(): GraphQLEnumValue[];
    getValue(name: string): Maybe<GraphQLEnumValue>;
    serialize(value: any): Maybe<string>;
    parseValue(value: any): Maybe<any>;
    parseLiteral(valueNode: ValueNode, _variables: Maybe<{ [key: string]: any }>): Maybe<any>;

    toConfig(): GraphQLEnumTypeConfig & {
        extensionASTNodes: ReadonlyArray<EnumTypeExtensionNode>;
    };

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLEnumTypeConfig {
    name: string;
    values: GraphQLEnumValueConfigMap;
    description?: Maybe<string>;
    astNode?: Maybe<EnumTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<EnumTypeExtensionNode>>;
}

export type GraphQLEnumValueConfigMap = { [key: string]: GraphQLEnumValueConfig };

export interface GraphQLEnumValueConfig {
    value?: any;
    deprecationReason?: Maybe<string>;
    description?: Maybe<string>;
    astNode?: Maybe<EnumValueDefinitionNode>;
}

export interface GraphQLEnumValue {
    name: string;
    description: Maybe<string>;
    isDeprecated?: boolean;
    deprecationReason: Maybe<string>;
    astNode?: Maybe<EnumValueDefinitionNode>;
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
    description: Maybe<string>;
    astNode: Maybe<InputObjectTypeDefinitionNode>;
    extensionASTNodes: Maybe<ReadonlyArray<InputObjectTypeExtensionNode>>;
    constructor(config: GraphQLInputObjectTypeConfig);
    getFields(): GraphQLInputFieldMap;

    toConfig(): GraphQLInputObjectTypeConfig & {
        fields: GraphQLInputFieldConfigMap;
        extensionASTNodes: ReadonlyArray<InputObjectTypeExtensionNode>;
    };

    toString(): string;
    toJSON(): string;
    inspect(): string;
}

export interface GraphQLInputObjectTypeConfig {
    name: string;
    fields: Thunk<GraphQLInputFieldConfigMap>;
    description?: Maybe<string>;
    astNode?: Maybe<InputObjectTypeDefinitionNode>;
    extensionASTNodes?: Maybe<ReadonlyArray<InputObjectTypeExtensionNode>>;
}

export interface GraphQLInputFieldConfig {
    type: GraphQLInputType;
    defaultValue?: any;
    description?: Maybe<string>;
    astNode?: Maybe<InputValueDefinitionNode>;
}

export type GraphQLInputFieldConfigMap = {
    [key: string]: GraphQLInputFieldConfig;
};

export interface GraphQLInputField {
    name: string;
    type: GraphQLInputType;
    defaultValue?: any;
    description?: Maybe<string>;
    astNode?: Maybe<InputValueDefinitionNode>;
}

export function isRequiredInputField(field: GraphQLInputField): boolean;

export type GraphQLInputFieldMap = { [key: string]: GraphQLInputField };
