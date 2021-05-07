export type MediaType =
    | 'audio'
    | 'backup'
    | 'book'
    | 'compressed'
    | 'data'
    | 'development'
    | 'diskimage'
    | 'document'
    | 'encoded'
    | 'executable'
    | 'flash'
    | 'font'
    | 'image'
    | 'settings'
    | 'spreadsheet'
    | 'text'
    | 'unknown'
    | 'video'
    | 'web';

export type PreviewSize =
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | 'XXXL'
    | number
    | string;

export type ResourceType = 'dir' | 'file';

export type Sort =
    | 'name'
    | 'path'
    | 'created'
    | 'modified'
    | 'size'
    | '-name'
    | '-path'
    | '-created'
    | '-modified'
    | '-size';

export interface Link {
    href: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    templated: boolean;
}

export interface Disk {
    trash_size: number;
    total_space: number;
    used_space: number;
    system_folders: SystemFolders;
}

interface SystemFolders {
    downloads: string;
    applications: string;
}

export interface Resource {
    public_key?: string;
    public_url?: string;
    _embedded?: boolean;
    preview?: string;
    name: string;
    custom_properties: Record<string, string>;
    created: string;
    modified: string;
    path: string;
    origin_path?: string;
    md5: string;
    type: ResourceType;
    mime_type: string;
    size: number;
    file?: string;
}

interface FilesResourceList {
    items: Resource[];
    limit: number;
    offset: number;
}

export interface Operation {
    status: 'success' | 'failed' | 'in-progress';
}

interface LastUploadedResourceList {
    items: Resource[];
    limit: number;
}

interface ApiResponse<T> {
    data: T;
    status: number;
}

interface GetProps {
    fields?: string;
    sort?: Sort;
    limit?: number;
    offset?: number;
    preview_size?: PreviewSize;
    preview_crop?: boolean;
}

interface ListProps {
    limit?: number;
    media_type?: MediaType;
    offset?: number;
    preview_size?: PreviewSize;
    preview_crop?: boolean;
}

interface RecentProps {
    limit?: number;
    media_type?: MediaType;
    preview_size?: PreviewSize;
    preview_crop?: boolean;
}

export namespace download {
    function link(token: string, path: string): Promise<Link>;
}

export namespace meta {
    function get(token: string, path: string, props?: GetProps): Promise<Resource>;

    function add(token: string, path: string, props?: Record<string, string | number>): Promise<Resource>;
}

export namespace upload {
    function link(token: string, path: string, overwrite?: boolean): Promise<Link>;

    function remoteFile(token: string, url: string, path: string): Promise<Link>;
}

export namespace resources {
    function copy(token: string, from: string, to: string, overwrite?: boolean, fields?: string): Promise<ApiResponse<Link>>;

    function create(token: string, path: string): Promise<Link>;

    function move(token: string, from: string, to: string, overwrite?: boolean, fields?: string): Promise<ApiResponse<Link>>;

    function remove(token: string, path: string, permanently?: boolean): Promise<ApiResponse<Link>>;
}

export function info(token: string): Promise<Disk>;

export function list(token: string, props: ListProps): Promise<FilesResourceList>;

export function operations(token: string, id: string): Promise<Operation>;

export function recent(token: string, options: RecentProps): Promise<LastUploadedResourceList>;

export {};
