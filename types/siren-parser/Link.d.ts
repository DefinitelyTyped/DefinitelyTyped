export default function(link: object): Link;

export interface Link {
    rel: string[];
    class?: string[];
    href: string;
    title?: string;
    type?: string;

    hasClass(cls: string | RegExp): boolean;
}
