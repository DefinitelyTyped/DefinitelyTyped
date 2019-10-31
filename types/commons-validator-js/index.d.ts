// Type definitions for commons-validator-js 1.0
// Project: https://github.com/wix/commons-validator-js
// Definitions by: Robert Mruczek <https://github.com/rtmruczek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class EmailValidator {
  /**
   * @param allowLocal   Should local addresses be considered valid? default = false
   * @param allowTld     Should TLDs be allowed? default = false
   */
  constructor({allowLocal, allowTld}?: {allowLocal: boolean, allowTld: boolean});
  isValid: (email: string) => boolean;
}

export class DomainValidator {
  /**
   * @param allowLocal   Should local addresses be considered valid? default = false
   */
  constructor({allowLocal}?: {allowLocal: boolean});
  isValidCountryCodeTld: (ccTld: string) => boolean;
  isValidGenericTld: (gTld: string) => boolean;
  isValidInfrastructureTld: (iTld: string) => boolean;
  isValidTld: (tld: string) => boolean;
  extractTld: (domain: string) => string | null;
  isValid: (domain: string) => boolean;
}
