import * as dnsResolver from './lib/dns';
import * as httpResolver from './lib/http';

export = resolve;

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
