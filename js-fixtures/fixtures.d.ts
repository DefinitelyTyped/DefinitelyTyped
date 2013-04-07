declare interface Fixtures {
    path: string;
    containerId: string;
    set(html: string): void;
    appendSet(html: string): void;
    preload(...htmls: string[]): void;
    load(...htmls: string[]): void;
    appendLoad(...htmls: string[]): void;
    read(...htmls: string[]): string;
    clearCache(): void;
    cleanUp(): void;
}

declare var fixtures: Fixtures;