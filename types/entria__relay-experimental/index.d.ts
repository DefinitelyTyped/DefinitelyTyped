// Type definitions for entria__relay-experimental 6.0
// Project: https://github.com/facebook/relay
// Definitions by: Renan Machado <https://github.com/renanmav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

export { fetchQuery } from './lib/fetchQuery';
export { RelayEnvironmentProvider } from './lib/RelayEnvironmentProvider';
export { useRelayEnvironment } from './lib/useRelayEnvironment';
export { Direction, LoadMoreFn } from './lib/useLoadMoreFunction';
export { RefetchFn, Options as RefetchOptions } from './lib/useRefetchableFragmentNode';

export { FetchPolicy } from './lib/QueryResource';

export { useQuery } from './lib/useQuery';
export { useFragment } from './lib/useFragment';
export { useRefetchableFragment } from './lib/useRefetchableFragment';
export { useLegacyPaginationFragment as usePaginationFragment } from './lib/useLegacyPaginationFragment';
export { useLegacyPaginationFragment } from './lib/useLegacyPaginationFragment';
