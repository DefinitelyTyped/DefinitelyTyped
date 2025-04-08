import type { BaseQueryApi } from "@reduxjs/toolkit/query";
export declare const rtcDataChannelMessageLimit: number;
export declare const messageLen: number;
export declare const encryptedLen: number;
declare const handleWebSocketMessage: (event: MessageEvent, ws: WebSocket, api: BaseQueryApi) => Promise<void>;
export default handleWebSocketMessage;
//# sourceMappingURL=handleWebSocketMessage.d.ts.map