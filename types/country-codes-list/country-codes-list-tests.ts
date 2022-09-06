import * as countryCodes from 'country-codes-list';

countryCodes.all();
countryCodes.findOne('countryCode', 'KR');
countryCodes.filter('countryCode', 'KR');
countryCodes.customList('countryCode', '+{countryCallingCode}: {countryNameLocal}');
countryCodes.customArray();
