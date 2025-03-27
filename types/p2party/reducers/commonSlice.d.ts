import type { State } from "../store";
export interface CommonState {
    currentRoomUrl: string;
}
export declare const setCurrentRoomUrl: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "commonState/setCurrentRoomUrl">;
export declare const commonStateSelector: (state: State) => CommonState;
declare const _default: import("redux").Reducer<CommonState>;
export default _default;
//# sourceMappingURL=commonSlice.d.ts.map