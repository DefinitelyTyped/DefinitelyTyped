interface Release {
    (): void;
}
interface Lock {
    (): Promise<Release>;
}

declare function mutexify(): Lock;

export = mutexify;
export as namespace mutexify;
