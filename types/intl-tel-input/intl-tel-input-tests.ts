import IntlTelInput = require("intl-tel-input");

const input = document.querySelector("#phone");
window.intlTelInput(input);

window.intlTelInput(input, {
    customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
        return 'e.g. ' + selectedCountryPlaceholder;
    }
});

window.intlTelInput(input, {
    placeholderNumberType: IntlTelInput.NumberType.MOBILE,
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
const ntlNumber = window.intlTelInput(input).getNumber(IntlTelInput.NumberFormat.NATIONAL);

const numberType = window.intlTelInput(input).getNumberType();
if (numberType === IntlTelInput.NumberType.MOBILE) { }

const selectedCountryData = window.intlTelInput(input).getSelectedCountryData();

const error = window.intlTelInput(input).getValidationError();
if (error === IntlTelInput.ValidationError.TOO_SHORT) { }

const isValid = window.intlTelInput(input).isValidNumber();

window.intlTelInput(input).setCountry('gb');

window.intlTelInput(input).setNumber('+447733123456');

window.intlTelInput(input).setPlaceholderNumberType(IntlTelInput.NumberType.FIXED_LINE);

const countryData = window.intlTelInput.getCountryData();
const country = countryData[0];
const dialCode = country.dialCode;
const iso2 = country.iso2;
const name = country.name;

window.intlTelInput.loadUtils('build/js/utils.js');

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
