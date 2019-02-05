// Type definitions for onionoo 2.0
// Project: https://github.com/lukechilds/onionoo-node-client
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Cache, GotPromise } from 'got';

export = Oninoo;

declare const Oninoo: Onionoo;

interface Onionoo {
    new (options?: Onionoo.Options): Onionoo.Instance & Onionoo.Endpoints;
    new (options: Onionoo.OptionsWithEndpoints): Onionoo.Instance & Partial<Onionoo.Endpoints>;
}

declare namespace Onionoo {
    interface Instance {
        get(endpoint: 'summary', query?: QueryParameters): GotPromise<Summary>;
        get(endpoint: 'details', query?: QueryParameters): GotPromise<Details>;
        get(endpoint: 'bandwidth', query?: QueryParameters): GotPromise<Bandwidth>;
        get(endpoint: 'weights', query?: QueryParameters): GotPromise<Weights>;
        get(endpoint: 'clients', query?: QueryParameters): GotPromise<Clients>;
        get(endpoint: 'uptime', query?: QueryParameters): GotPromise<Uptime>;
    }

    interface Endpoints {
        summary(query?: QueryParameters): GotPromise<Summary>;
        details(query?: QueryParameters): GotPromise<Details>;
        bandwidth(query?: QueryParameters): GotPromise<Bandwidth>;
        weights(query?: QueryParameters): GotPromise<Weights>;
        clients(query?: QueryParameters): GotPromise<Clients>;
        uptime(query?: QueryParameters): GotPromise<Uptime>;
    }

    interface Options {
        /**
         * String to use as the base url for all API requests.
         * @default 'https://onionoo.torproject.org'
         */
        baseUrl?: string;
        /**
         * Storage adapter instance for storing cached data.
         * @default false
         */
        cache?: Cache | false;
    }

    interface OptionsWithEndpoints extends Options {
        /**
         * Array of endpoints to be returned as methods on the `Onionoo` instance.
         * @default ['summary', 'details', 'bandwidth', 'weights', 'clients', 'uptime']
         */
        endpoints: Array<'summary' | 'details' | 'bandwidth' | 'weights' | 'clients' | 'uptime'>;
    }

