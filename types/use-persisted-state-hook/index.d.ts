import { Dispatch, SetStateAction } from "react";
export as namespace usePersistedStateHook;
export = usePersistedState;
declare function usePersistedState<T>(key: string, state: T): [T, Dispatch<SetStateAction<T>>];
