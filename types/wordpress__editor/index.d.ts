import { dispatch, select, StoreDescriptor } from "@wordpress/data";

export { storeConfig, transformStyles } from "@wordpress/block-editor";

declare module "@wordpress/data" {
    function dispatch(key: "core/editor"): typeof import("./store/actions");
    function select(key: "core/editor"): typeof import("./store/selectors");
}

export interface EditorStoreDescriptor extends StoreDescriptor {
    name: "core/editor";
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@wordpress/editor" {
    const store: EditorStoreDescriptor;
}

export * from "./components";
export * from "./utils";