    interface QueryParameters {
        /**
         * Return only `relay` or only `bridge` documents.
         */
        type?: 'relay' | 'bridge';
        /**
         * Return only running (`true`) or only non-running relays and/or bridges (`false`).
         */
        running?: boolean;
        /**
         * Return only (1) relays with the parameter value matching (part of a) nickname, (possibly $-prefixed)
         * beginning of a hex-encoded fingerprint, any 4 hex character block of a space-separated fingerprint,
         * beginning of a base64-encoded fingerprint without trailing equal signs, or beginning of an IP address
         * (possibly enclosed in square brackets in case of IPv6), (2) bridges with (part of a) nickname
         * or (possibly $-prefixed) beginning of a hashed hex-encoded fingerprint, and (3) relays and/or bridges
         * matching a given qualified search term. Searches by relay IP address include all known addresses used
         * for onion routing and for exiting to the Internet. Searches for beginnings of IP addresses are performed
         * on textual representations of canonical IP address forms, so that searches using CIDR notation or
         * non-canonical forms will return empty results. Searches are case-insensitive, except for base64-encoded
         * fingerprints. If multiple search terms are given, separated by spaces, the intersection of all relays
         * and bridges matching all search terms will be returned. Complete hex-encoded fingerprints should always
         * be hashed using SHA-1, regardless of searching for a relay or a bridge, in order to not accidentally
         * leak non-hashed bridge fingerprints in the URL. Qualified search terms have the form "key:value"
         * (without double quotes) with "key" being one of the parameters listed here except for "search",
         * "fingerprint", "order", "limit", "offset", and "fields", and "value" being the string that will
         * internally be passed to that parameter. If a qualified search term for a given "key" is specified
         * more than once, only the first "value" is considered.
         */
        search?: string;
        /**
         * Return only the relay with the parameter value matching the fingerprint or the bridge with the parameter
         * value matching the hashed fingerprint. Fingerprints should always be hashed using SHA-1, regardless of
         * looking up a relay or a bridge, in order to not accidentally leak non-hashed bridge fingerprints in the URL.
         * Lookups only work for full fingerprints or hashed fingerprints consisting of 40 hex characters.
         * Lookups are case-insensitive.
         */
        lookup?: string;
        /**
         * Return only relays which are located in the given country as identified by a two-letter country code.
         * Filtering by country code is case-insensitive. The special country code xz can be used for relays that
         * were not found in the GeoIP database.
         */
        country?: string;
        /**
         * Return only relays which are located in either one of the given autonomous systems (AS) as identified
         * by AS number (with or without preceding "AS" part). Multiple AS numbers can be provided separated by commas.
         * Filtering by AS number is case-insensitive. The special AS number 0 can be used for relays that were
         * not found in the GeoIP database.
         */
        as?: string;
        /**
         * Return only relays with the parameter value matching (part of) the autonomous system (AS) name they are
         * located in. If the parameter value contains spaces, only relays are returned which contain all
         * space-separated parts in their AS name. Only printable ASCII characters are permitted in the parameter
         * value, some of which need to be percent-encoded (# as %23, % as %25, & as %26, + as %2B, and / as %2F).
         * Comparisons are case-insensitive.
         */
        as_name?: string;
        /**
         * Return only relays which have the given relay flag assigned by the directory authorities.
         * Filtering by flag is case-insensitive.
         */
        flag?: string;
        /**
         * Return only relays or bridges which have first been seen during the given range of days ago. A parameter
         * value "x-y" with x <= y returns relays or bridges that have first been seen at least x and at most y days ago.
         * Accepted short forms are "x", "x-", and "-y" which are interpreted as "x-x", "x-infinity", and "0-y".
         */
        first_seen_days?: string;
        /**
         * Return only relays or bridges which have last been seen during the given range of days ago. A parameter
         * value "x-y" with x <= y returns relays or bridges that have last been seen at least x and at most y days ago.
         * Accepted short forms are "x", "x-", and "-y" which are interpreted as "x-x", "x-infinity", and "0-y".
         * Note that relays and bridges that haven't been running in the past week are not included in results,
         * so that setting x to 8 or higher will lead to an empty result set.
         */
        last_seen_days?: string;
        /**
         * Return only relays with the parameter value matching (part of) the contact line. If the parameter value
         * contains spaces, only relays are returned which contain all space-separated parts in their contact line.
         * Only printable ASCII characters are permitted in the parameter value, some of which need to be
         * percent-encoded (# as %23, % as %25, & as %26, + as %2B, and / as %2F). Comparisons are case-insensitive.
         */
        contact?: string;
        /**
         * Return only the relay whose fingerprint matches the parameter value and all relays that this relay has
         * listed in its family by fingerprint and that in turn have listed this relay in their family by fingerprint.
         * If relays have listed other relays in their family by nickname, those family relationships will not be
         * considered, regardless of whether they have the Named flag or not. The provided relay fingerprint must
         * consist of 40 hex characters where case does not matter, and it must not be hashed using SHA-1.
         * Bridges are not contained in the result, regardless of whether they define a family.
         */
        family?: string;
        /**
         * Return only relays or bridges running either Tor version from a list or range given in the parameter value.
         * Tor versions must be provided without the leading "Tor" part. Multiple versions can either be provided as a
         * comma-separated list (","), as a range separated by two dots (".."), or as a list of ranges.
         * Provided versions are parsed and matched by parsed dotted numbers, rather than by string prefix.
         */
        version?: string;
        /**
         * Return only relays or bridges running on an operating system that starts with the parameter value.
         * Searches are case-insensitive.
         */
        os?: string;
        /**
         * Return only relays with a domain name ending in the given (partial) host name. Searches for subdomains
         * of a specific domain should ideally be prefixed with a period, for example: ".csail.mit.edu". Non-ASCII
         * host name characters must be encoded as punycode. Filtering by host name is case-insensitive.
         */
        host_name?: string;
        /**
         * Return only relays and bridges running a Tor software version that is recommended (`true`) or not
         * recommended by the directory authorities (`false`). Uses the version in the consensus or bridge network status.
         * Relays and bridges are not contained in either result, if the version they are running is not known.
         */
        recommended_version?: boolean;
        /**
         * Response documents can be reduced in size by requesting only a subset of contained fields.
         * Comma-separated list of fields that will be included in the result. So far, only top-level fields
         * in relay or bridge objects of details documents can be specified, e.g., `nickname,hashed_fingerprint`.
         * If the fields parameter is provided, all other fields which are not contained in the provided list
         * will be removed from the result.
         */
        fields?: string[];
        /**
         * Re-order results by a comma-separated list of fields in ascending or descending order. Results are first
         * ordered by the first list element, then by the second, and so on. Possible fields for ordering are:
         * `consensus_weight` and `first_seen`. Ascending order is the default; descending order is selected by
         * prepending fields with a minus sign (-). Field names can be listed at most once in either ascending or
         * descending order. Relays or bridges which don't have any value for a field to be ordered by are always
         * appended to the end, regardless or sorting order. The ordering is defined independent of the requested
         * document type and does not require the ordering field to be contained in the document. If no `order`
         * parameter is given, ordering of results is undefined.
         */
        order?: string;

