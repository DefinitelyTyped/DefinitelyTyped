// Type definitions for joi-phone-number 5.0
// Project: https://github.com/Salesflare/joi-phone-number
// Definitions by: Marvin Witt <https://github.com/NurMarvin/>
//                 James Lismore <https://github.com/jlismore/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { StringSchema, Extension, Root, Reference } from 'joi';

declare module 'joi' {
    interface PhoneNumberOptions {
        defaultCountry?: string[] | string | Reference | undefined;
        strict?: boolean | Reference | undefined;
        format?: 'e164' | 'international' | 'national' | 'rfc3966' | Reference | undefined;
    }

    interface StringSchema {
        phoneNumber(options?: PhoneNumberOptions): this;
    }
}

interface StringExtension extends Extension {
    type: 'string';
    base: StringSchema;
}

declare function JoiStringFactory(joi: Root): StringExtension;
export = JoiStringFactory;
