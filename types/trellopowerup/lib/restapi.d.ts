export interface ApiOptions {
    appKey?: string;
    appName?: string;
    appAuthor?: string;
    apiOrigin?: string;
    authOrigin?: string;
    localStorage?: Storage;
    tokenStorageKey?: string;
}

export interface Api extends ApiOptions {
    init(): void;
    apiBase(): string;
    authBase(): string;
}

export interface ApiError {
    message?: string;
    name: string;
    stack: string;
}
