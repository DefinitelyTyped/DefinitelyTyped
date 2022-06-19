import human = require('humanparser');

let parsedName = human.parseName("Mr. William R. Hearst, III");
parsedName.firstName;
parsedName.lastName;
parsedName.fullName;
parsedName.suffix;
parsedName.middleName;
parsedName.salutation;

let parsedNameWithSuffixIgnored = human.parseName("Mr. William R. Hearst, III", ['III']);
parsedNameWithSuffixIgnored.firstName;
parsedNameWithSuffixIgnored.lastName;
parsedNameWithSuffixIgnored.fullName;
parsedNameWithSuffixIgnored.suffix;
parsedNameWithSuffixIgnored.middleName;
parsedNameWithSuffixIgnored.salutation;

let parsedAddress = human.parseAddress("123 Happy Street, Honolulu, HI  65780");
parsedAddress.address;
parsedAddress.state;
parsedAddress.fullAddress;
parsedAddress.zip;
parsedAddress.city;

let parsedFullName = human.getFullestName("John & Peggy Sue");
parsedFullName.fullName;
