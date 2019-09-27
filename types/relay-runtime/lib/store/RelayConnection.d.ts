import { Variables } from '../util/RelayRuntimeTypes';
import { RequestDescriptor, TypedSnapshot, RecordMap } from './RelayStoreTypes';
import { ReaderLinkedField } from '../util/ReaderNode';

export type ConnectionID = string;

export interface ConnectionRecord {
    __id: ConnectionID;
    __typename: string;
    events: ConnectionInternalEvent[];
}

export interface ConnectionMap {
    [key: string]: ConnectionRecord;
}

export type GetConnectionEvents = (connectionID: ConnectionID) => ReadonlyArray<ConnectionInternalEvent>;

export type ConnectionInternalEvent =
    | {
          kind: string;
          args: Variables;
          connectionID: ConnectionID;
          edgeIDs: ReadonlyArray<string>;
          pageInfo: PageInfo;
          request: RequestDescriptor;
      }
    | {
          kind: string;
          args: Variables;
          connectionID: ConnectionID;
          edgeID: string;
          request: RequestDescriptor;
      };

export type ConnectionEvent<TEdge> =
    | {
          kind: 'fetch';
          args: Variables;
          edges: ReadonlyArray<TEdge>;
          pageInfo: PageInfo;
      }
    | { kind: 'update'; edgeData: { [key: string]: TEdge } }
    | { kind: 'insert'; args: Variables; edge: TEdge };

export interface ConnectionResolver<TEdge, TState> {
    initialize(): TState;
    reduce(state: TState, event: ConnectionEvent<TEdge>): TState;
}

export interface ConnectionReferenceObject<TEdge> {
    __connection: ConnectionReference<TEdge>;
}

export interface ConnectionReference<TEdge> {
    variables: Variables;
    edgesField: ReaderLinkedField;
    id: ConnectionID;
    label: string;
}

export interface ConnectionSnapshot<TEdge, TState> {
    edgeSnapshots: { [key: string]: TypedSnapshot<TEdge> };
    id: ConnectionID;
    reference: ConnectionReference<TEdge>;
    seenRecords: RecordMap;
    state: TState;
}

export interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    startCursor: string;
}

export const CONNECTION_KEY: string;
export const CONNECTION_TYPENAME: string;

export function createConnectionID(parentID: string, label: string): ConnectionID;

export function createConnectionRecord(connectionID: ConnectionID): ConnectionRecord;
