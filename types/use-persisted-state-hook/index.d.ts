// Type definitions for use-persisted-state-hook 1.1
// Project: https://github.com/giovannibenussi/use-persisted-state-hook
// Definitions by: Zamran Gill <https://github.com/zamgill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Dispatch, SetStateAction } from "react";
export as namespace usePersistedStateHook;
export = usePersistedState;
declare function usePersistedState<T>(key: string, state: T): [T, Dispatch<SetStateAction<T>>];
