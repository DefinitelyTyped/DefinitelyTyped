declare namespace AMap {
    namespace TileLayer {
        namespace Flexible {
            interface Options extends TileLayer.Options {
                createTile?(
                    x: number,
                    y: number,
                    z: number,
                    success: (tile: HTMLImageElement | HTMLCanvasElement) => void,
                    fail: () => void
                ): void;
                cacheSize?: number;
                visible?: boolean;
            }
        }
        class Flexible extends TileLayer {
            constructor(options?: Flexible.Options);
        }
    }
}
