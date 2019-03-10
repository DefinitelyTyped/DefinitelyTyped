declare namespace AMap {
    namespace TileLayer {
        interface EventMap {
            complete: Event<'complete'>;
        }

        interface Options extends Layer.Options {
            tileSize?: number;
            tileUrl?: string;
            errorUrl?: string;
            getTileUrl?: string | ((x: number, y: number, level: number) => string);
            zIndex?: number;
            opacity?: number;
            zooms?: [number, number];
            detectRetina?: boolean;
        }
        class Satellite extends TileLayer { }
        class RoadNet extends TileLayer { }

        namespace Traffic {
            interface Options extends TileLayer.Options {
                autoRefresh?: boolean;
                interval?: number;
            }
        }
        class Traffic extends TileLayer {
            constructor(options?: Traffic.Options);
        }
    }

    class TileLayer extends Layer {
        constructor(options?: TileLayer.Options);
        getTiles(): string[];
        reload(): void;
        setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;
    }
}
