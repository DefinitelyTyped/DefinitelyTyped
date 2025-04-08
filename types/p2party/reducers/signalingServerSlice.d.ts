import type { PayloadAction } from "@reduxjs/toolkit";
import type { State } from "../store";
export interface SignalingState {
    isEstablishingConnection: boolean;
    isConnected: boolean;
    serverUrl: string;
}
export declare const signalingServerActions: import("@reduxjs/toolkit").CaseReducerActions<{
    startConnecting: (state: import("immer").WritableDraft<SignalingState>, action: PayloadAction<string | undefined>) => void;
    connectionEstablished: (state: import("immer").WritableDraft<SignalingState>) => void;
    disconnect: (state: import("immer").WritableDraft<SignalingState>) => void;
}, "signalingServer">;
export declare const signalingServerSelector: (state: State) => SignalingState;
declare const _default: import("redux").Reducer<SignalingState>;
export default _default;
//# sourceMappingURL=signalingServerSlice.d.ts.map