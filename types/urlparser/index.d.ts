// TypeScript Version: 2.2

interface UrlData {
    host: {
        protocol: string;
        username: string;
        password: string;
        hostname: string;
        port: string | number;
    };
    path: {
        base: string;
        name: string;
        hash: string;
    };
    query: {
        parts: string[];
        params: object;
    };
    toString: () => string;
}

interface UrlParser {
    url: (o: UrlData | undefined) => string;
    host: (o: UrlData | undefined) => string;
    path: (o: UrlData | undefined) => string;
    query: (o: UrlData | undefined) => string;
    parse: (parse: string) => UrlData;
}

declare const urlParser: UrlParser;

export = urlParser;
