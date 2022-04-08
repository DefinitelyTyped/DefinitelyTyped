export interface FetchAxiosConfig {
    backupStore: Map<string, string>;
    responseType: string;
    timeout: number;
}

export type FetchConfig = {
    client?: {get(url: string, params?: Partial<FetchAxiosConfig>): Promise<{data: string}>};
    url: string;
} & Partial<FetchAxiosConfig>;

export function fetch(config: FetchConfig): Promise<string>;
