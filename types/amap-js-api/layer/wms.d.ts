declare namespace AMap {
    namespace TileLayer {
        namespace WMS {
            interface Params {
                VERSION?: string;
                LAYERS?: string;
                STYLES?: string;
                FORMAT?: string;
                TRANSPARENT?: 'TRUE' | 'FALSE';
                BGCOLOR?: string;
                EXCEPTIONS?: string;
                TIME?: string;
                ELEVATION?: string;
            }
            interface Options extends Flexible.Options {
                /**
                 * wms服务的url地址
                 */
                url: string;
                /**
                 * OGC标准的WMS地图服务的GetMap接口的参数
                 */
                params: Params;
                /**
                 * 地图级别切换时，不同级别的图片是否进行混合
                 */
                blend?: boolean;
            }
        }
        class WMS extends Flexible {
            /**
             * WMS图层
             * @param options 图层选项
             */
            constructor(options: WMS.Options);
            /**
             * 设置wms服务地址
             * @param url 服务地址
             */
            setUrl(url: string): void;
            /**
             * 返回wms服务地址
             */
            getUrl(): string;
            /**
             * 设置OGC标准的WMS getMap接口的参数
             * @param params 接口参数
             */
            setParams(params: WMS.Params): void;
            /**
             * 返回OGC标准的WMS getMap接口的参数
             */
            getParams(): WMS.Params;
        }
    }
}
