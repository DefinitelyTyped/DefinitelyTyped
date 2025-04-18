import type { State } from "../store";
export interface KeyPair {
    peerId: string;
    challengeId: string;
    publicKey: string;
    secretKey: string;
    challenge: string;
    signature: string;
}
export interface SetKeyPair {
    publicKey: string;
    secretKey: string;
}
export interface SetPeerData {
    peerId: string;
    challenge: string;
    signature: string;
}
export interface SetChallengeId {
    challengeId: string;
    username?: string;
    credential?: string;
}
export interface SetReconnectData extends SetPeerData {
    challengeId: string;
    username?: string;
    credential?: string;
}
export declare const setKeyPair: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetKeyPair, "keyPair/setKeyPair">, setReconnectData: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetReconnectData, "keyPair/setReconnectData">, setPeerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetPeerData, "keyPair/setPeerData">, setChallengeId: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetChallengeId, "keyPair/setChallengeId">, resetIdentity: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"keyPair/resetIdentity">;
export declare const keyPairSelector: (state: State) => KeyPair;
declare const _default: import("redux").Reducer<KeyPair>;
export default _default;
//# sourceMappingURL=keyPairSlice.d.ts.map