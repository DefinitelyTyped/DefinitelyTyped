declare namespace AMap {
    namespace InfoWindow {
        interface EventMap<I> {
            change: Event<'change', { target: I }>;
            open: Event<'open', { target: I }>;
            close: Event<'close', { target: I }>;
        }

        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            isCustom?: boolean;
            autoMove?: boolean;
            closeWhenClickMap?: boolean;
            content?: string | HTMLElement;
            size?: SizeValue;
            offset?: Pixel;
            position?: LocationValue;
            showShadow?: boolean;
            // internal
            height?: number;
        }
    }

    class InfoWindow<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: InfoWindow.Options);
        open(map: Map, position?: LocationValue): void;
        close(): void;
        getIsOpen(): boolean;
        setContent(content: string | HTMLElement): void;
        getContent(): string | HTMLElement | undefined;
        setPosition(lnglat: LocationValue): void;
        getPosition(): LngLat | undefined;
        setSize(size: SizeValue): void;
        getSize(): Size | undefined;
        // internal
        setOffset(offset: Pixel): void;
    }
}
