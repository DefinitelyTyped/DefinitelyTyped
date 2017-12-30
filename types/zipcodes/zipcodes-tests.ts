import { ZipCode, ZipCodes } from "zipcodes";

const zipA: ZipCode = {
  zip: '90210',
  latitude: 34.088808,
  longitude: -118.406125,
  city: 'Beverly Hills',
  state: 'CA',
  country: 'US'
};

const zipB: ZipCode = {
  zip: '95015',
  latitude: 37.323,
  longitude: -122.0527,
  city: 'Cupertino',
  state: 'CA',
  country: 'US'
};

ZipCodes.lookup(zipA); // $ExpectType ZipCode

ZipCodes.lookupByName('Cupertino', 'CA'); // $ExpectType ZipCode[]

ZipCodes.lookupByState('CA'); // $ExpectType ZipCode[]

ZipCodes.distance(zipA, zipB); // $ExpectType number

ZipCodes.radius(zipA, 1, true); // $ExpectType string | ZipCode[]
ZipCodes.radius(zipA, 1, false); // $ExpectType string | ZipCode[]

ZipCodes.toMiles(3); // $ExpectType number

ZipCodes.toKilometers(3); // $ExpectType number

ZipCodes.lookupByCoords(37.323, -122.0527); // $ExpectType ZipCode
