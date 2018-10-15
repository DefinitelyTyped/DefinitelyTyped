import ipAddress = require('ip-address');

// Test Address4 Typings
const address4 = new ipAddress.Address4('127.0.0.1');

const address4Valid = address4.valid;
const address4String = address4.address;
const address4Parsed = address4.parsedAddress;
const address4Groups = address4.groups;
const address4v4 = address4.v4;
const address4Subnet = address4.subnet;
const address4Mask = address4.subnetMask;

// $ExpectType Address4
ipAddress.Address4.fromHex('127.0.0.1');
// $ExpectType Address4
ipAddress.Address4.fromInteger(127001);
// $ExpectType Address4
address4.startAddress();
// $ExpectType Address4
address4.startAddressExclusive();
// $ExpectType Address4
address4.endAddress();
// $ExpectType Address4
address4.endAddressExclusive();

// $ExpectType string
address4.correctForm();
// $ExpectType string
address4.toHex();
// $ExpectType string
address4.toGroup6();
// $ExpectType string
address4.mask();
// $ExpectType string
address4.mask('0');
// $ExpectType string
address4.getBitsBase2(0, 1);
// $ExpectType string
address4.binaryZeroPad();

// $ExpectType boolean
address4.isValid();
// $ExpectType boolean
address4.isCorrect();
// $ExpectType boolean
address4.isInSubnet(address4);

// Test Address6 Typings
const address6 = new ipAddress.Address6('127.0.0.1');

const address6Valid = address6.valid;
const address6String = address6.address;
const address6Groups = address6.groups;
const address6v4 = address6.v4;
const address6Subnet = address6.subnet;
const address6Mask = address6.subnetMask;

// $ExpectType Address6
address6.startAddress();
// $ExpectType Address6
address6.endAddress();
// $ExpectType Address6
address6.to6to4();

// $ExpectType string
address6.microsoftTranscription();
// $ExpectType string
address6.mask();
// $ExpectType string
address6.mask(0);
// $ExpectType string
address6.possibleSubnets();
// $ExpectType string
address6.possibleSubnets(1);
// $ExpectType string
address6.getScope();
// $ExpectType IPv6Type
address6.getType();
// $ExpectType string
address6.getBitsBase2(0, 1);
// $ExpectType string
address6.getBitsBase16(0, 1);
// $ExpectType string
address6.getBitsPastSubnet();
// $ExpectType string
address6.reverseForm();
// $ExpectType string
address6.correctForm();
// $ExpectType string
address6.binaryZeroPad();
// $ExpectType string
address6.canonicalForm();
// $ExpectType string
address6.decimal();
// $ExpectType string
address6.to4();
// $ExpectType string
address6.to4in6();
// $ExpectType TeredoProperties
address6.inspectTeredo();
// $ExpectType SixToFourProperties
address6.inspect6to4();

// $ExpectType string
ipAddress.simpleGroup(address6.address, 1);
// $ExpectType string
ipAddress.spanAll(address6.address);
// $ExpectType string
ipAddress.spanAllZeroes(address6.address);
// $ExpectType string
ipAddress.spanLeadingZeroes(address6.address);
