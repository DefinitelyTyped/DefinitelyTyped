import stations = require('db-hafas-stations');

// test type exports
type ReadableStations = stations.ReadableStations<stations.Station>;
type Station = stations.Station;
type StationFull = stations.StationFull;
type Location = stations.Location;
type Products = stations.Products;

// $ExpectType ReadableStations<Station>
stations().on('data', station => {
    station; // $ExpectType Station
    station.type; // $ExpectType "station"
    station.id; // $ExpectType string
    station.name; // $ExpectType string
    station.weight; // $ExpectType number
});

// $ExpectType ReadableStations<StationFull>
stations.full().on('data', station => {
    station; // $ExpectType StationFull
    station.type; // $ExpectType "station"
    station.id; // $ExpectType string
    station.name; // $ExpectType string
    station.weight; // $ExpectType number
    station.location; // $ExpectType Location
    station.location.type; // $ExpectType "location"
    station.location.id; // $ExpectType string
    station.location.latitude; // $ExpectType number
    station.location.longitude; // $ExpectType number
    station.products; // $ExpectType Products
    station.products.nationalExpress; // $ExpectType boolean
    station.products.national; // $ExpectType boolean
    station.products.regionalExp; // $ExpectType boolean
    station.products.regional; // $ExpectType boolean
    station.products.suburban; // $ExpectType boolean
    station.products.bus; // $ExpectType boolean
    station.products.ferry; // $ExpectType boolean
    station.products.subway; // $ExpectType boolean
    station.products.tram; // $ExpectType boolean
    station.products.taxi; // $ExpectType boolean
    station.distance; // $ExpectType number | undefined
});
