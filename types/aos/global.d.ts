interface Document {
    addEventListener(
        type: Aos.AosEventType,
        listener: (event: Aos.AosEvent) => void,
        options?: boolean | AddEventListenerOptions
    ): void;
}
