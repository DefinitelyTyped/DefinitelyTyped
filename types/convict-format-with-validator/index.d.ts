// Type definitions for convict-format-with-validators 6.0
// Project: https://github.com/mozilla/node-convict/tree/master/packages/convict-format-with-validator
// Definitions by: Louis Tung <https://github.com/louis79719>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as convict from 'convict';

declare var validators: {
    email: convict.Format;
    ipaddress: convict.Format;
    url: convict.Format;
};

export = validators;
