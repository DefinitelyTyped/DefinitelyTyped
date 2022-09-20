interface Link {
    rel: string[];
    class?: string[] | undefined;
    href: string;
    title?: string | undefined;
    type?: string | undefined;

    hasClass(cls: string | RegExp): boolean;
}

declare var Link: {
    prototype: Link;
    new (link: object): Link;
    (link: object): Link;
};

export default Link;
