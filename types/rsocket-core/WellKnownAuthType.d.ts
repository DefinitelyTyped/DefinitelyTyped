export default class WellKnownAuthType {
    constructor(str: string, identifier: number);

    /**
     * Find the {@link WellKnownAuthType} for the given identifier (as an {@link number}). Valid
     * identifiers are defined to be integers between 0 and 127, inclusive. Identifiers outside of
     * this range will produce the {@link #UNPARSEABLE_AUTH_TYPE}. Additionally, some identifiers in
     * that range are still only reserved and don't have a type associated yet: this method returns
     * the {@link #UNKNOWN_RESERVED_AUTH_TYPE} when passing such an identifier, which lets call sites
     * potentially detect this and keep the original representation when transmitting the associated
     * metadata buffer.
     *
     * @param id the looked up identifier
     * @return the {@link WellKnownAuthType}, or {@link #UNKNOWN_RESERVED_AUTH_TYPE} if the id is out
     *     of the specification's range, or {@link #UNKNOWN_RESERVED_AUTH_TYPE} if the id is one that
     *     is merely reserved but unknown to this implementation.
     */
    static fromIdentifier(id: number): WellKnownAuthType;

    /**
     * Find the {@link WellKnownAuthType} for the given {@link String} representation. If the
     * representation is {@code null} or doesn't match a {@link WellKnownAuthType}, the {@link
     * #UNPARSEABLE_AUTH_TYPE} is returned.
     *
     * @param authTypeString the looked up mime type
     * @return the matching {@link WellKnownAuthType}, or {@link #UNPARSEABLE_AUTH_TYPE} if none
     *     matches
     */
    static fromString(authTypeString: string): WellKnownAuthType;

    /** @return the byte identifier of the auth type, guaranteed to be positive or zero. */
    readonly identifier: number;

    /**
     * @return the auth type represented as a {@link String}, which is made of US_ASCII compatible
     *     characters only
     */
    readonly string: string;

    /** @see string */
    toString(): string;
}

export const UNPARSEABLE_AUTH_TYPE: WellKnownAuthType;
export const UNKNOWN_RESERVED_AUTH_TYPE: WellKnownAuthType;

export const SIMPLE: WellKnownAuthType;
export const BEARER: WellKnownAuthType;

export const TYPES_BY_AUTH_ID: WellKnownAuthType[];
export const TYPES_BY_AUTH_STRING: Map<string, WellKnownAuthType>;
