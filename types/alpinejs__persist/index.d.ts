import type { InterceptorObject, PluginCallback } from "alpinejs";

declare const persistPlugin: PluginCallback;

export default persistPlugin;

interface SimpleStorage {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
}

interface persistInterceptor<T> extends InterceptorObject<T> {
    as(name: string): persistInterceptor<T>;
    using(storage: SimpleStorage): persistInterceptor<T>;
}

interface $persist {
    <T>(value: T): persistInterceptor<T>;
}

type persist = <T>(key: string, { get, set }: { get(): T; set(val: T): void }, storage: SimpleStorage) => void;

declare module "alpinejs" {
    interface Alpine {
        $persist: $persist;
        persist: persist;
    }
    interface Magics<T> {
        $persist: $persist;
    }
}
