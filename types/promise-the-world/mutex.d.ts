declare namespace mutex {
    class Mutex {
        lock(): Promise<void>;
        unlock(): Promise<void>;
    }
}

declare function mutex(): mutex.Mutex;

export = mutex;
