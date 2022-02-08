declare namespace AMap {
    namespace TileLayer {
        interface EventMap {
            complete: Event<'complete'>;
        }

        interface Options extends Layer.Options {
            /**
             * 切片大小
             */
            tileSize?: number | undefined;
            /**
             * 切片取图地址(自1.3版本起，该属性与getTileUrl属性合并)
             */
            tileUrl?: string | undefined;
            /**
             * 取图错误时的代替地址
             */
            errorUrl?: string | undefined;
            /**
             * 获取图块取图地址
             */
            getTileUrl?: string | ((x: number, y: number, level: number) => string) | undefined;
            /**
             * 图层叠加的顺序值
             */
            zIndex?: number | undefined;
            /**
             * 图层的透明度
             */
            opacity?: number | undefined;
            /**
             * 支持的缩放级别范围
             */
            zooms?: [number, number] | undefined;
            /**
             * 是否在高清屏下进行清晰度适配
             */
            detectRetina?: boolean | undefined;
        }
        /**
         * 卫星图层
         */
        class Satellite extends TileLayer { }
        /**
         * 路网图层
         */
        class RoadNet extends TileLayer { }

        namespace Traffic {
            interface Options extends TileLayer.Options {
                /**
                 * 是否设置可以自动刷新实时路况信息
                 */
                autoRefresh?: boolean | undefined;
                /**
                 * 设置刷新间隔时长
                 */
                interval?: number | undefined;
            }
        }
        class Traffic extends TileLayer {
            /**
             * 实时交通图层
             * @param options 图层选项
             */
            constructor(options?: Traffic.Options);
        }
    }

    class TileLayer extends Layer {
        /**
         * 切片图层
         * @param options 图层选项
         */
        constructor(options?: TileLayer.Options);
        /**
         * 获取当前图层所有切片号
         */
        getTiles(): string[];
        /**
         * 重新加载此图层
         */
        reload(): void;
        /**
         * 设置图层的取图地址
         * @param url 取图地址
         */
        setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;
    }
}
