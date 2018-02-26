declare namespace addressparser {
    interface Address {
        name: string;
        address: string;
    }
}

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
 * @return An array of address objects
 */
declare function addressparser(address: string): addressparser.Address[];

export = addressparser;
