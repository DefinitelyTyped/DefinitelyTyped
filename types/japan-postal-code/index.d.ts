// Type definitions for japan-postal-code 0.2
// Project: https://github.com/mzp/japan-postal-code
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export as namespace JapanPostalCodeLibrary;

export = JapanPostalCode;

declare abstract class JapanPostalCode {
  static get: JapanPostalCode.FetchPostalCodeMethod; 
}


declare namespace JapanPostalCode {

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
