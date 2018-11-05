/// <reference types="jquery" />

import * as IntlTelInput from "intl-tel-input";

$('#phone').intlTelInput();

$('#phone').intlTelInput({
  customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
    return 'e.g. ' + selectedCountryPlaceholder;
  }
});

$('#phone').intlTelInput({
  placeholderNumberType: IntlTelInput.NumberType.MOBILE,
});

$('#phone').intlTelInput({
  geoIpLookup: (callback) => {
      const countryCode = 'XY';
      callback(countryCode);
  }
});

$('#phone').intlTelInput('destroy');

const extension = $('#phone').intlTelInput('getExtension');

const intlNumber = $('#phone').intlTelInput('getNumber');
const ntlNumber = $('#phone').intlTelInput('getNumber', IntlTelInput.NumberFormat.NATIONAL);

const numberType = $('#phone').intlTelInput('getNumberType');
if (numberType === IntlTelInput.NumberType.MOBILE) {}

const selectedCountryData = $('#phone').intlTelInput('getSelectedCountryData');

const error = $('#phone').intlTelInput('getValidationError');
if (error === IntlTelInput.ValidationError.TOO_SHORT) {}

const isValid = $('#phone').intlTelInput('isValidNumber');

$('#phone').intlTelInput('setCountry', 'gb');

$('#phone').intlTelInput('setNumber', '+447733123456');

$('#phone').intlTelInput('setPlaceholderNumberType', IntlTelInput.NumberType.FIXED_LINE);

const countryData = $.fn.intlTelInput.getCountryData();
const country = countryData[0];
const dialCode = country.dialCode;
const iso2 = country.iso2;
const name = country.name;

$.fn.intlTelInput.loadUtils('build/js/utils.js');

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
  excludeCountries: [ "us", "uk" ],
  formatOnDisplay: false,
  hiddenInput: "hidden-input",
  localizedCountries: { de: "Deutschland"},
  preferredCountries: ["us", "gb"],
  separateDialCode: false
});
