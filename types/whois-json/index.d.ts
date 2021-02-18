// Type definitions for whois-json 2.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Hwai-En Ho <https://github.com/hwaien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Perform a WHOIS lookup.
 *
 * @param domainName - The domain name on which to perform the lookup.
 * @param options - Options to tweak the behavior of a WHOIS lookup.
 */
export default function whois(domainName: string, options?: WhoisOptions): Promise<WhoisResult>;

/** The result of a WHOIS lookup. */
export interface WhoisResult {
    domainName: string;
    registryDomainId: string;
    registrarWhoisServer: string;
    registrarUrl: string;
    updatedDate: string;
    creationDate: string;
    registrarRegistrationExpirationDate: string;
    registrar: string;
    registrarIanaId: string;
    registrarAbuseContactEmail: string;
    registrarAbuseContactPhone: string;
    domainStatus: string;
    registrantName: string;
    registrantOrganization: string;
    registrantStreet: string;
    registrantCity: string;
    registrantStateProvince: string;
    registrantPostalCode: string;
    registrantCountry: string;
    registrantPhone: string;
    registrantEmail: string;
    adminName: string;
    adminOrganization: string;
    adminStreet: string;
    adminCity: string;
    adminStateProvince: string;
    adminPostalCode: string;
    adminCountry: string;
    adminPhone: string;
    adminEmail: string;
    techName: string;
    techOrganization: string;
    techStreet: string;
    techCity: string;
    techStateProvince: string;
    techPostalCode: string;
    techCountry: string;
    techPhone: string;
    techEmail: string;
    nameServer: string;
    dnssec: string;
    urlOfTheIcannWhoisDataProblemReportingSystem: string;
    lastUpdateOfWhoisDatabase: string;
}

/**
 * The version of SOCKS protocol to exchange network packets between a client and server through a proxy server.
 */
export enum SocksProtocolVersion {
    /**
     * The SOCKS4 protocol.
     */
    SOCKS4 = 4,
    /**
     * The SOCKS5 protocol.
     * 
     * @see - https://tools.ietf.org/html/rfc1928
     */
    SOCKS5 = 5
}

/**
 * A network endpoint.
 */
export interface Endpoint {
    /** The hostname of the endpoint. */
    host: string,
    /** The port number of the endpoint. */
    port: number
}

/**
 * SOCKS proxy.
 */
export interface SocksProxy extends Endpoint {
    type: SocksProtocolVersion
}

/**
 * Options to tweak the behavior of a WHOIS lookup.
 */
export interface WhoisOptions {
    /** WHOIS server */
    server?: string | Endpoint,
    /** number of times to follow redirects */
    follow?: number,
    /** socket timeout in milliseconds */
    timeout?: number,
    /** show verbose results */
    verbose?: boolean,
    /** bind to a local IP address */
    bind?: string,
    /** SOCKS proxy */
    proxy?: string | SocksProxy
}