// Type definitions for iban.js 0.0.5
// Project: https://github.com/arhs/iban.js/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @summary Interface for {@link IBAN} object.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface IBANStatic {
    /**
     * @summary Returns the IBAN in a electronic format.
     * @param {string} iban The IBAN to convert.
     * @param {string} The IBAN in electronic format.
     */
    electronicFormat(iban: string): string;

    /** 
     * @summary Convert the passed BBAN to an IBAN for this country specification.
     * @param {string} countryCode The country of the BBAN.
     * @param {string} bban The BBAN to convert to IBAN.
     * @returns {string} The IBAN.
     */ 
    fromBBAN(countryCode: string, bban: string): string;

    /**
     * @summary Check if the passed iban is valid according to this specification.
     * @param {string} iban The iban to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    isValid(iban: string): boolean;

    /**
     * @summary Check of the passed BBAN is valid.
     * @param {string} countryCode The country of the BBAN.
     * @param {string} bban The BBAN to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    isValidBBAN(countryCode: string, bban: string): boolean;

    /** 
     * @summary Returns the IBAN in a print format.
     * @param {string} iban The IBAN to convert.
     * @param {string} The IBAN in print format.
     */
    printFormat(iban: string, separator: string[]): string;

    /**
     * @summary Convert the passed IBAN to a country-specific BBAN.
     * @param {string} iban The IBAN to convert.
     * @param {string[]} Separator the separator to use between BBAN blocks.
     * @returns {string} The BBAN
     */
    toBBAN(iban: string, separator: string[]): string;
}

declare var IBAN: IBANStatic;

declare module 'iban' {
  export = IBAN;
}
