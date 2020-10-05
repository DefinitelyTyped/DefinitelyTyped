// Type definitions for thepiratebay 1.4
// Project: http://github.com/t3chnoboy/thepiratebay
// Definitions by: Jack Sorrell <https://github.com/jsorrell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function search(query?: string, options?: SearchOptions): Promise<TorrentSearchResult[]>;
export function getTorrent(id: string | number | { link: string; [propName: string]: any; }): Promise<TorrentDetails>;
export function getComments(id: string | number): Promise<Comment[]>;
export function topTorrents(category?: number): Promise<TorrentSearchResult[]>;
export function recentTorrents(): Promise<TorrentSearchResult[]>;
export function userTorrents(user: string, options?: SearchOptions): Promise<TorrentSearchResult[]>;
export function getTvShow(id: string | number): Promise<TVSeason[]>;
export function getCategories(): Promise<CategoryGroup[]>;

export interface SearchOptions {
    category?: string | number;
    filter?: { verified?: boolean };
    page?: number;
    orderBy?: string;
    sortBy?: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface CategoryGroup extends Category {
    subcategories: Category[];
}

export interface Torrent {
    id: string;
    name: string;
    size: string;
    link: string;
    seeders: string;
    leechers: string;
    uploadDate: string;
    magnetLink: string;
    uploader: string;
    uploaderLink: string;
}

export interface TorrentDetails extends Torrent {
    description: string;
}

export interface TorrentSearchResult extends Torrent {
    category: Category;
    subcategory: Category;
    verified: boolean;
}

export interface Comment {
    user: string;
    comment: string;
}

export interface TVTorrent {
    id: string;
    title: string;
    link: string;
}

export interface TVSeason {
    title: string;
    torrents: TVTorrent[];
}
