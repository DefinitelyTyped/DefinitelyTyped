type PostTaskPriority = "user-blocking" | "user-visible" | "background";

interface PostTaskOptions {
    priority?: PostTaskPriority;
    signal?: AbortSignal;
    delay?: number;
}

interface Scheduler {
    yield(): Promise<void>;
    postTask<T>(callback: () => T): Promise<T>;
    postTask<T>(callback: () => T, options: PostTaskOptions): Promise<T>;
}

interface Window {
    readonly scheduler?: Scheduler;
}

interface WorkerGlobalScope {
    readonly scheduler?: Scheduler;
}
