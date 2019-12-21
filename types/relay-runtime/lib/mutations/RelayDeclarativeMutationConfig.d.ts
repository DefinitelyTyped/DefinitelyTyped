import { Variables } from '../util/RelayRuntimeTypes';
import { ConcreteRequest } from '../util/RelayConcreteNode';
import { SelectorStoreUpdater } from '../store/RelayStoreTypes';

export type MutationTypes = 'RANGE_ADD' | 'RANGE_DELETE' | 'NODE_DELETE';

export type RangeOperations = 'append' | 'prepend';
export type RangeBehaviorsFunction = (connectionArgs: { [name: string]: unknown }) => RangeOperations;
export interface RangeBehaviorsObject {
    [key: string]: RangeOperations;
}
export type RangeBehaviors = RangeBehaviorsFunction | RangeBehaviorsObject;

export interface RangeAddConfig {
    type: 'RANGE_ADD';
    parentName?: string;
    parentID?: string;
    connectionInfo?: ReadonlyArray<{
        key: string;
        filters?: Variables;
        rangeBehavior: string;
    }>;
    connectionName?: string;
    edgeName: string;
    rangeBehaviors?: RangeBehaviors;
}

export interface RangeDeleteConfig {
    type: 'RANGE_DELETE';
    parentName?: string;
    parentID?: string;
    connectionKeys?: ReadonlyArray<{
        key: string;
        filters?: Variables;
    }>;
    connectionName?: string;
    deletedIDFieldName: string | ReadonlyArray<string>;
    pathToConnection: ReadonlyArray<string>;
}

export interface NodeDeleteConfig {
    type: 'NODE_DELETE';
    parentName?: string;
    parentID?: string;
    connectionName?: string;
    deletedIDFieldName: string;
}

export type DeclarativeMutationConfig = RangeAddConfig | RangeDeleteConfig | NodeDeleteConfig;

export function convert(
    configs: DeclarativeMutationConfig[],
    request: ConcreteRequest,
    optimisticUpdater?: SelectorStoreUpdater,
    updater?: SelectorStoreUpdater,
): {
    optimisticUpdater: SelectorStoreUpdater;
    updater: SelectorStoreUpdater;
};
