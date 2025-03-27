import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, RTCDisconnectFromChannelLabelParams } from "./interfaces";
export interface RTCDisconnectFromChannelLabelParamsExtension extends RTCDisconnectFromChannelLabelParams {
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectFromChannelLabelQuery: BaseQueryFn<RTCDisconnectFromChannelLabelParamsExtension, void, unknown>;
export default webrtcDisconnectFromChannelLabelQuery;
//# sourceMappingURL=disconnectFromChannelLabelQuery.d.ts.map