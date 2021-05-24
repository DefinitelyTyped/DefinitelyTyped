export interface OrderDownloadItem {
    id: string;
    name: string;
    access_link: string;
    ext: string;
    size: string;
    size_in_bytes: number;
    remaining_downloads: number | null;
    access_expires: number | null;
    is_unlimited: boolean;
    is_access_revoked: boolean;
}
