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
                url: string;
                params: Params;
                blend?: boolean;
            }
        }
        class WMS extends Flexible {
            constructor(options: WMS.Options);
            setUrl(url: string): void;
            getUrl(): string;
            setParams(params: WMS.Params): void;
            getParams(): WMS.Params;
        }
    }
}
