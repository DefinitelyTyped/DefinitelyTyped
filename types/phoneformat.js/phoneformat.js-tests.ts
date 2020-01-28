import * as phoneFormat from 'phoneformat.js';

phoneFormat.cleanPhone('+1-202-555-0192'); // $ExpectType string
phoneFormat.countryCodeToName('US'); // $ExpectType string
phoneFormat.countryForE164Number('+1-202-555-0192'); // $ExpectType string
phoneFormat.exampleLandlineNumber('US'); // $ExpectType string
phoneFormat.exampleMobileNumber('+1-202-555-0192'); // $ExpectType string
phoneFormat.formatE164('US', '202-555-0192'); // $ExpectType string
phoneFormat.formatInternational('US', '202-555-0192'); // $ExpectType string
phoneFormat.formatLocal('US', '+1-202-555-0192'); // $ExpectType string
phoneFormat.formatNumberForMobileDialing('US', '+1-202-555-0192'); // $ExpectType string
phoneFormat.isValidNumber('202-555-0192', 'US'); // $ExpectType boolean
