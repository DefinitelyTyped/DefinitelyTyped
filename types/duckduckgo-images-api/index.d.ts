// Type definitions for duckduckgo-images-api 1.0
// Project: https://github.com/KshitijMhatre/duckduckgo-images-api
// Definitions by: Bart Duisters <https://github.com/bartduisters>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DuckDuckGoImage {
    image: string;
    title: string;
    height: number;
    thumbnail: string;
    width: number;
    url: string;
    source: string;
}

export function image_search(params: {
    query: string;
    moderate?: boolean;
    retries?: number;
    iterations?: number;
}): Promise<DuckDuckGoImage[]>;

export function image_search_generator(params: {
    query: string;
    moderate?: boolean;
    retries?: number;
    iterations?: number;
}): Promise<DuckDuckGoImage[]>;
