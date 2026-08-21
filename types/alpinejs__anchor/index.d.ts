import type { PluginCallback } from "alpinejs";

declare const anchorPlugin: PluginCallback;

export default anchorPlugin;

declare module "alpinejs" {
    interface Magics<T> {
        $anchor: { x: number; y: number };
    }
}
