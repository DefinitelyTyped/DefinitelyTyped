// Type definitions for iban.js 0.0.14
// Project: https://github.com/arhs/iban.js/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Piotr Błażejewicz <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @summary Interface for {@link IBAN} object.
 * Cyril Schumacher
 */
// tslint:disable:interface-name that is generic name
interface IBANStatic {
    /**
     * @summary Returns the IBAN in a electronic format.
     * @param iban The IBAN to convert.
     * @param The IBAN in electronic format.
     */
    electronicFormat(iban: string): string;

    /**
     * @summary Convert the passed BBAN to an IBAN for this country specification.
     * @param countryCode The country of the BBAN.
     * @param bban The BBAN to convert to IBAN.
     * @returns The IBAN.
     */
    fromBBAN(countryCode: string, bban: string): string;

    /**
     * @summary Check if the passed iban is valid according to this specification.
     * @param iban The iban to validate.
     * @returns True if valid, false otherwise.
     */
    isValid(iban: string): boolean;

    /**
     * @summary Check of the passed BBAN is valid.
     * @param countryCode The country of the BBAN.
     * @param bban The BBAN to validate.
     * @returns True if valid, false otherwise.
     */
    isValidBBAN(countryCode: string, bban: string): boolean;

    /**
     * @summary Returns the IBAN in a print format.
     * @param iban The IBAN to convert.
     * @param [separator] The separator to use between IBAN blocks, defaults to ' '.
     */
    printFormat(iban: string, separator?: string): string;

    /**
     * @summary Convert the passed IBAN to a country-specific BBAN.
     * @param iban The IBAN to convert.
     * @param [separator] The separator to use between BBAN blocks, defaults to ' '.
     * @returns The BBAN
     */
    toBBAN(iban: string, separator?: string): string;
}

declare var IBAN: IBANStatic;

export = IBAN;
export as namespace IBAN;
