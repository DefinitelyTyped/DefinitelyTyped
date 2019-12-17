import {
  OpenStreetMapProvider,
  BingProvider,
  EsriProvider,
  GoogleProvider,
  BaseProvider,
  GeoSearchControl,
} from 'leaflet-geosearch';
import { Map as LeafletMap, Icon } from 'leaflet';

// Providers
(async () => {
  async function search(
    provider: BaseProvider,
    options = { query: 'Where is my home?' },
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

// GeoSearchControl
(() => {
  const provider = new OpenStreetMapProvider();
  const map = new LeafletMap('map');

  function addAsControl() {
    const searchControl = new GeoSearchControl({ provider });
    map.addControl(searchControl);
  }

  function addToMap() {
    new GeoSearchControl({ provider, style: 'bar' }).addTo(map);
  }

  function autoComplete() {
    new GeoSearchControl({
      provider,
      autoComplete: true,
      autoCompleteDelay: 250,
    });
  }

  function showResult() {
    new GeoSearchControl({
      provider,
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new Icon.Default(),
        draggable: false,
      },
      popupFormat: ({ result }) => result.label,
      maxMarkers: 1,
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: false,
      searchLabel: 'Enter address',
      keepResult: false,
    });
  }
})();