        /**
         * Skip the given number of relays and/or bridges. Relays are skipped first, then bridges.
         * Non-positive `offset` values are treated as zero and don't change the result.
         */
        offset?: number;
        /**
         * Limit result to the given number of relays and/or bridges. Relays are kept first, then bridges.
         * Non-positive `limit` values are treated as zero and lead to an empty result. When used together with `offset`,
         * the offsetting step precedes the limiting step.
         */
        limit?: number;
    }

    type Summary = Response<RelaySummary, BridgeSummary>;
    type Details = Response<Relay, Bridge>;
    type Bandwidth = Response<NodeBandwidth, NodeBandwidth>;
    type Weights = Response<RelayWeights, undefined>;
    type Clients = Response<undefined, BridgeClients>;
    type Uptime = Response<RelayUptime, BridgeUptime>;

    interface Response<TRelay, TBridge> {
        /**
         * Onionoo protocol version string.
         */
        version: string;
        /**
         * UTC date (YYYY-MM-DD) when the next major protocol version is scheduled to be deployed. Omitted if no major
         * protocol changes are planned.
         */
        next_major_version_scheduled?: string;
        /**
         * Git revision of the Onionoo instance's software used to write this response, which will be omitted if unknown.
         */
        build_revision?: string;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when the last known relay network status consensus started being valid.
         * Indicates how recent the relay objects in this document are.
         */
        relays_published: string;
        /**
         * Number of skipped relays as requested by a positive "offset" parameter value. Omitted if zero.
         */
        relays_skipped?: number;
        relays: TRelay[];
        /**
         * Number of truncated relays as requested by a positive "limit" parameter value. Omitted if zero.
         */
        relays_truncated?: number;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when the last known bridge network status was published.
         * Indicates how recent the bridge objects in this document are.
         */
        bridges_published: string;
        /**
         * Number of skipped bridges as requested by a positive `offset` parameter value. Omitted if zero.
         */
        bridges_skipped?: number;
        bridges: TBridge[];
        /**
         * Number of truncated bridges as requested by a positive `limit` parameter value. Omitted if zero.
         */
        bridges_truncated?: number;
    }

    interface RelaySummary {
        /**
         * Relay nickname consisting of 1–19 alphanumerical characters.
         */
        n: string;
        /**
         * Relay fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        f: string;
        /**
         * Array of IPv4 or IPv6 addresses where the relay accepts onion-routing connections or which the relay
         * used to exit to the Internet in the past 24 hours. The first address is the primary onion-routing address
         * that the relay used to register in the network, subsequent addresses are in arbitrary order. IPv6 hex
         * characters are all lower-case.
         */
        a: string[];
        /**
         * Boolean field saying whether this relay was listed as running in the last relay network status consensus.
         */
        r: boolean;
    }

