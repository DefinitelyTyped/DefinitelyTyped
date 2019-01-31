/// <reference types="jquery" />

// Global

// $ExpectType (node: Element, options?: Options) => Plugin
intlTelInput;

// Normal version

const input = document.querySelector("#phone");
window.intlTelInput(input);

window.intlTelInput(input, {
    customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
        return 'e.g. ' + selectedCountryPlaceholder;
    }
});

window.intlTelInput(input, {
    placeholderNumberType: "MOBILE",
});

window.intlTelInput(input, {
    geoIpLookup(callback) {
        const countryCode = 'XY';
        callback(countryCode);
    }
});

window.intlTelInput(input).destroy();

const extension = window.intlTelInput(input).getExtension();

const intlNumber = window.intlTelInput(input).getNumber();
const ntlNumber = window.intlTelInput(input).getNumber(intlTelInputUtils.numberFormat.NATIONAL);

const numberType = window.intlTelInput(input).getNumberType();
if (numberType === intlTelInputUtils.numberType.MOBILE) { }

const selectedCountryData = window.intlTelInput(input).getSelectedCountryData();

const error = window.intlTelInput(input).getValidationError();
if (error === intlTelInputUtils.validationError.TOO_SHORT) { }

const isValid = window.intlTelInput(input).isValidNumber();

window.intlTelInput(input).setCountry('gb');

window.intlTelInput(input).setNumber('+447733123456');

window.intlTelInput(input).setPlaceholderNumberType("FIXED_LINE");

const countryData = window.intlTelInputGlobals.getCountryData();
const country = countryData[0];
const dialCode = country.dialCode;
const iso2 = country.iso2;
const countryName = country.name;

window.intlTelInputGlobals.loadUtils('build/js/utils.js');

window.intlTelInput(input, {
    utilsScript: '../../build/js/utils.js'
});

window.intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
        const countryCode = 'XY';
        callback(countryCode);
    },
    utilsScript: '../../build/js/utils.js'
});

window.intlTelInput(input, {
    nationalMode: true,
    utilsScript: '../../build/js/utils.js'
});

window.intlTelInput(input, {
    onlyCountries: ['al'],
    utilsScript: '../../build/js/utils.js'
});

window.intlTelInput(input, {
    allowDropdown: false,
    autoHideDialCode: false,
    autoPlaceholder: "aggressive",
    dropdownContainer: document.body,
    excludeCountries: ["us", "uk"],
    formatOnDisplay: false,
    hiddenInput: "hidden-input",
    localizedCountries: { de: "Deutschland" },
    preferredCountries: ["us", "gb"],
    separateDialCode: false
});

// jQuery-wrapped version

$('#phone').intlTelInput();

$('#phone').intlTelInput({
    customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
        return 'e.g. ' + selectedCountryPlaceholder;
    }
});

$('#phone').intlTelInput({
    placeholderNumberType: "MOBILE",
});

$('#phone').intlTelInput({
    geoIpLookup: (callback) => {
        const countryCode = 'XY';
        callback(countryCode);
    }
});

$('#phone').intlTelInput('destroy');

const jqueryExtension = $('#phone').intlTelInput('getExtension');

const jqueryIntlNumber = $('#phone').intlTelInput('getNumber');
const jqueryNtlNumber = $('#phone').intlTelInput('getNumber', intlTelInputUtils.numberFormat.NATIONAL);

const jqueryNumberType = $('#phone').intlTelInput('getNumberType');
if (numberType === intlTelInputUtils.numberType.MOBILE) { }

const jquerySelectedCountryData = $('#phone').intlTelInput('getSelectedCountryData');

const jqueryError = $('#phone').intlTelInput('getValidationError');
if (error === intlTelInputUtils.validationError.TOO_SHORT) { }

const jqueryIsValid = $('#phone').intlTelInput('isValidNumber');

$('#phone').intlTelInput('setCountry', 'gb');

$('#phone').intlTelInput('setNumber', '+447733123456');

$('#phone').intlTelInput('setPlaceholderNumberType', "FIXED_LINE");

$('#phone').intlTelInput({
    utilsScript: '../../build/js/utils.js'
});

$('#phone').intlTelInput({
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
        const countryCode = 'XY';
        callback(countryCode);
    },
    utilsScript: '../../build/js/utils.js'
});

$('#phone').intlTelInput({
    nationalMode: true,
    utilsScript: '../../build/js/utils.js'
});

$('#phone').intlTelInput({
    onlyCountries: ['al'],
    utilsScript: '../../build/js/utils.js'
});

$('#phone').intlTelInput({
    allowDropdown: false,
    autoHideDialCode: false,
    autoPlaceholder: "aggressive",
    dropdownContainer: document.body,
    excludeCountries: ["us", "uk"],
    formatOnDisplay: false,
    hiddenInput: "hidden-input",
    localizedCountries: { de: "Deutschland" },
    preferredCountries: ["us", "gb"],
    separateDialCode: false
});
