// Type definitions for joi-phone-number 5.0
// Project: https://github.com/Salesflare/joi-phone-number
// Definitions by: Marvin Witt <https://github.com/NurMarvin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'joi';

declare module 'joi' {
    interface PhoneNumberOptions {
        defaultCountry?: string[] | string;
        strict?: boolean;
        format?: 'e164' | 'international' | 'national' | 'rfc3966';
    }

    interface StringSchema extends AnySchema {
        phoneNumber(options?: PhoneNumberOptions): this;
    }
}
