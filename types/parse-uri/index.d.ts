// Type definitions for parse-uri 1.0
// Project: https://github.com/Kikobeats/parse-uri
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace parseURI {
    interface URI {
        source: string;
        protocol: string;
        authority: string;
        userInfo: string;
        user: string;
        password: string;
        host: string;
        port: string;
        relative: string;
        path: string;
        directory: string;
        file: string;
        query: string;
        anchor: string;
        queryKey: Record<string, string>;
    }

    interface Options {
        strictMode?: boolean;
    }
}

declare function parseURI(uri: string, opts?: parseURI.Options): parseURI.URI;

export = parseURI;
