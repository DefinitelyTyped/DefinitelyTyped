$('#phone').intlTelInput();

$('#phone').intlTelInput({
  customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
    return 'e.g. ' + selectedCountryPlaceholder;
  }
});

$('#phone').intlTelInput({
  geoIpLookup: function(callback) {
    $.get('http://ipinfo.io', function() {}, 'jsonp').always(function(resp) {
      let countryCode = (resp && resp.country) ? <string> resp.country : '';
      callback(countryCode);
    });
  }
});

$('#phone').intlTelInput('destroy');

let extension = $('#phone').intlTelInput('getExtension');

let intlNumber = $('#phone').intlTelInput('getNumber');
let ntlNumber = $('#phone').intlTelInput('getNumber', intlTelInputUtils.numberFormat.NATIONAL);

let numberType = $('#phone').intlTelInput('getNumberType');
if (numberType === intlTelInputUtils.numberType.MOBILE) {}

let selectedCountryData = $('#phone').intlTelInput('getSelectedCountryData');

let error = $('#phone').intlTelInput('getValidationError');
if (error === intlTelInputUtils.validationError.TOO_SHORT) {}

let isValid = $('#phone').intlTelInput('isValidNumber');

$('#phone').intlTelInput('setCountry', 'gb');

$('#phone').intlTelInput('setNumber', '+447733123456');

let countryData = $.fn.intlTelInput.getCountryData();

$.fn.intlTelInput.loadUtils('build/js/utils.js');

$('#phone').intlTelInput({
  utilsScript: '../../build/js/utils.js'
});

$('#phone').intlTelInput({
  initialCountry: 'auto',
  geoIpLookup: function(callback) {
    $.get('http://ipinfo.io', function() {}, 'jsonp').always(function(resp) {
      let countryCode = (resp && resp.country) ? resp.country : '';
      callback(countryCode);
    });
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
