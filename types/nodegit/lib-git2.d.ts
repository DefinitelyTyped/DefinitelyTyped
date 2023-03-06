export namespace Libgit2 {
    const enum OPT {
        GET_MWINDOW_SIZE = 0,
        SET_MWINDOW_SIZE = 1,
        GET_MWINDOW_MAPPED_LIMIT = 2,
        SET_MWINDOW_MAPPED_LIMIT = 3,
        GET_SEARCH_PATH = 4,
        SET_SEARCH_PATH = 5,
        SET_CACHE_OBJECT_LIMIT = 6,
        SET_CACHE_MAX_SIZE = 7,
        ENABLE_CACHING = 8,
        GET_CACHED_MEMORY = 9,
        GET_TEMPLATE_PATH = 10,
        SET_TEMPLATE_PATH = 11,
        SET_SSL_CERT_LOCATIONS = 12,
    }
}

export class Libgit2 {
    static features(): number;
    static init(): number;
    static opts(option: number): number;
    static shutdown(): number;
    static version(major: number, minor: number, rev: number): void;
}
