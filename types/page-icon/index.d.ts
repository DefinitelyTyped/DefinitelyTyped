/// <reference types="node" />

declare namespace PageIcon {
    interface Icon {
        source: string;
        name: string;
        data: Buffer;
        size: number;
        ext: string;
        mime: string;
    }
    interface FetchOptions {
        ext?: string | undefined;
    }
}

declare module "page-icon" {
    const mod: (url: string, opts?: PageIcon.FetchOptions) => Promise<PageIcon.Icon>;
    export = mod;
}
