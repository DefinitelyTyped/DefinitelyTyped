//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.publicSuffix
 */
export namespace PublicSuffix {
    /**
     * The available encoding types for the returned domain.
     */
    type DomainEncoding = "punycode" | "display";

    interface GetDomainOptionsType {
        /**
         * Determines how the returned domain should be encoded.
         * Optional.
         */
        encoding?: DomainEncoding;

        /**
         * If true, and the input hostname is an IP address, then this is returned as-is.
         * Optional.
         */
        allowIPAddress?: boolean;

        /**
         * If true, and the input hostname is itself a known eTLD (without a preceding label) then this is returned as-is.
         * Optional.
         */
        allowPlainSuffix?: boolean;

        /**
         * If true, and the input hostname lacks a known eTLD, and is neither itself a known eTLD nor an IP address,
         * then the returned domain consists of the penultimate two domain labels of the input.
         * Optional.
         */
        allowUnknownSuffix?: boolean;
    }

    interface Static {
        /**
         * Checks if the given hostname is itself a known public suffix / eTLD (i.e. in the PSL).
         *
         * @returns True if the given hostname is itself a known eTLD.
         */
        isKnownSuffix(hostname: string): boolean;

        /**
         * Gets the known public suffix / eTLD (i.e. in the PSL), if any, of a given hostname.
         *
         * @returns The known eTLD of the given hostname, or null if no such known eTLD exists.
         */
        getKnownSuffix(hostname: string): string;

        /**
         * Gets the eTLD+1 of a given hostname, or a variant such as IP address if the options allow.
         *
         * @param options Optional.
         * @returns The eTLD+1 (or a variant such as IP address if allowed) of the given hostname,
         * or null if no such eTLD+1 (variant) exists.
         */
        getDomain(hostname: string, options?: GetDomainOptionsType): string;
    }
}
