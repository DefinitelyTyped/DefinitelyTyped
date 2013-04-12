declare interface Fixtures {
    path: string;
    containerId: string;
    body(): string;
    window(): Window;
    set(html: string): void;
    appendSet(html: string): void;
    preload(...urls: string[]): void;
    load(...urls: string[]): void;
    appendLoad(...urls: string[]): void;
    read(...urls: string[]): string;
    clearCache(): void;
    cleanUp(): void;
}

declare var fixtures: Fixtures;