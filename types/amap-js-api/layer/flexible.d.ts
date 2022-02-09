declare namespace AMap {
    namespace TileLayer {
        namespace Flexible {
            interface Options extends TileLayer.Options {
                /**
                 * 创建切片回调
                 * @param x 横坐标
                 * @param y 纵坐标
                 * @param z 层级
                 * @param success 成功回调
                 * @param fail 失败回调
                 */
                createTile?(
                    x: number,
                    y: number,
                    z: number,
                    success: (tile: HTMLImageElement | HTMLCanvasElement) => void,
                    fail: () => void
                ): void;
                /**
                 * 内存中缓存的切片的数量上限
                 */
                cacheSize?: number | undefined;
                /**
                 * 是否显示
                 */
                visible?: boolean | undefined;
            }
        }
        class Flexible extends TileLayer {
            /**
             * 灵活切片图层
             * @param options 图层选项
             */
            constructor(options?: Flexible.Options);
        }
    }
}
