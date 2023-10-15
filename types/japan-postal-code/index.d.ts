// Type definitions for japan-postal-code 0.2
// Project: https://github.com/mzp/japan-postal-code
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JapanPostalCode {
    interface Callback {
        (address: AddressData): void;
    }

    interface AddressData {
        prefecture: string;
        city: string;
        area: string;
        street: string;
    }
}

declare function get(zip_code: string, callback: JapanPostalCode.Callback): void;

declare const JapanPostalCode: {
    get: typeof get;
};
export = JapanPostalCode;
