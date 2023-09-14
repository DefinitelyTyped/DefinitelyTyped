// Type definitions for @alpinejs/persist 3.13
// Project: https://github.com/alpinejs/alpine
// Definitions by: Eric Kwoka <https://github.com/ekwoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

import type { PluginCallback } from 'alpinejs';

declare const persistPlugin: PluginCallback;

export default persistPlugin;

interface SimpleStorage {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
}

interface persistInterceptor<T> {
    as(name: string): T & persistInterceptor<T>;
    using(storage: SimpleStorage): T & persistInterceptor<T>;
}

interface $persist {
    <T>(value: T): T & persistInterceptor<T>;
}

declare module 'alpinejs' {
    interface Alpine {
        $persist: $persist;
    }
    interface Magics<T> {
        $persist: $persist;
    }
}
