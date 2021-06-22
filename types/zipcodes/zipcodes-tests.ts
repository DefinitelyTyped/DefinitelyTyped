import zipcodes = require("zipcodes");
import { ZipCode } from "zipcodes";

const zipA: ZipCode = {
    zip: "90210",
    latitude: 34.088808,
    longitude: -118.406125,
    city: "Beverly Hills",
    state: "CA",
    country: "US",
};

const zipB: ZipCode = {
    zip: "95015",
    latitude: 37.323,
    longitude: -122.0527,
    city: "Cupertino",
    state: "CA",
    country: "US",
};

zipcodes.lookup(zipA.zip); // $ExpectType ZipCode | undefined

zipcodes.lookupByName("Cupertino", "CA"); // $ExpectType ZipCode[]

zipcodes.lookupByState("CA"); // $ExpectType ZipCode[]

zipcodes.distance(zipA.zip, zipB.zip); // $ExpectType number | null

zipcodes.radius(zipA.zip, 1, true); // $ExpectType ZipCode[] | string[]
zipcodes.radius(zipA.zip, 1, false); // $ExpectType ZipCode[] | string[]

zipcodes.toMiles(3); // $ExpectType number

zipcodes.toKilometers(3); // $ExpectType number

zipcodes.lookupByCoords(37.323, -122.0527); // $ExpectType string | null

zipcodes.random(); // $ExpectType ZipCode

zipcodes.codes["10001"]; // $ExpectType ZipCode
zipcodes.states.abbr["AL"]; // $ExpectType string
