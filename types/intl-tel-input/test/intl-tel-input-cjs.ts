import intlTelInput = require('intl-tel-input');

const countryData = window.intlTelInputGlobals.getCountryData();
const input = document.querySelector('#phone')!;
const iti = intlTelInput(input, {
    customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
        return 'e.g. ' + selectedCountryPlaceholder;
    },
    utilsScript: 'node_modules/intl-tel-input/build/js/utils.js',
    initialCountry: 'auto',
    geoIpLookup: success => {
        //
    },
    nationalMode: true,
    onlyCountries: [
        'al',
        'ad',
        'at',
        'by',
        'be',
        'ba',
        'bg',
        'hr',
        'cz',
        'dk',
        'ee',
        'fo',
        'fi',
        'fr',
        'de',
        'gi',
        'gr',
        'va',
        'hu',
        'is',
        'ie',
        'it',
        'lv',
        'li',
        'lt',
        'lu',
        'mk',
        'mt',
        'md',
        'mc',
        'me',
        'nl',
        'no',
        'pl',
        'pt',
        'ro',
        'ru',
        'sm',
        'rs',
        'sk',
        'si',
        'es',
        'se',
        'ch',
        'ua',
        'gb',
    ],
    hiddenInput: 'full_phone',
    placeholderNumberType: 'FIXED_LINE',
});
iti.promise.then(() => {
    console.log(intlTelInputUtils.numberFormat.E164);
});

intlTelInput; // $ExpectType (node: Element, options?: Options | undefined) => Plugin
// @ts-expect-error
const options: IntlTelInput.Options = {
    allowDropdown: true,
};

window.intlTelInputGlobals.version; // $ExpectType string
window.intlTelInputGlobals.defaults; // $ExpectType Options
