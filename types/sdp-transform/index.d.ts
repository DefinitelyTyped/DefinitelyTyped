// Type definitions for sdp-transform 2.4
// Project: https://github.com/clux/sdp-transform#readme
// Definitions by: @loc <https://github.com/loc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://tools.ietf.org/html/rfc4566
// https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml

export function write(description: SessionDescription): string;
export function parse(description: string): SessionDescription;
export function parsePayloads(payloads: string): number[];
export function parseRemoteCandidates(candidates: string): Array<{
    component: number;
    ip: string;
    port: number;
}>;
export function parseSimulcastStreamList(streams: string): Array<{
    scid: number | string;
    paused: boolean;
}>;
export interface ParamMap {
    [paramName: string]: number | string;
}
export function parseParams(params: string): ParamMap;
export function parseImageAttributes(params: string): ParamMap[];

export interface MediaDescription extends SharedDescriptionFields, MediaAttributes {}

/**
 * Descriptor fields that exist only at the session level (before an m= block).
 *
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
export interface SessionDescription extends SharedDescriptionFields, SessionAttributes {
    version?: number;
    // o=
    origin?: {
        username: string;
        sessionId: string | number;
        sessionVersion: number;
        netType: string;
        address: string;
    };
    // s=
    name?: string;
    // u=
    uri?: string;
    // e=
    email?: string;
    // p=
    phone?: string;
    // t=0 0
    timing?: {
        start: number;
        stop: number;
    };
    // z=
    timezones?: string;
    // r=
    repeats?: string;
    // m=
    media: Array<{
        type: string;
        port: number;
        protocol: string;
        payloads?: string;
    } & MediaDescription>;
}

/**
 * These attributes can exist on both the session level and the media level.
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-8
 */
export interface SharedAttributes {
    // a=sendrecv
    // a=recvonly
    // a=sendonly
    // a=inactive
    direction?: 'sendrecv' | 'recvonly' | 'sendonly' | 'inactive';
    // a=control
    control?: string;
    // a=extmap
    ext?: {
        value: number;
        direction?: string;
        uri: string;
        config?: string;
    };
    // a=setup
    setup?: string;

    iceUfrag?: string;
    icePwd?: string;
    fingerprint?: {
        type: string;
        hash: string;
    };
    // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
    sourceFilter?: {
        filterMode: 'excl' | 'incl';
        netType: string;
        addressTypes: string;
        destAddress: string;
        srcList: string;
    };
    invalid?: Array<{ value: string }>;
}

/**
 * Attributes that only exist at the session level (before an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-7
 */
export interface SessionAttributes extends SharedAttributes {
    icelite?: string;
    // a=ice-options:google-ice
    iceOptions?: string;
    // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
    msidSemantic?: {
        semantic: string;
        token: string;
    };
    // a=group:BUNDLE audio video
    groups?: Array<{
        type: string;
        mids: string;
    }>;
}

/**
 * Attributes that only exist at the media level (within an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-9
 */
export interface MediaAttributes extends SharedAttributes {
    rtp?: {
        payload: number;
        codec: string;
        rate?: number;
        encoding?: number;
    };
    rtcp?: {
        port: number;
        netType?: string;
        ipVer?: number;
        address?: string;
    };
    // a=rtcp-fb:98 nack rpsi
    rtcpFb?: {
        payload: number;
        type: string;
        subtype?: string;
    };
    // a=rtcp-fb:98 trr-int 100
    rtcpFbTrrInt?: {
        payload: number;
        value: number;
    };
    // a=fmtp
    fmtp?: {
        payload: number;
        config: string;
    };
    // a=mid
    mid?: string;
    // a=msid
    msid?: string;
    ptime?: number;
    // a=maxptime
    maxptime?: number;
    // a=crypto
    crypto?: {
        id: number;
        suite: string;
        config: string;
        sessionConfig?: string;
    };
    // a=candidate
    candidates?: Array<{
        foundation: string;
        component: number;
        transport: string;
        priority: number | string;
        ip: string;
        port: number;
        type: string;
        raddr: string;
        rport: number;
        tcptype: string;
        generation: number;
        'network-id'?: number;
        'network-cost'?: number;
    }>;
    // a=end-of-candidates
    endOfCandidates?: string;
    // a=remote-candidates
    remoteCandidates?: string;
    // a=ssrc:
    ssrcs?: Array<{
        id: number | string;
        attribute: string;
        value?: string;
    }>;
    // a=ssrc-group:
    ssrcGroups?: Array<{
        semantics: string;
        ssrcs: string;
    }>;
    // a=rtcp-mux
    rtcpMux?: string;
    // a=rtcp-rsize
    rtcpRsize?: string;
    // a=sctpmap
    sctpmap?: {
        sctpmapNumber: number | string;
        app: string;
        maxMessageSize: number;
    };
    // a=x-google-flag
    xGoogleFlag?: string;
    // a=rid
    rids?: Array<{
        id: number | string;
        direction: string;
        params?: string;
    }>;
    // a=imageattr
    imageattrs?: Array<{
        pt: number | string;
        dir1: string;
        attrs1: string;
        dir2?: string;
        attrs2?: string;
    }>;
    simulcast?: {
        dir1: string;
        list1: string;
        dir2?: string;
        list2?: string;
    };
    simulcast_03?: { value: string };
    // a=framerate
    framerate?: number | string;
}

/**
 * Descriptor fields that exist at both the session level and media level.
 *
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
export interface SharedDescriptionFields {
    // i=
    description?: string;
    // c=IN IP4 10.47.197.26
    connection?: {
        version: number;
        ip: string;
    };
    // b=AS:4000
    bandwidth?: {
        type: 'TIAS' | 'AS' | 'CT' | 'RR' | 'RS';
        limit: number | string;
    };
}
