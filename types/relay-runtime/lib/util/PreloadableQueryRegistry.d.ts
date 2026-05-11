import type { ConcreteRequest } from "../util/RelayConcreteNode";
import type { Disposable } from "../util/RelayRuntimeTypes";

declare class PreloadableQueryRegistry {
    set(key: string, value: ConcreteRequest): void;
    get(key: string): ConcreteRequest | null | undefined;
    onLoad(key: string, callback: (concreteRequest: ConcreteRequest) => void): Disposable;
    clear(): void;
}

declare const preloadableQueryRegistry: PreloadableQueryRegistry;
export default preloadableQueryRegistry;
