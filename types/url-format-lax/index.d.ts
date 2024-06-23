export interface UrlObject {
    host?: string;
    hostname?: string;
    port?: string | number;
    [other: string]: any;
}

export default function urlFormat(url: UrlObject): string;
