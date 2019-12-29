import * as ZipCodes from 'zipcodes';

const zipA: ZipCodes.ZipCode = {
  zip: '90210',
  latitude: 34.088808,
  longitude: -118.406125,
  city: 'Beverly Hills',
  state: 'CA',
  country: 'US'
};

const zipB: ZipCodes.ZipCode = {
  zip: '95015',
  latitude: 37.323,
  longitude: -122.0527,
  city: 'Cupertino',
  state: 'CA',
  country: 'US'
};

ZipCodes.lookup(zipA.zip); // $ExpectType ZipCode | undefined

ZipCodes.lookupByName('Cupertino', 'CA'); // $ExpectType ZipCode[]

ZipCodes.lookupByState('CA'); // $ExpectType ZipCode[]

ZipCodes.distance(zipA.zip, zipB.zip); // $ExpectType number | null

ZipCodes.radius(zipA.zip, 1, true); // $ExpectType ZipCode[] | string[]
ZipCodes.radius(zipA.zip, 1, false); // $ExpectType ZipCode[] | string[]

ZipCodes.toMiles(3); // $ExpectType number

ZipCodes.toKilometers(3); // $ExpectType number

ZipCodes.lookupByCoords(37.323, -122.0527); // $ExpectType string | null
