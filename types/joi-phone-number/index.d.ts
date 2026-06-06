/// <reference types="node" />
import { Extension, Reference, Root, StringSchema } from "joi";

declare module "joi" {
    interface PhoneNumberOptions {
        defaultCountry?: string[] | string | Reference | undefined;
        strict?: boolean | Reference | undefined;
        format?: "e164" | "international" | "national" | "rfc3966" | Reference | undefined;
    }

    interface StringSchema {
        phoneNumber(options?: PhoneNumberOptions): this;
    }
}

interface StringExtension extends Extension {
    type: "string";
    base: StringSchema;
}

declare function JoiStringFactory(joi: Root): StringExtension;
export = JoiStringFactory;
