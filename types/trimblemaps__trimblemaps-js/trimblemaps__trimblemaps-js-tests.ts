import TrimbleMaps = require('@trimblemaps/trimblemaps-js');

TrimbleMaps.APIKey = "YOUR_KEY_HERE";

const myMap = new TrimbleMaps.Map({
  container: "myMap",
  center: new TrimbleMaps.LngLat(-96, 35),
  zoom: 3,
  region: TrimbleMaps.Common.Region.EU,
});

myMap.on('load', () => {
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

  route.addTo(myMap);
  route.remove();
  route.update({});
  route.frameRoute();

  // $ExpectType string
  const routeId = route.getRouteId();

  route.getReports({});
  route.setDraggable(true);

  route.on('report', () => {});

  myMap.setWeatherAlertVisibility(true);
});

var geocodeLocation = TrimbleMaps.Geocoder.geocode({
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

var reverseGeocodeLocation = TrimbleMaps.Geocoder.reverseGeocode({
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

var weatherAlertClickControl = new TrimbleMaps.WeatherAlertClickControl();
myMap.addControl(weatherAlertClickControl);

var weatherAlertLegendControl = new TrimbleMaps.WeatherAlertLegendControl();
myMap.addControl(weatherAlertLegendControl);

var weatherAlertFilterControl = new TrimbleMaps.WeatherAlertFilterControl();
myMap.addControl(weatherAlertFilterControl);