    interface Relay {
        /**
         * Relay nickname consisting of 1–19 alphanumerical characters.
         */
        nickname: string;
        /**
         * Relay fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * Array of IPv4 or IPv6 addresses and TCP ports or port lists where the relay accepts onion-routing connections.
         * The first address is the primary onion-routing address that the relay used to register in the network,
         * subsequent addresses are in arbitrary order. IPv6 hex characters are all lower-case.
         */
        or_addresses: string[];
        /**
         * Array of IPv4 addresses that the relay used to exit to the Internet in the past 24 hours. Omitted if
         * array is empty. Includes all exit addresses, regardless of whether they are used as onion-routing addresses
         * or not.
         */
        exit_addresses?: string[];
        /**
         * IPv4 address and TCP port where the relay accepts directory connections.
         * Omitted if the relay does not accept directory connections.
         */
        dir_address?: string;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when this relay was last seen in a network status consensus.
         */
        last_seen: string;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when this relay last stopped announcing an IPv4 or IPv6 address or
         * TCP port where it previously accepted onion-routing or directory connections. This timestamp can serve
         * as indicator whether this relay would be a suitable fallback directory.
         */
        last_changed_address_or_port: string;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when this relay was first seen in a network status consensus.
         */
        first_seen: string;
        /**
         * Boolean field saying whether this relay was listed as running in the last relay network status consensus.
         */
        running: boolean;
        /**
         * Boolean field saying whether this relay indicated that it is hibernating in its last known server descriptor.
         * This information may be helpful to decide whether a relay that is not running anymore has reached its
         * accounting limit and has not dropped out of the network for another, unknown reason. Omitted if either
         * the relay is not hibernating, or if no information is available about the hibernation status of the relay.
         */
        hibernating?: boolean;
        /**
         * Array of relay flags that the directory authorities assigned to this relay. May be omitted if empty.
         */
        flags?: string[];
        /**
         * Two-letter lower-case country code as found in a GeoIP database by resolving the relay's first
         * onion-routing IP address. Omitted if the relay IP address could not be found in the GeoIP database.
         */
        country?: string;
        /**
         * Country name as found in a GeoIP database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the GeoIP database, or if the GeoIP database
         * did not contain a country name.
         */
        country_name?: string;
        /**
         * Region name as found in a GeoIP database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the GeoIP database, or if the GeoIP database
         * did not contain a region name.
         */
        region_name?: string;
        /**
         * City name as found in a GeoIP database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the GeoIP database, or if the GeoIP database
         * did not contain a city name.
         */
        city_name?: string;
        /**
         * Latitude as found in a GeoIP database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the GeoIP database.
         */
        latitude?: number;
        /**
         * Longitude as found in a GeoIP database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the GeoIP database.
         */
        longitude?: number;
        /**
         * AS number as found in an AS database by resolving the relay's first onion-routing IP address.
         * AS number strings start with "AS", followed directly by the AS number. Omitted if the relay IP
         * address could not be found in the AS database.
         */
        as?: string;
        /**
         * AS name as found in an AS database by resolving the relay's first onion-routing IP address.
         * Omitted if the relay IP address could not be found in the AS database.
         */
        as_name?: string;
        /**
         * Weight assigned to this relay by the directory authorities that clients use in their path selection algorithm.
         * The unit is arbitrary; currently it's kilobytes per second, but that might change in the future.
         */
        consensus_weight: number;
        /**
         * Host name as found in a reverse DNS lookup of the relay's primary IP address. This field is updated at most
         * once in 12 hours, unless the relay IP address changes. Omitted if the relay IP address was not looked up,
         * if no lookup request was successful yet, or if no A record was found matching the PTR record.
         * @deprecated
         */
        host_name?: string;
        /**
         * Host names as found in a reverse DNS lookup of the relay's primary IP address for which a matching A record
         * was also found. This field is updated at most once in 12 hours, unless the relay IP address changes.
         * Omitted if the relay IP address was not looked up, if no lookup request was successful yet, or if no
         * A records were found matching the PTR records (i.e. it was not possible to verify the value of any
         * of the PTR records). A DNSSEC validating resolver is used for these lookups. Failure to validate
         * DNSSEC signatures will prevent those names from appearing in this field.
         */
        verified_host_names?: string[];
        /**
         * Host names as found in a reverse DNS lookup of the relay's primary IP address that for which a matching
         * A record was not found. This field is updated at most once in 12 hours, unless the relay IP address changes.
         * Omitted if the relay IP address was not looked up, if no lookup request was successful yet, or if A records
         * were found matching all PTR records (i.e. it was possible to verify the value of each of the PTR records).
         * A DNSSEC validating resolver is used for these lookups. Failure to validate DNSSEC signatures will prevent
         * those names from appearing in this field.
         */
        unverified_host_names?: string[];
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when the relay was last (re-)started.
         * Missing if router descriptor containing this information cannot be found.
         */
        last_restarted?: string;
        /**
         * Average bandwidth in bytes per second that this relay is willing to sustain over long periods.
         * Missing if router descriptor containing this information cannot be found.
         */
        bandwidth_rate?: number;
        /**
         * Bandwidth in bytes per second that this relay is willing to sustain in very short intervals.
         * Missing if router descriptor containing this information cannot be found.
         */
        bandwidth_burst?: number;
        /**
         * Bandwidth estimate in bytes per second of the capacity this relay can handle. The relay remembers
         * the maximum bandwidth sustained output over any ten second period in the past day, and another
         * sustained input. The `observed_bandwidth` value is the lesser of these two numbers. Missing if
         * router descriptor containing this information cannot be found.
         */
        observed_bandwidth?: number;
        /**
         * Bandwidth in bytes per second that this relay is willing and capable to provide. This bandwidth
         * value is the minimum of `bandwidth_rate`, `bandwidth_burst`, and `observed_bandwidth`.
         * Missing if router descriptor containing this information cannot be found.
         */
        advertised_bandwidth?: number;
        /**
         * Array of exit-policy lines. Missing if router descriptor containing this information cannot be found.
         * May contradict the `exit_policy_summary` field in a rare edge case: this happens when the relay changes
         * its exit policy after the directory authorities summarized the previous exit policy.
         */
        exit_policy?: string[];
        /**
         * Summary version of the relay's exit policy containing a dictionary with either an `accept` or a `reject` element.
         * If there is an `accept` (`reject`) element, the relay accepts (rejects) all TCP ports or port ranges
         * in the given list for most IP addresses and rejects (accepts) all other ports. May contradict the
         * `exit_policy` field in a rare edge case: this happens when the relay changes its exit policy after
         * the directory authorities summarized the previous exit policy.
         */
        exit_policy_summary?: {
            accept?: string[];
            reject?: string[];
        };
        /**
         * Summary version of the relay's IPv6 exit policy containing a dictionary with either an `accept` or a `reject`
         * element. If there is an `accept` (`reject`) element, the relay accepts (rejects) all TCP ports or port ranges
         * in the given list for most IP addresses and rejects (accepts) all other ports. Missing if the relay rejects
         * all connections to IPv6 addresses. May contradict the `exit_policy_summary` field in a rare edge case:
         * this happens when the relay changes its exit policy after the directory authorities summarized the previous
         * exit policy.
         */
        exit_policy_v6_summary?: {
            accept?: string[];
            reject?: string[];
        };
        /**
         * Contact address of the relay operator. Omitted if empty or if descriptor containing this information
         * cannot be found.
         */
        contact?: string;
        /**
         * Platform string containing operating system and Tor version details. Omitted if empty or if descriptor
         * containing this information cannot be found.
         */
        platform?: string;
        /**
         * Tor software version without leading "Tor" as reported by the directory authorities in the "v" line of
         * the consensus. Omitted if either the directory authorities or the relay did not report which version
         * the relay runs or if the relay runs an alternative Tor implementation.
         */
        version?: string;
        /**
         * Boolean field saying whether the Tor software version of this relay is recommended by the directory
         * authorities or not. Uses the relay version in the consensus. Omitted if either the directory authorities
         * did not recommend versions, or the relay did not report which version it runs.
         */
        recommended_version?: boolean;
        /**
         * Status of the Tor software version of this relay based on the versions recommended by the directory authorities.
         * Possible version statuses are: `recommended` if a version is listed as recommended; `experimental` if a version
         * is newer than every recommended version; `obsolete` if a version is older than every recommended version;
         * `new in series` if a version has other recommended versions with the same first three components,
         * and the version is newer than all such recommended versions, but it is not newer than every recommended version;
         * `unrecommended` if none of the above conditions hold. Omitted if either the directory authorities did not
         * recommend versions, or the relay did not report which version it runs.
         */
        version_status?:
            | 'recommended'
            | 'experimental'
            | 'obsolete'
            | 'new in series'
            | 'unrecommended';
        /**
         * Array of fingerprints of relays that are in an effective, mutual family relationship with this relay.
         * These relays are part of this relay's family and they consider this relay to be part of their family.
         * Always contains the relay's own fingerprint. Omitted if the descriptor containing this information
         * cannot be found.
         */
        effective_family?: string[];
        /**
         * Array of fingerprints of relays that are not in an effective, mutual family relationship with this relay.
         * These relays are part of this relay's family but they don't consider this relay to be part of their family.
         * Omitted if empty or if descriptor containing this information cannot be found.
         */
        alleged_family?: string[];
        /**
         * Array of fingerprints of relays that are not in an effective, mutual family relationship with this relay
         * but that can be reached by following effective, mutual family relationships starting at this relay.
         * Omitted if empty or if descriptor containing this information cannot be found.
         */
        indirect_family?: string[];
        /**
         * Fraction of this relay's consensus weight compared to the sum of all consensus weights in the network.
         * This fraction is a very rough approximation of the probability of this relay to be selected by clients.
         * Omitted if the relay is not running.
         */
        consensus_weight_fraction?: number;
        /**
         * Probability of this relay to be selected for the guard position. This probability is calculated based on
         * consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more
         * factors, so that this probability can only be an approximation. Omitted if the relay is not running,
         * or the consensus does not contain bandwidth weights.
         */
        guard_probability?: number;
        /**
         * Probability of this relay to be selected for the middle position. This probability is calculated based on
         * consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more
         * factors, so that this probability can only be an approximation. Omitted if the relay is not running,
         * or the consensus does not contain bandwidth weights.
         */
        middle_probability?: number;
        /**
         * Probability of this relay to be selected for the exit position. This probability is calculated based on
         * consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more
         * factors, so that this probability can only be an approximation. Omitted if the relay is not running,
         * or the consensus does not contain bandwidth weights.
         */
        exit_probability?: number;
        /**
         * Boolean field saying whether the consensus weight of this relay is based on a threshold of 3 or more
         * measurements by Tor bandwidth authorities. Omitted if the network status consensus containing this
         * relay does not contain measurement information.
         */
        measured?: boolean;
        /**
         * Array of IPv4 or IPv6 addresses and TCP ports or port lists where the relay claims in its descriptor to
         * accept onion-routing connections but that the directory authorities failed to confirm as reachable.
         * Contains only additional addresses of a relay that are found unreachable and only as long as a minority of
         * directory authorities performs reachability tests on these additional addresses. Relays with an unreachable
         * primary address are not included in the network status consensus and excluded entirely. Likewise, relays
         * with unreachable additional addresses tested by a majority of directory authorities are not included in
         * the network status consensus and excluded here, too. If at any point network status votes will be added
         * to the processing, relays with unreachable addresses will be included here. Addresses are in arbitrary order.
         * IPv6 hex characters are all lower-case. Omitted if empty.
         */
        unreachable_or_addresses?: string[];
    }

