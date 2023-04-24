// TODO: move this into relay-runtime
import { KeyType, KeyTypeData } from 'react-relay/relay-hooks/helpers';

/**
 * Utility function for testing Relay Resolvers. Pass the resolver function and
 * the data that will be returned from `readFragment` and it will return the
 * value that the resolver would derive.
 *
 * *Note:* Relay fragment data includes a special `$fragmentType` key which is
 * impossible for non-Relay code to construct. In tests you can work around
 * this by passing `null` with a Flow suppression:
 *
 * ```
 * const fragmentData = {
 *   // Other fields here...
 *   $fragmentType: (null: any)
 * };
 *
 * const actual = testResolver(resolverFunc, fragmentData);
 * expect(actual).toEqual(expectedValue)
 * ```
 */
export function testResolver<TKey extends KeyType, Ret>(
    resolver: (arg: TKey) => Ret,
    fragmentData: Omit<KeyTypeData<TKey>, ' $fragmentSpreads' | ' $fragmentType'>,
): Ret;
