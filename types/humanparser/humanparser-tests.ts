import human = require('humanparser');

let parsedName = human.parseName("Mr. William R. Hearst, III");
// $ExpectType string | undefined
parsedName.firstName;
// $ExpectType string
parsedName.lastName;
// $ExpectType string
parsedName.fullName;
// $ExpectType string | undefined
parsedName.suffix;
// $ExpectType string | undefined
parsedName.middleName;
// $ExpectType string | undefined
parsedName.salutation;

let parsedNameWithSuffixIgnored = human.parseName("Mr. William R. Hearst, III", ['III']);
// $ExpectType string | undefined
parsedNameWithSuffixIgnored.firstName;
// $ExpectType string
parsedNameWithSuffixIgnored.lastName;
// $ExpectType string
parsedNameWithSuffixIgnored.fullName;
// $ExpectType string | undefined
parsedNameWithSuffixIgnored.suffix;
// $ExpectType string | undefined
parsedNameWithSuffixIgnored.middleName;
// $ExpectType string | undefined
parsedNameWithSuffixIgnored.salutation;

let parsedNameWithNoFirstName = human.parseName("Master Yoda");
// $ExpectType string | undefined
parsedNameWithSuffixIgnored.firstName;
// $ExpectType string
parsedNameWithSuffixIgnored.lastName;
// $ExpectType string
parsedNameWithSuffixIgnored.fullName;

let parsedAddress = human.parseAddress("123 Happy Street, Honolulu, HI  65780");
// $ExpectType string
parsedAddress.address;
// $ExpectType string
parsedAddress.state;
// $ExpectType string
parsedAddress.fullAddress;
// $ExpectType string
parsedAddress.zip;
// $ExpectType string
parsedAddress.city;

let parsedFullName = human.getFullestName("John & Peggy Sue");
// $ExpectType string
parsedFullName.fullName;
