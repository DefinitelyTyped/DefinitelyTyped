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
    moderate?: boolean | undefined;
    retries?: number | undefined;
    iterations?: number | undefined;
}): Promise<DuckDuckGoImage[]>;

export function image_search_generator(params: {
    query: string;
    moderate?: boolean | undefined;
    retries?: number | undefined;
    iterations?: number | undefined;
}): Promise<DuckDuckGoImage[]>;
