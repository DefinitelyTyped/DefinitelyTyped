import {
  getNamedType,
  GraphQLScalarType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLNamedType,
} from '../type/definition';
import { GraphQLSchema } from '../type/schema';

export const BreakingChangeType: {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND';
  FIELD_REMOVED: 'FIELD_REMOVED';
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND';
  TYPE_REMOVED: 'TYPE_REMOVED';
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION';
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM';
};

export type BreakingChangeKey =
  | 'FIELD_CHANGED_KIND'
  | 'FIELD_REMOVED'
  | 'TYPE_CHANGED_KIND'
  | 'TYPE_REMOVED'
  | 'TYPE_REMOVED_FROM_UNION'
  | 'VALUE_REMOVED_FROM_ENUM';

export interface BreakingChange {
  type: BreakingChangeKey;
  description: string;
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
export function findBreakingChanges(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
export function findRemovedTypes(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
export function findTypesThatChangedKind(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to the fields on a type. This includes if
 * a field has been removed from a type or if a field has changed type.
 */
export function findFieldsThatChangedType(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
export function findTypesRemovedFromUnions(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
export function findValuesRemovedFromEnums(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): BreakingChange[];
