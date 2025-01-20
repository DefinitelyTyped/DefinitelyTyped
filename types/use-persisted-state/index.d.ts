import { Dispatch, SetStateAction } from "react";

declare function createPersistedState<S>(key: string, provider?: Pick<Storage, "getItem" | "setItem">): {
    (initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    (): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
};

export as namespace createPersistedState;
export default createPersistedState;