    interface BridgeSummary {
        /**
         * Bridge nickname consisting of 1–19 alphanumerical characters.
         */
        n: string;
        /**
         * SHA-1 hash of the bridge fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        h: string;
        /**
         * Boolean field saying whether this bridge was listed as running in the last bridge network status.
         */
        r: boolean;
    }

    interface Bridge {
        /**
         * Bridge nickname consisting of 1–19 alphanumerical characters.
         */
        nickname: string;
        /**
         * SHA-1 hash of the bridge fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        hashed_fingerprint: string;
        /**
         * Array of sanitized IPv4 or IPv6 addresses and TCP ports or port lists where the bridge accepts
         * onion-routing connections. The first address is the primary onion-routing address that the bridge used
         * to register in the network, subsequent addresses are in arbitrary order. IPv6 hex characters are all lower-case.
         * Sanitized IP addresses are always in `10/8` or `[fd9f:2e19:3bcf/48]` IP networks and are only useful
         * to learn which IP version the bridge uses and to detect whether the bridge changed its address.
         * Sanitized IP addresses always change on the 1st of every month at 00:00:00 UTC, regardless of the bridge
         * actually changing its IP address. TCP ports are not sanitized.
         */
        or_addresses: string[];
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when this bridge was last seen in a bridge network status.
         */
        last_seen: string;
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when this bridge was first seen in a bridge network status.
         */
        first_seen: string;
        /**
         * Boolean field saying whether this bridge was listed as running in the last bridge network status.
         */
        running: boolean;
        /**
         * Array of relay flags that the bridge authority assigned to this bridge. May be omitted if empty.
         */
        flags?: string[];
        /**
         * UTC timestamp (YYYY-MM-DD hh:mm:ss) when the bridge was last (re-)started.
         * Missing if router descriptor containing this information cannot be found.
         */
        last_restarted?: string;
        /**
         * Bandwidth in bytes per second that this bridge is willing and capable to provide. This bandwidth value
         * is the minimum of `bandwidth_rate`, `bandwidth_burst`, and `observed_bandwidth`.
         * Missing if router descriptor containing this information cannot be found.
         */
        advertised_bandwidth?: number;
        /**
         * Platform string containing operating system and Tor version details.
         * Omitted if not provided by the bridge or if descriptor containing this information cannot be found.
         */
        platform?: string;
        /**
         * Tor software version without leading "Tor" as reported by the bridge in the "platform" line of its server
         * descriptor. Omitted if not provided by the bridge, if the descriptor containing this information cannot
         * be found, or if the bridge runs an alternative Tor implementation.
         */
        version?: string;
        /**
         * Boolean field saying whether the Tor software version of this bridge is recommended by the directory
         * authorities or not. Uses the bridge version in the bridge network status. Omitted if either the directory
         * authorities did not recommend versions, or the bridge did not report which version it runs.
         */
        recommended_version?: boolean;
        /**
         * Status of the Tor software version of this bridge based on the versions recommended by the directory authorities.
         * Possible version statuses are: `recommended` if a version is listed as recommended; `experimental` if a
         * version is newer than every recommended version; `obsolete` if a version is older than every recommended version;
         * `new in series` if a version has other recommended versions with the same first three components, and the
         * version is newer than all such recommended versions, but it is not newer than every recommended version;
         * `unrecommended` if none of the above conditions hold. Omitted if either the directory authorities did not
         * recommend versions, or the bridge did not report which version it runs.
         */
        version_status?:
            | 'recommended'
            | 'experimental'
            | 'obsolete'
            | 'new in series'
            | 'unrecommended';
        /**
         * Array of (pluggable) transport names supported by this bridge.
         */
        transports?: string[];
    }

