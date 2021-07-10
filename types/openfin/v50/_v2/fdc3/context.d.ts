/**
 * TypeScript definitions for context objects.
 *
 * These structures are defined by the Contexts FDC3 working group. This contains the Context interface for you to create your own
 * contexts, as well as a set of standard contexts agreed by the FDC3 working group.
 *
 * @module Contexts
 */
/**
 * General-purpose context type, as defined by [FDC3](https://fdc3.finos.org/docs/1.0/context-intro).
 * A context object is a well-understood datum that is streamable between FDC3 participants. As a result
 * it has a field describing what type it is, and data indicating its identity. Use this as a base
 * to derive your own with any custom properties or metadata.
 */
export interface Context {
    /**
     * The type of the context that uniquely identifies it, e.g. "fdc3.instrument".
     * This is used to refer to the accepted context(s) when declaring intents. See [[AppDirIntent]].
     */
    type: string;
    /**
     * The name of the context data (optional). This is a text string that describes the data being sent.
     * Implementors of context may choose to make the name mandatory.
     */
    name?: string | undefined;
    /**
     * An optional map of any equivalent identifiers for the context type, e.g. ISIN, CUSIP, etc. for an instrument.
     */
    id?: {
        [key: string]: string | undefined;
    } | undefined;
    /**
     * @hidden
     * Custom properties and metadata. This can be extended in specific context object.
     */
    [key: string]: unknown;
}
/**
 * Built-in context to define a contact.
 */
export interface ContactContext extends Context {
    /**
     * The context type is always 'fdc3.contact'.
     */
    type: 'fdc3.contact';
    /**
     * Free text name of the contact.
     */
    name: string;
    /**
     * The contact data. Can contain some or all of:
     * * `email`: Email address
     * * `twitter`: Twitter handle
     * * `phone`: Phone number
     */
    id: {
        [key: string]: string;
    } & {
        email?: string | undefined;
        twitter?: string | undefined;
        phone?: string | undefined;
    };
}
/**
 * Built-in context to define a financial instrument.
 */
export interface InstrumentContext extends Context {
    /**
     * The context type is always 'fdc3.instrument'.
     */
    type: 'fdc3.instrument';
    /**
     * Optional free text name of the instrument.
     */
    name?: string | undefined;
    /**
     * The instrument data. Can contain some or all of:
     * * `ticker`: a ticker
     * * `ISIN`: [ISIN](https://www.isin.org/isin/)
     * * `CUSIP`: [CUSIP](https://www.cusip.com/cusip/index.htm)
     * * `SEDOL`: [SEDOL](https://www.londonstockexchange.com/products-and-services/reference-data/sedol-master-file/sedol-master-file.htm)
     * * `RIC`: [Reuters Instrument Code (RIC)](https://en.wikipedia.org/wiki/Reuters_Instrument_Code)
     * * `BBG`: [Bloomberg Ticker](https://www.bloomberg.com/professional/product/market-data/)
     * * `PERMID`: [PERMID](https://permid.org/)
     * * `FIGI`: [FIGI](https://www.openfigi.com/about/figi)
     */
    id: {
        [key: string]: string;
    } & {
        ticker?: string | undefined;
        ISIN?: string | undefined;
        CUSIP?: string | undefined;
        SEDOL?: string | undefined;
        RIC?: string | undefined;
        BBG?: string | undefined;
        PERMID?: string | undefined;
        FIGI?: string | undefined;
    };
}
/**
 * Built-in context to define an organization.
 */
export interface OrganizationContext extends Context {
    /**
     * The context type is always fdc3.organization.
     */
    type: 'fdc3.organization';
    /**
     * Optional free text name of the organization.
     */
    name?: string | undefined;
    /**
     * The organization data. Can contain either or both
     * * `LEI`: [LEI](https://www.gleif.org/en/about-lei/introducing-the-legal-entity-identifier-lei)
     * * `PERMID`: [PERMID](https://permid.org/)
     */
    id: {
        [key: string]: string;
    } & {
        LEI?: string | undefined;
        PERMID?: string | undefined;
    };
}
