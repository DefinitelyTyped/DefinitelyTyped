export interface ReduxRouterAction {
    type: string,
    payload: any
}

export function routerDidChange(state: any): ReduxRouterAction;
export function initRoutes(routes: any): ReduxRouterAction;
export function replaceRoutes(routes: any): ReduxRouterAction;
export function historyAPI(method: any): (...args: Object[]) => ReduxRouterAction;
export const pushState: (...args: Object[]) => ReduxRouterAction;
export const push: (...args: Object[]) => ReduxRouterAction;
export const replaceState: (...args: Object[]) => ReduxRouterAction;
export const replace: (...args: Object[]) => ReduxRouterAction;
export const setState: (...args: Object[]) => ReduxRouterAction;
export const go: (...args: Object[]) => ReduxRouterAction;
export const goBack: (...args: Object[]) => ReduxRouterAction;
export const goForward: (...args: Object[]) => ReduxRouterAction;
