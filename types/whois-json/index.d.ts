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
        domainName?: string | undefined;
        registryDomainId?: string | undefined;
        registrarWhoisServer?: string | undefined;
        registrarUrl?: string | undefined;
        updatedDate?: string | undefined;
        creationDate?: string | undefined;
        registrarRegistrationExpirationDate?: string | undefined;
        registrar?: string | undefined;
        registrarIanaId?: string | undefined;
        registrarAbuseContactEmail?: string | undefined;
        registrarAbuseContactPhone?: string | undefined;
        domainStatus?: string | undefined;
        registrantName?: string | undefined;
        registrantOrganization?: string | undefined;
        registrantStreet?: string | undefined;
        registrantCity?: string | undefined;
        registrantStateProvince?: string | undefined;
        registrantPostalCode?: string | undefined;
        registrantCountry?: string | undefined;
        registrantPhone?: string | undefined;
        registrantEmail?: string | undefined;
        adminName?: string | undefined;
        adminOrganization?: string | undefined;
        adminStreet?: string | undefined;
        adminCity?: string | undefined;
        adminStateProvince?: string | undefined;
        adminPostalCode?: string | undefined;
        adminCountry?: string | undefined;
        adminPhone?: string | undefined;
        adminEmail?: string | undefined;
        techName?: string | undefined;
        techOrganization?: string | undefined;
        techStreet?: string | undefined;
        techCity?: string | undefined;
        techStateProvince?: string | undefined;
        techPostalCode?: string | undefined;
        techCountry?: string | undefined;
        techPhone?: string | undefined;
        techEmail?: string | undefined;
        nameServer?: string | undefined;
        dnssec?: string | undefined;
        urlOfTheIcannWhoisDataProblemReportingSystem?: string | undefined;
        lastUpdateOfWhoisDatabase?: string | undefined;
    }

    /**
     * Options to tweak the behavior of a WHOIS lookup.
     */
    interface Options {
        /** WHOIS server */
        server?: string | Endpoint | undefined;
        /** number of times to follow redirects */
        follow?: number | undefined;
        /** socket timeout in milliseconds */
        timeout?: number | undefined;
        /** show verbose results */
        verbose?: boolean | undefined;
        /** bind to a local IP address */
        bind?: string | undefined;
        /** SOCKS proxy */
        proxy?: string | SocksProxy | undefined;
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
