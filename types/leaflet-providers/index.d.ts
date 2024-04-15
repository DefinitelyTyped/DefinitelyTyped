import * as L from "leaflet";

declare module "leaflet" {
    namespace TileLayer {
        class Provider extends TileLayer {
            constructor(provider: string, options?: TileLayerOptions | { [name: string]: string });
        }

        namespace Provider {
            const providers: ProvidersMap;

            interface ProvidersMap {
                [providerName: string]: ProviderConfig;
            }

            interface ProviderConfig {
                url: string;
                options?: TileLayerOptions | undefined;
                variants?: { [variantName: string]: string | ProviderConfig } | undefined;
            }
        }
    }

    namespace tileLayer {
        function provider(
            provider: string,
            options?: TileLayerOptions | { [name: string]: string },
        ): TileLayer.Provider;
    }
}
