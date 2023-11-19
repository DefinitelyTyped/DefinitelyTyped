// Type definitions for @alpinejs/anchor 3.13
// Project: https://github.com/alpinejs/alpine
// Definitions by: Eric Kwoka <https://github.com/ekwoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

import type { PluginCallback } from 'alpinejs';

declare const anchorPlugin: PluginCallback;

export default anchorPlugin;

declare module 'alpinejs' {
    interface Magics<T> {
        $anchor: { x: number; y: number };
    }
}
