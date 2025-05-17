export interface fetchedMeta<T extends string = string> {
    url: T;
    title?: string;
    description?: string;
    icon?: string;
    image?: string;
}

export default function fetchMeta<T extends string = string>(
    site: T,
    requestInit?: RequestInit,
): Promise<fetchedMeta<T>>;