    interface NodeBandwidth {
        /**
         * Node fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * Object containing graph history objects with written bytes for different time periods. Keys are string
         * representation of the time period covered by the graph history object. Keys are fixed strings `3_days`,
         * `1_week`, `1_month`, `6_months`, `1_year`, and `5_years`. Keys refer to the last known bandwidth history
         * of a node, not to the time when the bandwidth document was published. A graph history object is only
         * ontained if the time period it covers is not already contained in another graph history object with shorter
         * time period and higher data resolution. Similarly, a graph history object is excluded if the node did not
         * provide bandwidth histories on the required level of detail. The unit is bytes per second. Contained
         * graph history objects may contain null values if the node did not provide any bandwidth data or only data
         * for less than 20% of a given time period.
         */
        write_history?: Partial<
            Record<'3_days' | '1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * Object containing graph history objects with read bytes for different time periods. The specification
         * of graph history objects is similar to those in the `write_history` field.
         */
        read_history?: Partial<
            Record<'3_days' | '1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
    }

    interface RelayWeights {
        /**
         * Node fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * History object containing the fraction of this relay's consensus weight compared to the sum of all consensus
         * weights in the network. This fraction is a very rough approximation of the probability of this relay to be
         * selected by clients. Keys are string representation of the time period covered by the graph history object.
         * Keys are fixed strings `1_week`, `1_month`, `6_months`, `1_year`, and `5_years`. Keys refer to the last known
         * weights history of a relay, not to the time when the weights document was published. A graph history object is
         * only contained if the time period it covers is not already contained in another graph history object with shorter
         * time period and higher data resolution. The unit is path-selection probability. Contained graph history objects
         * may contain null values if the relay was running less than 20% of a given time period.
         */
        consensus_weight_fraction?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * History object containing the probability of this relay to be selected for the guard position.
         * This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus.
         * Path selection depends on more factors, so that this probability can only be an approximation.
         * The specification of this history object is similar to that in the `consensus_weight_fraction` field above.
         */
        guard_probability?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * History object containing the probability of this relay to be selected for the middle position.
         * This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus.
         * Path selection depends on more factors, so that this probability can only be an approximation.
         * The specification of this history object is similar to that in the `consensus_weight_fraction` field above.
         */
        middle_probability?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * History object containing the probability of this relay to be selected for the exit position.
         * This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus.
         * Path selection depends on more factors, so that this probability can only be an approximation.
         * The specification of this history object is similar to that in the `consensus_weight_fraction` field above.
         */
        exit_probability?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * History object containing the absolute consensus weight of this relay. The specification of this history
         * object is similar to that in the `consensus_weight_fraction` field above.
         */
        consensus_weight?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
    }

