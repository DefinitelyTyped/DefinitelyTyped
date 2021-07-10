export function initialize(options?: InitializeOptions): void;

export interface InitializeOptions {
    cacheName?: string | undefined;
    parameterOverrides?: Record<string, string> | undefined;
    hitFilter?: ((params: URLSearchParams) => void) | undefined;
}
