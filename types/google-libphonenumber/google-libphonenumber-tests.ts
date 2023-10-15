import libphonenumber = require("google-libphonenumber");
import {
    AsYouTypeFormatter,
    PhoneNumberFormat,
    PhoneNumberUtil,
    RegionCode,
    RegionCodeUnknown,
    ShortNumberInfo,
} from "google-libphonenumber";

(() => {
    // Require `PhoneNumberFormat`.
    var PNF = libphonenumber.PhoneNumberFormat;

    // Get an instance of `PhoneNumberUtil`.
    var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    // Parse number with country code.
    var phoneNumber = phoneUtil.parse("202-456-1414", "US");

    // Print number in the international format.
    console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
    // => +1 202-456-1414

    // Print number in the original format.
    console.log(phoneUtil.formatInOriginalFormat(phoneNumber));
    // => (202) 456-1414

    // Print number in the original format with specified region.
    console.log(phoneUtil.formatInOriginalFormat(phoneNumber, "US"));
    // => (202) 456-1414

    // $ExpectType number
    phoneUtil.getLengthOfNationalDestinationCode(phoneNumber);
});

(() => {
    // Require `AsYouTypeFormatter`.
    var AsYouTypeFormatter = libphonenumber.AsYouTypeFormatter;
    var formatter = new AsYouTypeFormatter("US");

    console.log(formatter.inputDigit("6")); // => 6
    console.log(formatter.inputDigit("5")); // => 65
    console.log(formatter.inputDigit("0")); // => 650
    console.log(formatter.inputDigit("2")); // => 650-2
    console.log(formatter.inputDigit("5")); // => 650-25
    console.log(formatter.inputDigit("3")); // => 650-253
    console.log(formatter.inputDigit("2")); // => 650-2532
    console.log(formatter.inputDigit("2")); // => (650) 253-22

    formatter.clear();
});

// Get instance of `PhoneNumberUtil`
var phoneNumberUtil = PhoneNumberUtil.getInstance();

// phone code should be a number
phoneNumberUtil.getCountryCodeForRegion("IT"); // $ExpectType number

const aNumber = phoneNumberUtil.parse("+39 02-12345678", "IT");
phoneNumberUtil.getNationalSignificantNumber(aNumber); // $ExpectType string

phoneNumberUtil.getRegionCodeForCountryCode(0); // $ExpectType RegionCode | "ZZ"

// Get instance of `ShortNumberInfo`
const shortInfo = ShortNumberInfo.getInstance();
const phoneNumber = phoneNumberUtil.parse("123456", "FR");
const regionCode: RegionCode = "FR";

shortInfo.isPossibleShortNumberForRegion(phoneNumber, regionCode); // $ExpectType boolean
shortInfo.isPossibleShortNumber(phoneNumber); // $ExpectType boolean
shortInfo.isValidShortNumberForRegion(phoneNumber, regionCode); // $ExpectType boolean
shortInfo.isValidShortNumber(phoneNumber); // $ExpectType boolean
shortInfo.getExpectedCostForRegion(phoneNumber, regionCode); // $ExpectType ShortNumberCost
shortInfo.getExpectedCost(phoneNumber); // $ExpectType ShortNumberCost
shortInfo.connectsToEmergencyNumber("911", "US"); // $ExpectType boolean
shortInfo.isEmergencyNumber("911", "US"); // $ExpectType boolean
shortInfo.isCarrierSpecific(phoneNumber); // $ExpectType boolean
shortInfo.isCarrierSpecificForRegion(phoneNumber, regionCode); // $ExpectType boolean
shortInfo.isSmsServiceForRegion(phoneNumber, regionCode); // $ExpectType boolean
