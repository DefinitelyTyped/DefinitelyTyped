declare class UrlPattern {
    protocol(protocol: string): UrlPattern;

    hostname(hostname: string): UrlPattern;

    port(port: number): UrlPattern;

    pathname(pathname: string): UrlPattern;

    search(search: string): UrlPattern;

    asMap(): Map<string, string>;
}

export { UrlPattern };
