import TrimbleMaps = require('@trimblemaps/trimblemaps-js');

TrimbleMaps.APIKey = "YOUR_KEY_HERE";

// $ExpectType void
TrimbleMaps.prewarm();

// $ExpectType void
TrimbleMaps.clearPrewarmedResources();

const map = new TrimbleMaps.Map({
  container: "myMap",
  center: new TrimbleMaps.LngLat(-96, 35),
  zoom: 3,
  region: TrimbleMaps.Common.Region.EU,
});

map.on('load', () => {
  const route = new TrimbleMaps.Route({
    routeId: 'tollRoute',
    stops: [
        new TrimbleMaps.LngLat(21.229252, 40.100407),
        new TrimbleMaps.LngLat(-1.208000, 51.728775),
        new TrimbleMaps.LngLat(19.058076, 67.808907)
    ],
    reportType: [
        TrimbleMaps.Common.ReportType.TOLL
    ],
    highwayOnly: false,
    region: TrimbleMaps.Common.Region.EU,
    trkUnits: 0,
    trkHeight: "13\'1\"",
    trkLength: "48\'",
    trkWidth: "96\"",
    trkWeight: 26460,
    dataVersion: TrimbleMaps.Common.DataVersion.EU,
    distanceUnits: TrimbleMaps.Common.DistanceUnit.MILES,
  });

  route.addTo(map);
  route.remove();
  route.update({});
  route.frameRoute();

  // $ExpectType string
  const routeId = route.getRouteId();

  route.getReports({});
  route.setDraggable(true);

  route.on('report', () => {});

  map.setWeatherAlertVisibility(true);
});

const geocodeLocation = TrimbleMaps.Geocoder.geocode({
  address: {
    addr: '1 Independence Way',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
    region: TrimbleMaps.Common.Region.NA
  },
  listSize: 1,
  success: (response) => {
    console.log(response);
  },
  failure: (response) => {
    console.log(response);
  }
});
geocodeLocation.cancel();

const reverseGeocodeLocation = TrimbleMaps.Geocoder.reverseGeocode({
  lonLat: new TrimbleMaps.LngLat(-122.31693, 47.60784),
  region: TrimbleMaps.Common.Region.NA,
  success: (response) => {
    console.log(response);
  },
  failure: (response) => {
    console.log(response);
  }
});
geocodeLocation.cancel();

const weatherAlertClickControl = new TrimbleMaps.WeatherAlertClickControl();
map.addControl(weatherAlertClickControl);

const weatherAlertLegendControl = new TrimbleMaps.WeatherAlertLegendControl();
map.addControl(weatherAlertLegendControl);

const weatherAlertFilterControl = new TrimbleMaps.WeatherAlertFilterControl();
map.addControl(weatherAlertFilterControl);
