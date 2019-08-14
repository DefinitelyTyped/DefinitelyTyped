import * as L from 'leaflet';
import 'esri-leaflet-geocoder';

const map = L.map('map').setView([45.5165, -122.6764], 12);
const tiles = L.esri.basemapLayer("Streets").addTo(map);

const searchControl = L.esri.Geocoding.geosearch().addTo(map);

const results = L.layerGroup([]).addTo(map);

// listen for the results event and add every result to the map
searchControl.on("results", data => {
    results.clearLayers();
    for (let i = (<any> data).results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker((<any> data).results[i].latlng));
    }
});

const arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider();
const gisDay = L.esri.Geocoding.featureLayerProvider({
    url: 'https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/GIS_Day_Final/FeatureServer/0',
    searchFields: ['Name', 'Organization'], // Search these fields for text matches
    label: 'GIS Day Events', // Group suggestions under this header
    formatSuggestion(feature) {
        return `${feature.properties.Name} - ${feature.properties.Organization}`; // format suggestions like this.
    }
});

L.esri.Geocoding.geosearch({
    providers: [arcgisOnline, gisDay] // will geocode via ArcGIS Online and search the GIS Day feature service.
}).addTo(map);

L.esri.Geocoding.geocode().text('380 New York St, Redlands, California, 92373').run((err, results, response) => {
    console.log(results);
});

L.esri.Geocoding.geocode().address('380 New York St').city('Redlands').region('California').postal('92373').run((err, results, response) => {
    console.log(results);
});

const southWest = L.latLng(37.712, -108.227);
const northEast = L.latLng(41.774, -102.125);
const bounds = L.latLngBounds(southWest, northEast); // Colorado

L.esri.Geocoding.geocode().text("Denver").within(bounds).run((err, response) => {
    console.log(response);
});

const denver = L.latLng(37.712, -108.227);

L.esri.Geocoding.geocode().text("Highlands Ranch").nearby(denver, 20000).run((err, response) => {
    const res: any[] = response.results;
});

L.esri.Geocoding.suggest()
    .text('trea')
    .nearby([45, -121], 5000)
    .run((error, response) => {
        /* response syntax is documented here:
        https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm#ESRI_SECTION1_FC3884A45AD24E62BD11C9888F1392DB
        */
    });

L.esri.Geocoding.reverseGeocode()
    .latlng([48.8583, 2.2945])
    .run((error, result, response) => {
        // callback is called with error, result, and raw response.
        // result.latlng contains the coordinates of the located address
        // result.address contains information about the match
    });
