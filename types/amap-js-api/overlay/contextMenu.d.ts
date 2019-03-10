declare namespace AMap {
    namespace ContextMenu {
        interface Options {
            content?: string | HTMLElement;
            // internal
            visible?: boolean;
        }

        interface EventMap<I> {
            items: Event<'items'>;
            open: Event<'open', { target: I }>;
            close: Event<'close', { target: I }>;
        }
    }

    class ContextMenu<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: ContextMenu.Options);
        addItem(text: string, fn: (this: HTMLLIElement) => void, num?: number): void;
        removeItem(test: string, fn: (this: HTMLLIElement) => void): void;
        open(map: Map, position: LocationValue): void;
        close(): void;
    }
}
