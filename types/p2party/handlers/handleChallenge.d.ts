import type { MiddlewareAPI, Dispatch, UnknownAction } from "@reduxjs/toolkit";
import type { KeyPair } from "../reducers/keyPairSlice";
declare const handleChallenge: (keyPair: KeyPair, peerId: string, challenge: string, store: MiddlewareAPI<Dispatch<UnknownAction>, any>) => Promise<void>;
export default handleChallenge;
//# sourceMappingURL=handleChallenge.d.ts.map