declare namespace AMap {
    namespace Layer {
        interface Options {
            map?: Map;
        }
    }

    abstract class Layer extends EventEmitter {
        getContainer(): HTMLDivElement | undefined;
        getZooms(): [number, number];
        setOpacity(alpha: number): void;
        getOpacity(): number;
        show(): void;
        hide(): void;
        setMap(map?: Map | null): void;
        getMap(): Map | null | undefined;
        setzIndex(index: number): void;
        getzIndex(): number;
    }
}
