// Type definitions for japan-postal-code 0.2
// Project: https://github.com/mzp/japan-postal-code
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace JapanPostalCodeLibrary;

export = JapanPostalCode;

declare const JapanPostalCode: JapanPostalCode.API;

declare namespace JapanPostalCode {
  export interface API {
    get: FetchPostalCodeMethod;
  }

  export interface FetchPostalCodeMethod {
    (stringifiedPostalCode: string, callback: Callback): void;
  }

  interface Callback {
    (addressData: AddressData): void;
  }

  export interface AddressData {
    prefecture: string;
    city: string;
    area: string;
    street: string;
  }
}
