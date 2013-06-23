// Type definitions for js-fixtures 1.2.0
// Project: https://github.com/badunk/js-fixtures
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

interface Fixtures {
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