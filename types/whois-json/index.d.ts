// Type definitions for whois-json 2.0
// Project: https://github.com/mikemaccana/whois-json
// Definitions by: Hwai-En Ho <https://github.com/hwaien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Whois {
    /**
     * The result of a WHOIS lookup. This can be either a single object of registration data,
     * or an array of multiple registration data paired with their originating server.
     */
    type Result = ResultArrayElement[] | RegistrationData;

    interface ResultArrayElement {
        server: string;
        data: RegistrationData;
    }

    interface RegistrationData {
        domainName?: string;
        registryDomainId?: string;
        registrarWhoisServer?: string;
        registrarUrl?: string;
        updatedDate?: string;
        creationDate?: string;
        registrarRegistrationExpirationDate?: string;
        registrar?: string;
        registrarIanaId?: string;
        registrarAbuseContactEmail?: string;
        registrarAbuseContactPhone?: string;
        domainStatus?: string;
        registrantName?: string;
        registrantOrganization?: string;
        registrantStreet?: string;
        registrantCity?: string;
        registrantStateProvince?: string;
        registrantPostalCode?: string;
        registrantCountry?: string;
        registrantPhone?: string;
        registrantEmail?: string;
        adminName?: string;
        adminOrganization?: string;
        adminStreet?: string;
        adminCity?: string;
        adminStateProvince?: string;
        adminPostalCode?: string;
        adminCountry?: string;
        adminPhone?: string;
        adminEmail?: string;
        techName?: string;
        techOrganization?: string;
        techStreet?: string;
        techCity?: string;
        techStateProvince?: string;
        techPostalCode?: string;
        techCountry?: string;
        techPhone?: string;
        techEmail?: string;
        nameServer?: string;
        dnssec?: string;
        urlOfTheIcannWhoisDataProblemReportingSystem?: string;
        lastUpdateOfWhoisDatabase?: string;
    }

    /**
     * Options to tweak the behavior of a WHOIS lookup.
     */
    interface Options {
        /** WHOIS server */
        server?: string | Endpoint;
        /** number of times to follow redirects */
        follow?: number;
        /** socket timeout in milliseconds */
        timeout?: number;
        /** show verbose results */
        verbose?: boolean;
        /** bind to a local IP address */
        bind?: string;
        /** SOCKS proxy */
        proxy?: string | SocksProxy;
    }

    /**
     * A network endpoint.
     */
    interface Endpoint {
        /** The hostname of the endpoint. */
        host: string;

        /** The port number of the endpoint. */
        port: number;
    }

    /**
     * SOCKS proxy.
     */
    interface SocksProxy extends Endpoint {
        type: SocksProtocolVersion;
    }

    /**
     * The version of SOCKS protocol to exchange network packets between a client and server through a proxy server.
     * @example 4 (The SOCKS4 protocol)
     * @example 5 (The SOCKS5 protocol, defined in RFC 1928)
     */
    type SocksProtocolVersion = 4 | 5;
}

/**
 * Perform a WHOIS lookup.
 *
 * @param domainName - The domain name on which to perform the lookup.
 * @param options - Options to tweak the behavior of a WHOIS lookup.
 */
declare function lookup(domainName: string, options?: Whois.Options): Promise<Whois.Result>;

export = lookup;
