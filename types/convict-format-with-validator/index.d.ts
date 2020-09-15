// Type definitions for convict-format-with-validators 6.0
// Project: https://github.com/jshttp/cookie
// Definitions by: Louis Tung <https://github.com/louis79719>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as convict from 'convict';

declare namespace convictValidators {
    interface validators {
        email: convict.Format;
        ipaddress: convict.Format;
        url: convict.Format;
    }
}

declare var validators: convictValidators.validators;

export = validators;
