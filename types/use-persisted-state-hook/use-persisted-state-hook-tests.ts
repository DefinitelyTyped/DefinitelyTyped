import { Dispatch, SetStateAction } from "react";
import usePersistedState = require("use-persisted-state-hook");

const initialState = {
    drawerOpen: true,
};
type HookReturnType = [state: typeof initialState, setState: Dispatch<SetStateAction<typeof initialState>>];

usePersistedState("app-state", initialState);

/**
 * The return array is of correct type
 */
const [state, setState]: HookReturnType = usePersistedState("app-state", initialState);

/**
 * Both arguments must be provied
 */
// @ts-expect-error
usePersistedState();
// @ts-expect-error
usePersistedState("app-state");

/**
 * The `key` argument must be of type `string`.
 */
// @ts-expect-error
usePersistedState(1);
// @ts-expect-error
usePersistedState({});
// @ts-expect-error
usePersistedState(Symbol.iterator, {});
// @ts-expect-error
usePersistedState(undefined);

usePersistedState("app-state", {});
