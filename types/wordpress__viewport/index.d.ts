import { dispatch, select, StoreDescriptor } from "@wordpress/data";

declare module "@wordpress/data" {
    function dispatch(key: "core/viewport"): typeof import("./store/actions");
    function select(key: "core/viewport"): typeof import("./store/selectors");
}

export { default as ifViewportMatches } from "./if-viewport-matches";
export { default as withViewportMatch } from "./with-viewport-match";

export interface ViewportStoreDescriptor extends StoreDescriptor {
    name: "core/viewport";
}

export const store: ViewportStoreDescriptor;