    interface BridgeClients {
        /**
         * SHA-1 hash of the bridge fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * Object containing graph history objects with the average number of clients connecting to this bridge.
         * Keys are string representation of the time period covered by the graph history object. Keys are fixed strings
         * `6_months`, `1_year`, and `5_years`. Keys refer to the last known clients history of a bridge, not to the time
         * when the clients document was published. A graph history object is only contained if the time period it
         * covers is not already contained in another clients graph object with shorter time period and higher
         * data resolution. The unit is number of clients. Contained graph history objects may contain null values
         * if the bridge did not report client statistics for at least 50% of a given time period.
         */
        average_clients?: Partial<Record<'6_months' | '1_year' | '5_years', Histogram>>;
    }

    interface RelayUptime {
        /**
         * Relay fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * Object containing graph history objects with the fractional uptime of this relay. Keys are string
         * representation of the time period covered by the graph history object. Keys are fixed strings
         * `1_week`, `1_month`, `6_months`, `1_year`, and `5_years`. Keys refer to the last known uptime history
         * of a relay, not to the time when the uptime document was published. A graph history object is only
         * contained if the time period it covers is not already contained in another graph history object with
         * shorter time period and higher data resolution. The unit is fractional uptime from `0` to `1`.
         * Contained graph history objects may contain null values if less than 20% of network statuses have been
         * processed for a given time period.
         */
        uptime?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
        /**
         * Object containing fractional times of this relay having relay flags assigned. Keys are flag names like
         * `Running` or `Exit`, values are objects similar to the uptime field above, again with keys like
         * `1_week` etc. If a relay never had a given relay flag assigned, no object is included for that flag.
         */
        flags?: {
            [key: string]: Partial<
                Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
            >;
        };
    }

    interface BridgeUptime {
        /**
         * SHA-1 hash of the bridge fingerprint consisting of 40 upper-case hexadecimal characters.
         */
        fingerprint: string;
        /**
         * Object containing uptime history objects for different time periods. The specification of uptime history
         * objects is similar to those in the `uptime` field of `RelayUptime`.
         */
        uptime?: Partial<
            Record<'1_week' | '1_month' | '6_months' | '1_year' | '5_years', Histogram>
        >;
    }

    interface Histogram {
        first: string;
        last: string;
        interval: number;
        factor: number;
        count: number;
        values: number[];
    }
}
