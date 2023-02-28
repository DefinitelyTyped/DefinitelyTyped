import stations = require('db-stations');
import createFilter = require('db-stations/create-filter');

// test type exports
type ReadableStations = stations.ReadableStations<stations.Station>;
type Station = stations.Station;
type StationFull = stations.StationFull;
type Location = stations.Location;
type Operator = stations.Operator;
type Address = stations.Address;
type FederalState = stations.FederalState;
type Regionalbereich = stations.Regionalbereich;
type TimeTableOffice = stations.TimeTableOffice;
type SZentrale = stations.SZentrale;
type StationManagement = stations.StationManagement;
type Ril100Identifier = stations.Ril100Identifier;
type Point = stations.Point;

// $ExpectType ReadableStations<Station>
stations().on('data', station => {
    station; // $ExpectType Station
    station.type; // $ExpectType "station"
    station.id; // $ExpectType string
    station.ril100; // $ExpectType string
    station.nr; // $ExpectType number
    station.name; // $ExpectType string
    station.weight; // $ExpectType number
    station.location; // $ExpectType Location
    station.location.type; // $ExpectType "location"
    station.location.latitude; // $ExpectType number
    station.location.longitude; // $ExpectType number
    station.operator; // $ExpectType Operator
    station.operator.type; // $ExpectType "operator"
    station.operator.id; // $ExpectType string
    station.operator.name; // $ExpectType string
    station.address; // $ExpectType Address
    station.address.city; // $ExpectType string
    station.address.street; // $ExpectType string
    station.address.zipcode; // $ExpectType string
});

// $ExpectType ReadableStations<StationFull>
stations.full().on('data', station => {
    station; // $ExpectType StationFull
    station.type; // $ExpectType "station"
    station.id; // $ExpectType string
    station.ril100; // $ExpectType string
    station.nr; // $ExpectType number
    station.name; // $ExpectType string
    station.weight; // $ExpectType number
    station.location; // $ExpectType Location
    station.location.type; // $ExpectType "location"
    station.location.latitude; // $ExpectType number
    station.location.longitude; // $ExpectType number
    station.operator; // $ExpectType Operator
    station.operator.type; // $ExpectType "operator"
    station.operator.id; // $ExpectType string
    station.operator.name; // $ExpectType string
    station.address; // $ExpectType Address
    station.address.city; // $ExpectType string
    station.address.street; // $ExpectType string
    station.address.zipcode; // $ExpectType string
    station.additionalIds; // $ExpectType string[]
    let cat: 1 | 2 | 3 | 4 | 5 | 6 | 7 = station.category;
    // @ts-expect-error
    let cat1: 2 | 3 | 4 | 5 | 6 | 7 = station.category;
    // @ts-expect-error
    let cat2: 1 | 2 | 3 | 4 | 5 | 6 = station.category;
    cat = station.priceCategory;
    // @ts-expect-error
    cat1 = station.priceCategory;
    // @ts-expect-error
    cat2 = station.priceCategory;
    station.hasParking; // $ExpectType boolean
    station.hasBicycleParking; // $ExpectType boolean
    station.hasLocalPublicTransport; // $ExpectType boolean
    station.hasPublicFacilities; // $ExpectType boolean
    station.hasLockerSystem; // $ExpectType boolean
    station.hasTaxiRank; // $ExpectType boolean
    station.hasTravelNecessities; // $ExpectType boolean
    const acc: 'no' | 'yes' | 'partial' = station.hasSteplessAccess;
    // @ts-expect-error
    const acc1: 'yes' | 'partial' = station.hasSteplessAccess;
    // @ts-expect-error
    const acc2: 'no' | 'yes' = station.hasSteplessAccess;
    station.hasMobilityService; // $ExpectType string
    station.hasWiFi; // $ExpectType boolean
    station.hasTravelCenter; // $ExpectType boolean
    station.hasRailwayMission; // $ExpectType boolean
    station.hasDBLounge; // $ExpectType boolean
    station.hasLostAndFound; // $ExpectType boolean
    station.hasCarRental; // $ExpectType boolean
    station.federalState; // $ExpectType FederalState
    station.regionalbereich; // $ExpectType Regionalbereich
    station.timeTableOffice; // $ExpectType TimeTableOffice
    station.timeTableOffice.email; // $ExpectType string
    station.timeTableOffice.name; // $ExpectType string
    station.szentrale; // $ExpectType SZentrale
    station.szentrale.number; // $ExpectType number
    station.szentrale.publicPhoneNumber; // $ExpectType string
    station.szentrale.name; // $ExpectType string
    station.stationManagement; // $ExpectType StationManagement
    station.stationManagement.number; // ExpectType number
    station.stationManagement.name; // ExpectType string
    station.ril100Identifiers; // $ExpectType Ril100Identifier[]
    station.ril100Identifiers[0].rilIdentifier; // $ExpectType string
    station.ril100Identifiers[0].isMain; // $ExpectType boolean
    station.ril100Identifiers[0].hasSteamPermission; // $ExpectType boolean
    station.ril100Identifiers[0].geographicCoordinates; // $ExpectType Point
    station.ril100Identifiers[0].geographicCoordinates.type; // $ExpectType "Point"
    station.ril100Identifiers[0].geographicCoordinates.coordinates; // $ExpectType [number, number]
});

createFilter({ name: 'foo' }); // $ExpectType (station: Station) => boolean
createFilter<StationFull>({ federalState: 'Bayern' }); // $ExpectType (station: StationFull) => boolean
