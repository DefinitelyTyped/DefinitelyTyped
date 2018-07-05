import {
    getNamedType,
    GraphQLScalarType,
    GraphQLEnumType,
    GraphQLInputObjectType,
    GraphQLInterfaceType,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLNamedType,
} from "../type/definition";
import { GraphQLDirective } from "../type/directives";
import { GraphQLSchema } from "../type/schema";
import { DirectiveLocationEnum } from "../language/directiveLocation";

export const BreakingChangeType : _BreakingChangeType;

// @internal
type _BreakingChangeType = {
    FIELD_CHANGED_KIND: "FIELD_CHANGED_KIND";
    FIELD_REMOVED: "FIELD_REMOVED";
    TYPE_CHANGED_KIND: "TYPE_CHANGED_KIND";
    TYPE_REMOVED: "TYPE_REMOVED";
    TYPE_REMOVED_FROM_UNION: "TYPE_REMOVED_FROM_UNION";
    VALUE_REMOVED_FROM_ENUM: "VALUE_REMOVED_FROM_ENUM";
    ARG_REMOVED: "ARG_REMOVED";
    ARG_CHANGED_KIND: "ARG_CHANGED_KIND";
    NON_NULL_ARG_ADDED: "NON_NULL_ARG_ADDED";
    NON_NULL_INPUT_FIELD_ADDED: "NON_NULL_INPUT_FIELD_ADDED";
    INTERFACE_REMOVED_FROM_OBJECT: "INTERFACE_REMOVED_FROM_OBJECT";
    DIRECTIVE_REMOVED: "DIRECTIVE_REMOVED";
    DIRECTIVE_ARG_REMOVED: "DIRECTIVE_ARG_REMOVED";
    DIRECTIVE_LOCATION_REMOVED: "DIRECTIVE_LOCATION_REMOVED";
    NON_NULL_DIRECTIVE_ARG_ADDED: "NON_NULL_DIRECTIVE_ARG_ADDED";
};

export const DangerousChangeType: _DangerousChangeType;

// @internal
type _DangerousChangeType = {
    ARG_DEFAULT_VALUE_CHANGE: "ARG_DEFAULT_VALUE_CHANGE";
    VALUE_ADDED_TO_ENUM: "VALUE_ADDED_TO_ENUM";
    INTERFACE_ADDED_TO_OBJECT: "INTERFACE_ADDED_TO_OBJECT";
    TYPE_ADDED_TO_UNION: "TYPE_ADDED_TO_UNION";
    NULLABLE_INPUT_FIELD_ADDED: "NULLABLE_INPUT_FIELD_ADDED";
    NULLABLE_ARG_ADDED: "NULLABLE_ARG_ADDED";
};

export interface BreakingChange {
    type: keyof _BreakingChangeType;
    description: string;
}

export interface DangerousChange {
    type: keyof _DangerousChangeType;
    description: string;
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
export function findBreakingChanges(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */
export function findDangerousChanges(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<DangerousChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
export function findRemovedTypes(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
export function findTypesThatChangedKind(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */
export function findArgChanges(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): {
    breakingChanges: Array<BreakingChange>;
    dangerousChanges: Array<DangerousChange>;
};

export function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): Array<BreakingChange>;

export function findFieldsThatChangedTypeOnInputObjectTypes(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): {
    breakingChanges: Array<BreakingChange>;
    dangerousChanges: Array<DangerousChange>;
};

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
export function findTypesRemovedFromUnions(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */
export function findTypesAddedToUnions(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<DangerousChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
export function findValuesRemovedFromEnums(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */
export function findValuesAddedToEnums(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<DangerousChange>;

export function findInterfacesRemovedFromObjectTypes(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): Array<BreakingChange>;

export function findInterfacesAddedToObjectTypes(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): Array<DangerousChange>;

export function findRemovedDirectives(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

export function findRemovedDirectiveArgs(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

export function findAddedNonNullDirectiveArgs(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): Array<BreakingChange>;

export function findRemovedLocationsForDirective(
    oldDirective: GraphQLDirective,
    newDirective: GraphQLDirective
): Array<DirectiveLocationEnum>;

export function findRemovedDirectiveLocations(
    oldSchema: GraphQLSchema,
    newSchema: GraphQLSchema
): Array<BreakingChange>;
