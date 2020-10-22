// Type definitions for sequester 1.0.0
// Project: https://github.com/bigeasy/sequester
// Definitions by: Artur Eshenbrener <https://github.com/Strate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Callback = () => void;

export interface Lock {
    share(cb: Callback): void;
    exclude(cb: Callback): void;
    count: number;
    dispose(): void;
    unlock(): void;
    downgrade(): void;
}

export function createLock(): Lock;
