export function initialize(options?: InitializeOptions): void;

export interface InitializeOptions {
    cacheName?: string;
    hitFilter?: (params: URLSearchParams) => void;
    parameterOverrides?: Record<string, string>;
}
