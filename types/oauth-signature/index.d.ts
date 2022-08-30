// Type definitions for oauth-signature 1.5
// Project: https://github.com/bettiolo/oauth-signature-js
// Definitions by: Sean Coker <https://github.com/okcoker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace OauthSignature {
    function generate(
        httpMethod: string,
        url: string,
        parameters: { [key: string]: any },
        consumerSecret: string,
        tokenSecret?: string,
        options?: GenerateOptions,
    ): string;

    interface GenerateOptions {
        encodeSignature: boolean;
    }

    class SignatureBaseString {
        constructor(httpMethod: string, url: string, parameters: { [key: string]: any });

        generate(): string;
    }

    class HttpMethodElement {
        constructor(httpMethod: string);

        get(): string;
    }

    interface ParsedUrl {
        scheme: string;
        authority: string;
        port: string;
        path: string;
    }

    class UrlElement {
        constructor(url: string);

        get(): string | undefined | null;
        parseInBrowser(): ParsedUrl;
        parseInNode(): ParsedUrl;
    }

    class ParametersElement {
        constructor(parameters: { [key: string]: any });
        get(): string;
    }

    class ParametersLoader {
        constructor(parameters: { [key: string]: any });

        get(): { [key: string]: any };
    }

    class Rfc3986 {
        encode(decoded?: string): string;
        decode(encoded?: string): string;
    }

    class HmacSha1Signature {
        constructor(signatureBaseString: string, consumerSecret?: string, tokenSecret?: string);
        generate(encode?: boolean): string;
    }

    class HmacSha1 {
        constructor(text?: string, key?: string);

        getBase64EncodedHash(): string;
    }
}

declare var oauthSignature: typeof OauthSignature;

export as namespace oauthSignature;
export = oauthSignature;
