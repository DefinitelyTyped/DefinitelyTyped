declare namespace AMap {
    namespace TileLayer {
        namespace WMTS {
            interface Params {
                Version?: string | undefined;
                Layer?: string | undefined;
                Style?: string | undefined;
                Format?: string | undefined;
            }
            interface Options extends Flexible.Options {
                /**
                 * wmts服务的url地址
                 */
                url: string;
                /**
                 * OGC标准的WMTS地图服务的GetTile接口的参数
                 */
                params: Params;
                /**
                 * 地图级别切换时，不同级别的图片是否进行混合
                 */
                blend?: boolean | undefined;
            }
        }

        class WMTS extends Flexible {
            /**
             * WMTS图层
             * @param options 图层选项
             */
            constructor(options: WMTS.Options);
            /**
             * 设置wmts服务地址
             * @param url 服务地址
             */
            setUrl(url: string): void;
            /**
             * 返回wmts服务地址
             */
            getUrl(): string;
            /**
             * 设置OGC标准的WMTS getTile接口的参数
             * @param params 接口参数
             */
            setParams(params: WMTS.Params): void;
            /**
             * 返回OGC标准的WMTS getTile接口的参数
             */
            getParams(): WMTS.Params;
        }
    }
}
