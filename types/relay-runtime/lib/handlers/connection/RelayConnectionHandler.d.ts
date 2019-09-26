import { DataID, Variables } from '../../../lib/util/RelayRuntimeTypes';
import {
    RecordSourceProxy,
    RecordProxy,
    ReadOnlyRecordProxy,
    HandleFieldPayload,
} from '../../../lib/store/RelayStoreTypes';

export interface ConnectionMetadata {
    path: ReadonlyArray<string> | null | undefined;
    direction: string | null | undefined; // 'forward' | 'backward' | 'bidirectional' | null | undefined;
    cursor: string | null | undefined;
    count: string | null | undefined;
}

export class RelayDefaultHandlerProvider {
    buildConnectionEdge(
        store: RecordSourceProxy,
        connection: RecordProxy,
        edge: RecordProxy | null | undefined,
    ): RecordProxy | null | undefined;

    createEdge(store: RecordSourceProxy, record: RecordProxy, node: RecordProxy, edgeType: string): RecordProxy;

    deleteNode(record: RecordProxy, nodeID: DataID): void;

    getConnection(record: ReadOnlyRecordProxy, key: string, filters?: Variables | null): RecordProxy | null | undefined;

    insertEdgeAfter(record: RecordProxy, newEdge: RecordProxy, cursor?: string | null): void;

    insertEdgeBefore(record: RecordProxy, newEdge: RecordProxy, cursor?: string | null): void;

    update(store: RecordSourceProxy, payload: HandleFieldPayload): void;
}
