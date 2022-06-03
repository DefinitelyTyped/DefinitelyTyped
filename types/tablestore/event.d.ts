declare namespace TableStore {
    class SequentialExecutor {
        on(eventName: string, listener: Function): SequentialExecutor;
        onAsync(eventName: string, listener: Function): SequentialExecutor;
        removeListener(eventName: string, listener: Function): SequentialExecutor;
        removeAllListeners(eventName: string): SequentialExecutor;
    }

    const events: SequentialExecutor;
}
