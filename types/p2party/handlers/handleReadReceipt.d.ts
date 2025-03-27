import type { IRTCDataChannel } from "../api/webrtc/interfaces";
import type { BaseQueryApi } from "@reduxjs/toolkit/dist/query";
import type { Room } from "../reducers/roomSlice";
export declare const handleReadReceipt: (receivedChunkHash: Uint8Array, channel: IRTCDataChannel, room: Room, api: BaseQueryApi, dataChannels: IRTCDataChannel[]) => Promise<void>;
//# sourceMappingURL=handleReadReceipt.d.ts.map