//

interface VaporStoreOptions {
    bucket?: string | undefined;
    cancelToken?: string | undefined;
    contentType?: string | undefined;
    data?: any;
    expires?: string | undefined;
    visibility?: string | undefined;
    baseURL?: string | undefined;
    headers?: any;
    options?: any;
    progress?: (value: number) => void | undefined;
}

declare class Vapor {
    store(file: File, options?: VaporStoreOptions): Promise<any>;
    withBaseAssetUrl(url?: string): void;
    asset(path: string): string;
}

declare const VaporInstance: Vapor;
export = VaporInstance;
