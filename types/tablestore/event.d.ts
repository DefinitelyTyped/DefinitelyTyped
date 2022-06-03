declare namespace TableStore {
    class SequentialExecutor {
        on(eventName: string, listener: () => void): SequentialExecutor;
        onAsync(eventName: string, listener: () => void): SequentialExecutor;
        removeListener(eventName: string, listener: () => void): SequentialExecutor;
        removeAllListeners(eventName: string): SequentialExecutor;
    }

    const events: SequentialExecutor;
}
