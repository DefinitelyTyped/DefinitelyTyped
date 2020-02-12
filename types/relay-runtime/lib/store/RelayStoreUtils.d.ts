import { NormalizationArgument, NormalizationHandle, NormalizationField } from '../util/NormalizationNode';
import { ReaderArgument, ReaderField } from '../util/ReaderNode';
import { Variables } from '../util/RelayRuntimeTypes';

export interface Arguments {
    [key: string]: any;
}

/**
 * Returns the values of field/fragment arguments as an object keyed by argument
 * names. Guaranteed to return a result with stable ordered nested values.
 */
export function getArgumentValues(
    args: ReadonlyArray<NormalizationArgument | ReaderArgument>,
    variables: Variables,
): Arguments;

/**
 * Given a handle field and variable values, returns a key that can be used to
 * uniquely identify the combination of the handle name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
export function getHandleStorageKey(handleField: NormalizationHandle, variables: Variables): string;

/**
 * Given a field and variable values, returns a key that can be used to
 * uniquely identify the combination of the field name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
export function getStorageKey(
    field: NormalizationField | NormalizationHandle | ReaderField,
    variables: Variables,
): string;

/**
 * Given a `name` (eg. "foo") and an object representing argument values
 * (eg. `{orberBy: "name", first: 10}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 *
 * This differs from getStorageKey which requires a ConcreteNode where arguments
 * are assumed to already be sorted into a stable order.
 */
export function getStableStorageKey(name: string, args: Arguments): string;

/**
 * Given a name and argument values, format a storage key.
 *
 * Arguments and the values within them are expected to be ordered in a stable
 * alphabetical ordering.
 */
export function formatStorageKey(name: string, argValues: Arguments): string;

/**
 * Given Variables and a variable name, return a variable value with
 * all values in a stable order.
 */
export function getStableVariableValue(name: string, variables: Variables): unknown;

export function getModuleComponentKey(documentName: string): string;
export function getModuleOperationKey(documentName: string): string;

export const FRAGMENTS_KEY: string;
export const FRAGMENT_OWNER_KEY: string;
export const FRAGMENT_PROP_NAME_KEY: string;
export const MODULE_COMPONENT_KEY: string; // alias returned by Reader
export const ID_KEY: string;
export const REF_KEY: string;
export const REFS_KEY: string;
export const ROOT_ID: string;
export const ROOT_TYPE: string;
export const TYPENAME_KEY: string;
