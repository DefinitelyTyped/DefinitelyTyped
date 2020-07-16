// Type definitions for leaflet-providers 1.2
// Project: https://github.com/leaflet-extras/leaflet-providers#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Simon Legner <https://github.com/simon04>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
  namespace TileLayer {
    class Provider extends TileLayer {
      constructor(provider: string, options?: TileLayerOptions | { [name: string]: string; })
    }

    namespace Provider {
      const providers: ProvidersMap;

      interface ProvidersMap {
        [providerName: string]: ProviderConfig;
      }

      interface ProviderConfig {
        url: string;
        options?: TileLayerOptions;
        variants?: {[variantName: string]: string | ProviderConfig};
      }
    }
  }

  namespace tileLayer {
    function provider(provider: string, options?: TileLayerOptions | { [name: string]: string; }): TileLayer.Provider;
  }
}
