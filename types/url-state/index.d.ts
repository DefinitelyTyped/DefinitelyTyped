import { parse } from "qs";

interface ReplaceHref {
    pathname?: string;
    query?: string;
    params?: string;
    hash?: string;
}

interface PushHref extends ReplaceHref {
    replace?: boolean;
}

interface UrlState
    extends Pick<URL, "href" | "protocol" | "hostname" | "port" | "pathname" | "search" | "hash" | "host" | "origin">
{
    readonly back: boolean;
    readonly params: ReturnType<typeof parse>;

    push(href: string | PushHref, replace?: boolean): void;
    replace(href: string | ReplaceHref): void;
    pop(): void;
    query(params: Record<string, string | null>, replace?: boolean): void;
}

declare class UrlState extends EventTarget {}
declare const urlState: UrlState;

export default urlState;
