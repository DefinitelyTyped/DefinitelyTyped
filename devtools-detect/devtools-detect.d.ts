// Type definitions for ajv
// Project: https://github.com/sindresorhus/devtools-detect
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DevTools = {
    open: boolean;
    orientation: "vertical" | "horizontal";
}
interface DevToolsEvent extends Event {
    detail: DevTools;
}
interface Window {
    devtools: DevTools;
    addEventListener(type: "devtoolschange", listener: (ev: DevToolsEvent) => any, useCapture?: boolean): void;
}
