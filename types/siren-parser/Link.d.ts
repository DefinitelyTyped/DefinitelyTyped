export default function(link: object): Link;

export interface Link {
    rel: string[];
    class?: string[] | undefined;
    href: string;
    title?: string | undefined;
    type?: string | undefined;

    hasClass(cls: string | RegExp): boolean;
}
