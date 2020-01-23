// Type definitions for box-node-sdk 1.30
// Project: https://github.com/box/box-node-sdk#readme
// Definitions by: theodore-koch <https://github.com/theodore-koch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SearchResults {
    total_count: number;
    limit?: number;
    offset?: number;
    order?: {
        by: string;
        direction: string;
    };
    entries: Array<File | Folder | WebLink>;
}

export interface WebLink {
    type: 'web_link';
    id: string;
    sequence_id: string;
    etag: string;
    sha1: string;
    name: string;
    url: string;
    shared_link: SharedLink | null;
    path_collection: PathCollection;
}

export interface SharedLink {
    access: 'open' | 'company' | 'collaborators';
    download_count: number;
    download_url: string;
    effective_access: 'open' | 'company' | 'collaborators';
    effective_permission: 'can_download' | 'can_preview';
    is_password_enabled: boolean;
    permissions: {
        can_download: boolean;
        can_preview: boolean;
    };
    preview_count: number;
    unshared_at: string;
    url: string;
    vanity_url: string;
}

export interface PathCollection {
    total_count: number;
    entries: Path[];
}

export interface Folder {
    type: 'folder';
    id: string;
    sequence_id: string;
    etag: string;
    sha1: string;
    name: string;
    size: number;
    description: string;
    path_collection: PathCollection;
}

export interface File {
    type: 'file';
    id: string;
    file_version: {
        type: string;
        id: string;
        sha1: string;
    } | null;
    sequence_id: string;
    etag: string;
    sha1: string;
    name: string;
    description: string;
    size: number;
    path_collection: PathCollection;
    created_at: string | null;
    modified_at: string;
    trashed_at: string | null;
    purged_at: string | null;
    content_created_at: string;
    content_modified_at: string;
    created_by: {
        type: 'user';
        id: string;
        name: string;
        login: string;
    };
    modified_by: {
        type: 'user';
        id: string;
        name: string;
        login: string;
    };
    owned_by: {
        type: 'user';
        id: string;
        name: string;
        login: string;
    };
    shared_link: string | null;
    parent: {
        type: 'folder';
        id: string;
        sequence_id: string;
        etag: string;
        name: string;
    } | null;
    item_status: string;
}

export interface Path {
    type: 'folder';
    id: string;
    sequence_id: string | null;
    etag: string | null;
    name: string;
}
