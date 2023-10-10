import { DataID } from "../../../lib/util/RelayRuntimeTypes";

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

interface ConnectionConfig {
    CURSOR: string;
    EDGES: string;
    END_CURSOR: string;
    HAS_NEXT_PAGE: string;
    HAS_PREV_PAGE: string;
    NODE: string;
    PAGE_INFO: string;
    PAGE_INFO_TYPE: string;
    START_CURSOR: string;
}

declare const ConnectionInterface: {
    get(): ConnectionConfig;

    inject(newConfig: ConnectionConfig): void;
};

export default ConnectionInterface;
