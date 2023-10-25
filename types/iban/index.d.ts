/**
 * @summary Interface for {@link IBAN} object.
 * Cyril Schumacher
 */
// tslint:disable:interface-name that is generic name
interface IBANStatic {
    /**
     * An object containing all the known IBAN specifications
     */
    countries: Record<IBAN.Specification["countryCode"], IBAN.Specification>;

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

declare namespace IBAN {
    interface Specification {
        /** the code of the country */
        readonly countryCode: string;
        /** the length of the IBAN */
        readonly length: number;
        /*& the structure of the underlying BBAN (for validation and formatting) */
        readonly structure: string;
        /** an example valid IBAN */
        readonly example: string;
        /** Check if the passed iban is valid according to this specification. */
        isValid(iban: string): boolean;
        /**
         * Convert the passed IBAN to a country-specific BBAN.
         */
        toBBAN(iban: string, separator: string): string;
        /**
         * Convert the passed BBAN to an IBAN for this country specification.
         * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
         * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
         */
        fromBBAN(bban: string): string;
        /**
         * Check of the passed BBAN is valid.
         * This function only checks the format of the BBAN (length and matching the letetr/number specs) but does not
         * verify the check digit.
         */
        isValidBBAN(bban: string): boolean;
    }
}

export = IBAN;
export as namespace IBAN;
