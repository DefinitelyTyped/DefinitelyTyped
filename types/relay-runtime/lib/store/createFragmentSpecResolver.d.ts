import { RelayContext, FragmentMap, Props, FragmentSpecResolver } from './RelayStoreTypes';

export function createFragmentSpecResolver(
    context: RelayContext,
    containerName: string,
    fragments: FragmentMap,
    props: Props,
    callback?: () => void,
): FragmentSpecResolver;
