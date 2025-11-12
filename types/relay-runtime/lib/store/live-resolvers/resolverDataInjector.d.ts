import type { GraphQLTaggedNode } from "../../query/RelayModernGraphQLTag";
import type { FragmentType } from "../RelayStoreTypes";

/**
 * This a higher order function that returns a relay resolver that can read the data for
 * the fragment`.
 *
 * - fragment: contains fragment Reader AST with resolver's data dependencies.
 * - resolverFn: original resolver function that expects a data from the fragment
 * - (optional) fieldName: individual field that needs to be read out of the fragment.
 *
 * This will not call the `resolverFn` if the fragment data for it is null/undefined.
 * The compiler generates calls to this function, ensuring the correct set of arguments.
 */
export function resolverDataInjector(
    fragment: GraphQLTaggedNode,
    _resolverFn: unknown,
    fieldName?: string,
    isRequiredField?: boolean,
): (fragmentKey: FragmentType, args: unknown) => unknown;
