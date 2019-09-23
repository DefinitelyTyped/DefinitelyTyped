import {
  OpenStreetMapProvider,
  BingProvider,
  EsriProvider,
  GoogleProvider,
  BaseProvider,
} from 'leaflet-geosearch';

(async () => {
  async function search(
    provider: BaseProvider,
    options: { query: string } = { query: 'Where is my home?' },
  ) {
    return provider.search(options);
  }

  [
    await search(new OpenStreetMapProvider()),
    await search(new BingProvider({ key: 'BING_API_KEY' })),
    await search(new EsriProvider()),
    await search(new GoogleProvider({ key: 'GOOGLE_MAPS_API_KEY ' })),
  ].forEach(([{ x, y, bounds, label, raw }]) => ({ x, y, bounds, label, raw }));
})();
