import { ReaderFragment } from '../util/ReaderNode';
import {
    SingularReaderSelector,
    PluralReaderSelector,
    ReaderSelector,
    RequestDescriptor,
    NormalizationSelector,
} from './RelayStoreTypes';
import { DataID, Variables } from '../util/RelayRuntimeTypes';
import { NormalizationSelectableNode } from '../util/NormalizationNode';

/**
 * Given the result `item` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment for that item.
 *
 * Example:
 *
 * Given two fragments as follows:
 *
 * ```
 * fragment Parent on User {
 *   id
 *   ...Child
 * }
 * fragment Child on User {
 *   name
 * }
 * ```
 *
 * And given some object `parent` that is the results of `Parent` for id "4",
 * the results of `Child` can be accessed by first getting a selector and then
 * using that selector to `lookup()` the results against the environment:
 *
 * ```
 * const childSelector = getSingularSelector(queryVariables, Child, parent);
 * const childData = environment.lookup(childSelector).data;
 * ```
 */
export function getSingularSelector(fragment: ReaderFragment, item: unknown): SingularReaderSelector;

/**
 * Given the result `items` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment on those
 * items. This is similar to `getSingularSelector` but for "plural" fragments that
 * expect an array of results and therefore return an array of selectors.
 */
export function getPluralSelector(fragment: ReaderFragment, items: unknown[]): PluralReaderSelector;

export function getSelector(fragment: ReaderFragment, item: unknown | unknown[]): ReaderSelector;

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the selectors for those fragments from the results.
 *
 * The canonical use-case for this function is ReactRelayFragmentContainer, which
 * uses this function to convert (props, fragments) into selectors so that it
 * can read the results to pass to the inner component.
 */
export function getSelectorsFromObject(
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: any },
): { [key: string]: ReaderSelector };

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts a mapping of keys -> id(s) of the results.
 *
 * Similar to `getSelectorsFromObject()`, this function can be useful in
 * determining the "identity" of the props passed to a component.
 */
export function getDataIDsFromObject(
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: any },
): { [key: string]: DataID | DataID[] };

export function getDataIDsFromFragment(fragment: ReaderFragment, item: unknown | unknown[]): DataID | DataID[];

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the merged variables that would be in scope for those
 * fragments/results.
 *
 * This can be useful in determing what varaibles were used to fetch the data
 * for a Relay container, for example.
 */
export function getVariablesFromObject(
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: any },
): Variables;

export function getVariablesFromFragment(fragment: ReaderFragment, item: unknown | unknown[]): Variables;

export function getVariablesFromSingularFragment(fragment: ReaderFragment, item: unknown): Variables;

export function getVariablesFromPluralFragment(fragment: ReaderFragment, items: unknown[]): Variables;

/**
 * Determine if two selectors are equal (represent the same selection). Note
 * that this function returns `false` when the two queries/fragments are
 * different objects, even if they select the same fields.
 */
export function areEqualSelectors(thisSelector: SingularReaderSelector, thatSelector: SingularReaderSelector): boolean;

export function createReaderSelector(
    fragment: ReaderFragment,
    dataID: DataID,
    variables: Variables,
    request: RequestDescriptor,
): SingularReaderSelector;

export function createNormalizationSelector(
    node: NormalizationSelectableNode,
    dataID: DataID,
    variables: Variables,
): NormalizationSelector;
