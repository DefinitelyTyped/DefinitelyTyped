
import libphonenumber = require('google-libphonenumber');
import { PhoneNumberFormat, PhoneNumberUtil, AsYouTypeFormatter } from 'google-libphonenumber';

() => {
    // Require `PhoneNumberFormat`.
    var PNF = libphonenumber.PhoneNumberFormat;

    // Get an instance of `PhoneNumberUtil`.
    var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    // Parse number with country code.
    var phoneNumber = phoneUtil.parse('202-456-1414', 'US');

    // Print number in the international format.
    console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
    // => +1 202-456-1414
}

() => {
    // Require `AsYouTypeFormatter`.
    var AsYouTypeFormatter = libphonenumber.AsYouTypeFormatter;
    var formatter = new AsYouTypeFormatter('US');

    console.log(formatter.inputDigit('6')); // => 6
    console.log(formatter.inputDigit('5')); // => 65
    console.log(formatter.inputDigit('0')); // => 650
    console.log(formatter.inputDigit('2')); // => 650-2
    console.log(formatter.inputDigit('5')); // => 650-25
    console.log(formatter.inputDigit('3')); // => 650-253
    console.log(formatter.inputDigit('2')); // => 650-2532
    console.log(formatter.inputDigit('2')); // => (650) 253-22

    formatter.clear();
}
