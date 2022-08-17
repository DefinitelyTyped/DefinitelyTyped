import type { Handler } from '../../store/RelayStoreTypes';

export const MutationHandlers: {
    DeleteRecordHandler: Handler;
    DeleteEdgeHandler: Handler;
    AppendEdgeHandler: Handler;
    PrependEdgeHandler: Handler;
    AppendNodeHandler: Handler;
    PrependNodeHandler: Handler;
};
