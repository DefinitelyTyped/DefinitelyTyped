import type { CommonNavigationAction, PartialState } from './types';
/**
 * Base router object that can be used when writing custom routers.
 * This provides few helper methods to handle common actions such as `RESET`.
 */
declare const BaseRouter: {
    getStateForAction<State extends Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>>(state: State, action: CommonNavigationAction): State | PartialState<State> | null;
    shouldActionChangeFocus(action: CommonNavigationAction): boolean;
};
export default BaseRouter;
