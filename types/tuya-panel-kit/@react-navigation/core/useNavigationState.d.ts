import type { NavigationState } from "../routers";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Selector<T> = (state: NavigationState) => T;
/**
 * Hook to get a value from the current navigation state using a selector.
 *
 * @param selector Selector function to get a value from the state.
 */
export default function useNavigationState<T>(selector: Selector<T>): T;
export {};
