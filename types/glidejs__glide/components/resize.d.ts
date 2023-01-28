export type ResizeEvents = 'resize';

export interface ResizeEventsBus {
    on(event: ResizeEvents, handler: () => void): { remove(): void };
    on(event: ResizeEvents[], handler: () => void): void;

    emit(event: ResizeEvents | ResizeEvents[]): void;
}

export interface Resize {
    /**
     * Initializes window bindings.
     */
    mount(): void;

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     */
    bind(): void;

    /**
     * Unbinds listeners from the window.
     */
    unbind(): void;
}
