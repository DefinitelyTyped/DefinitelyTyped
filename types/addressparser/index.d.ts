/// <reference types="node" />

/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    'Name <address@domain>'
 *
 * will be converted to
 *
 *     [{name: 'Name', address: 'address@domain'}]
 *
 * @param str Address field
 */
declare function addressparser(str: string): addressparser.EmailAddress[];

declare namespace addressparser {
    /**
     * Address details.
     */
    interface EmailAddress {
        /**
         * The email address.
         */
        address: string;
        /**
         * The name part of the email/group.
         */
        name: string;
        /**
         * An array of grouped addresses.
         */
        group?: EmailAddress[] | undefined;
    }
}

export = addressparser;
