// Type definitions for url-state 2.0
// Project: https://github.com/jessetane/url-state
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { parse } from 'qs';

interface UrlState extends Pick<URL, 'href'|'protocol'|'hostname'|'port'|'pathname'|'search'|'hash'|'host'|'origin'> {
    readonly back: boolean;
    readonly params: ReturnType<typeof parse>;

    push(href: string, replace?: boolean): void;
    replace(href: string): void;
    pop(): void;
    query(params: Record<string, string | null>, replace?: boolean): void;
}

declare class UrlState extends EventTarget {}
declare const urlState: UrlState;

export default urlState;
