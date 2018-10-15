import {
    GraphQLScalarType,
    GraphQLObjectType,
    GraphQLInterfaceType,
    GraphQLUnionType,
    GraphQLEnumType,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
} from "./definition";
import { GraphQLField } from "./definition";

export const __Schema: GraphQLObjectType;
export const __Directive: GraphQLObjectType;
export const __DirectiveLocation: GraphQLEnumType;
export const __Type: GraphQLObjectType;
export const __Field: GraphQLObjectType;
export const __InputValue: GraphQLObjectType;
export const __EnumValue: GraphQLObjectType;

export const TypeKind: {
    SCALAR: "SCALAR";
    OBJECT: "OBJECT";
    INTERFACE: "INTERFACE";
    UNION: "UNION";
    ENUM: "ENUM";
    INPUT_OBJECT: "INPUT_OBJECT";
    LIST: "LIST";
    NON_NULL: "NON_NULL";
};

export const __TypeKind: GraphQLEnumType;

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

export const SchemaMetaFieldDef: GraphQLField<any, any>;
export const TypeMetaFieldDef: GraphQLField<any, any>;
export const TypeNameMetaFieldDef: GraphQLField<any, any>;

export const introspectionTypes: ReadonlyArray<any>;

export function isIntrospectionType(type: any): boolean;
