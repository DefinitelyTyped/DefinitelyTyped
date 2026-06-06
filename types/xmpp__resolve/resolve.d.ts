import * as dnsResolver from "./lib/dns.js";
import * as httpResolver from "./lib/http.js";

export default resolve;

declare function resolve(
    domain: string,
    options?: dnsResolver.ResolveOptions,
): Promise<Array<httpResolver.ResolvedEndpoint | dnsResolver.ResolvedRecord>>;

declare namespace resolve {
    const dns: typeof dnsResolver | undefined;
    const http: typeof httpResolver;

    type LookupOptions = dnsResolver.LookupOptions;
    type ResolvedAddress = dnsResolver.ResolvedAddress;
    type ResolvedSrvRecord = dnsResolver.ResolvedSrvRecord;
    type LookedUpSrvRecord = dnsResolver.LookedUpSrvRecord;
    type ResolveOptions = dnsResolver.ResolveOptions;
    type ResolvedTxtRecord = dnsResolver.ResolvedTxtRecord;
    type ResolvedRecord = dnsResolver.ResolvedRecord;
    type ResolvedEndpoint = httpResolver.ResolvedEndpoint;
}
