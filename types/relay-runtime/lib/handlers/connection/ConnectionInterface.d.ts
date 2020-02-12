import { DataID } from '../../../lib/util/RelayRuntimeTypes';

export interface EdgeRecord extends Record<string, unknown> {
    cursor: unknown;
    node: Record<DataID, unknown>;
}

export interface PageInfo {
    endCursor: string | null | undefined;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null | undefined;
}

declare const ConnectionInterface: {
    get(): {
        CLIENT_MUTATION_ID: 'clientMutationId';
        CURSOR: 'cursor';
        EDGES_HAVE_SOURCE_FIELD: boolean;
        EDGES: 'edges';
        END_CURSOR: 'endCursor';
        HAS_NEXT_PAGE: 'hasNextPage';
        HAS_PREV_PAGE: 'hasPreviousPage';
        NODE: 'node';
        PAGE_INFO_TYPE: 'PageInfo';
        PAGE_INFO: 'pageInfo';
        START_CURSOR: 'startCursor';
    };
};

export default ConnectionInterface;
