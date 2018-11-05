/// <reference types="jquery" />

$('#phone').intlTelInput();

$('#phone').intlTelInput({
    customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
        return 'e.g. ' + selectedCountryPlaceholder;
    }
});

$('#phone').intlTelInput({
    placeholderNumberType: intlTelInputUtils.numberType.MOBILE,
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

$('#phone').intlTelInput('setPlaceholderNumberType', intlTelInputUtils.numberType.FIXED_LINE);

const jqueryCountryData = window.intlTelInputGlobals.getCountryData();
const jqueryCountry = countryData[0];
const jqueryDialCode = country.dialCode;
const jqueryIso2 = country.iso2;
const jqueryName = country.name;

window.intlTelInputGlobals.loadUtils('build/js/utils.js');

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
