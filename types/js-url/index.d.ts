interface UrlStatic {
    (): string;
    (pattern: string): string;
    (pattern: number): string;
    (pattern: string, url: string): string;
    (pattern: number, url: string): string;
}

declare var url: UrlStatic;
