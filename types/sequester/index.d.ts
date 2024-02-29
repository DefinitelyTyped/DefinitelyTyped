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
