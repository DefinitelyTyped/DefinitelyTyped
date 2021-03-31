declare class URLImpl {
    constructor(
        globalObject: object,
        [url, base]: readonly [string, string?],
        privateData?: {},
    );

    href: string;
    readonly origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    readonly searchParams: URLSearchParams;
    hash: string;

    toJSON(): string;
}
export { URLImpl as implementation };
