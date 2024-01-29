// $ExpectType (node: Element, options?: Options | undefined) => Plugin
intlTelInput;

// Normal version

const input = document.querySelector("#phone")!;
window.intlTelInput(input);

window.intlTelInput(input, {
    customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
        return "e.g. " + selectedCountryPlaceholder;
    },
});

window.intlTelInput(input, {
    placeholderNumberType: "MOBILE",
});

window.intlTelInput(input, {
    customContainer: "custom-class",
});

window.intlTelInput(input, {
    geoIpLookup(callback) {
        const countryCode = "XY";
        callback(countryCode);
    },
});

window.intlTelInput(input).destroy();

const extension = window.intlTelInput(input).getExtension();

const intlNumber = window.intlTelInput(input).getNumber();
const ntlNumber = window.intlTelInput(input).getNumber(intlTelInputUtils.numberFormat.NATIONAL);

const numberType = window.intlTelInput(input).getNumberType();
if (numberType === intlTelInputUtils.numberType.MOBILE) {
}

const selectedCountryData = window.intlTelInput(input).getSelectedCountryData();

const error = window.intlTelInput(input).getValidationError();
if (error === intlTelInputUtils.validationError.TOO_SHORT) {
}

const isValid = window.intlTelInput(input).isValidNumber();

window.intlTelInput(input).setCountry("gb");

window.intlTelInput(input).setNumber("+447733123456");

window.intlTelInput(input).setPlaceholderNumberType("FIXED_LINE");

const countryData = window.intlTelInputGlobals.getCountryData();
const country = countryData[0];
const dialCode = country.dialCode;
const iso2 = country.iso2;
const countryName = country.name;
// $ExpectType number
const priority = country.priority;
// $ExpectType string[] | null
const areaCodes = country.areaCodes;

window.intlTelInputGlobals.loadUtils("build/js/utils.js");

window.intlTelInput(input, {
    utilsScript: "../../build/js/utils.js",
});

window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: callback => {
        const countryCode = "XY";
        callback(countryCode);
    },
    utilsScript: "../../build/js/utils.js",
});

window.intlTelInput(input, {
    nationalMode: true,
    utilsScript: "../../build/js/utils.js",
});

window.intlTelInput(input, {
    onlyCountries: ["al"],
    utilsScript: "../../build/js/utils.js",
});

window.intlTelInput(input, {
    allowDropdown: false,
    autoInsertDialCode: false,
    autoPlaceholder: "aggressive",
    dropdownContainer: document.body,
    excludeCountries: ["us", "uk"],
    formatOnDisplay: false,
    hiddenInput: "hidden-input",
    localizedCountries: { de: "Deutschland" },
    preferredCountries: ["us", "gb"],
    separateDialCode: false,
});

const iti = window.intlTelInputGlobals.getInstance(input);
iti.isValidNumber(); // etc

// $ExpectType string
intlTelInputUtils.formatNumber("07733123456", "gb", intlTelInputUtils.numberFormat.INTERNATIONAL);
// $ExpectType string
intlTelInputUtils.getExampleNumber("gb", false, intlTelInputUtils.numberType.MOBILE);
// $ExpectType numberType
intlTelInputUtils.getNumberType("07733123456", "gb");
// $ExpectType string
intlTelInputUtils.getValidationError("07733123456", "gb");
// $ExpectType string
intlTelInputUtils.isValidNumber("07733123456", "gb");
