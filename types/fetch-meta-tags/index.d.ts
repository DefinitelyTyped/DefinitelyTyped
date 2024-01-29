export interface fetchedMeta {
    url: string;
    title?: string;
    description?: string;
    icon?: string;
    image?: string;
}

export default function fetchMeta(site: string): fetchedMeta;
