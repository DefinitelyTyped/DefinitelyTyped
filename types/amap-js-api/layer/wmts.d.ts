declare namespace AMap {
    namespace TileLayer {
        namespace WMTS {
            interface Params {
                Version?: string;
                Layer?: string;
                Style?: string;
                Format?: string;
            }
            interface Options extends Flexible.Options {
                url: string;
                params: Params;
                blend?: boolean;
            }
        }

        class WMTS extends Flexible {
            constructor(options: WMTS.Options);
            setUrl(url: string): void;
            getUrl(): string;
            setParams(params: WMTS.Params): void;
            getParams(): WMTS.Params;
        }
    }
}
