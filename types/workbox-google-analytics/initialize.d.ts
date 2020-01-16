export function initialize(options?: InitializeOptions): void;

export interface InitializeOptions {
    cacheName?: string;
    parameterOverrides?: Record<string, string>;
    hitFilter?: (params: URLSearchParams) => void;
}
