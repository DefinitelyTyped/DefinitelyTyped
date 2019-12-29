declare module "meteor/browser-policy-common" {
    module BrowserPolicy {
        var framing: {
            disallow(): void;
            restrictToOrigin(origin: string): void;
            allowAll(): void;
        };

        var content: {
            allowEval(): void;
            allowInlineStyles(): void;
            allowInlineScripts(): void;
            allowSameOriginForAll(): void;
            allowDataUrlForAll(): void;
            allowOriginForAll(origin: string): void;
            allowImageOrigin(origin: string): void;
            allowMediaOrigin(origin: string): void;
            allowFontOrigin(origin: string): void;
            allowStyleOrigin(origin: string): void;
            allowScriptOrigin(origin: string): void;
            allowFrameOrigin(origin: string): void;
            allowFrameAncestorsOrigin(origin: string): void;
            allowContentTypeSniffing(): void;
            allowAllContentOrigin(): void;
            allowAllContentDataUrl(): void;
            allowAllContentSameOrigin(): void;
            allowConnectOrigin(origin: string): void;
            allowObjectOrigin(origin: string): void;

            disallowAll(): void;
            disallowInlineStyles(): void;
            disallowEval(): void;
            disallowInlineScripts(): void;
            disallowFont(): void;
            disallowObject(): void;
            disallowAllContent(): void;
            disallowConnect(): void;
        };
    }
}
