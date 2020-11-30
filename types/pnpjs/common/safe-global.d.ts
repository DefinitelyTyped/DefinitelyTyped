export interface IGlobal {
    _spPageContextInfo?: {
        webAbsoluteUrl?: string;
        webServerRelativeUrl?: string;
    };
    location?: string;
    fetch(url: string, options: any): Promise<Response>;
}
export declare const safeGlobal: IGlobal;
//# sourceMappingURL=safe-global.d.ts.map