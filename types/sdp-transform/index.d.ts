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
export function parseSimulcastStreamList(streams: string): Array<
    Array<{
        scid: number | string;
        paused: boolean;
    }>
>;
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
    version?: number | undefined;
    // o=
    origin?: {
        username: string;
        sessionId: string | number;
        sessionVersion: number;
        netType: string;
        ipVer: number;
        address: string;
    } | undefined;
    // s=
    name?: string | undefined;
    // u=
    uri?: string | undefined;
    // e=
    email?: string | undefined;
    // p=
    phone?: string | undefined;
    // t=0 0
    timing?: {
        start: number;
        stop: number;
    } | undefined;
    // z=
    timezones?: string | undefined;
    // r=
    repeats?: string | undefined;
    // m=
    media: Array<
        {
            type: string;
            port: number;
            protocol: string;
            payloads?: string | undefined;
        } & MediaDescription
    >;
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
    direction?: "sendrecv" | "recvonly" | "sendonly" | "inactive" | undefined;
    // a=control
    control?: string | undefined;
    // a=extmap
    ext?:
        | Array<{
            value: number;
            direction?: string | undefined;
            uri: string;
            config?: string | undefined;
        }>
        | undefined;
    // a=setup
    setup?: string | undefined;

    iceUfrag?: string | undefined;
    icePwd?: string | undefined;
    fingerprint?: {
        type: string;
        hash: string;
    } | undefined;
    // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
    sourceFilter?: {
        filterMode: "excl" | "incl";
        netType: string;
        addressTypes: string;
        destAddress: string;
        srcList: string;
    } | undefined;
    invalid?: Array<{ value: string }> | undefined;
}

/**
 * Attributes that only exist at the session level (before an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-7
 */
export interface SessionAttributes extends SharedAttributes {
    icelite?: string | undefined;
    // a=ice-options:google-ice
    iceOptions?: string | undefined;
    // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
    msidSemantic?: {
        semantic: string;
        token: string;
    } | undefined;
    // a=group:BUNDLE audio video
    groups?:
        | Array<{
            type: string;
            mids: string;
        }>
        | undefined;
}

/**
 * Attributes that only exist at the media level (within an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-9
 */
export interface MediaAttributes extends SharedAttributes {
    rtp: Array<{
        payload: number;
        codec: string;
        rate?: number | undefined;
        encoding?: number | undefined;
    }>;
    rtcp?: {
        port: number;
        netType?: string | undefined;
        ipVer?: number | undefined;
        address?: string | undefined;
    } | undefined;
    // a=rtcp-fb:98 nack rpsi
    rtcpFb?:
        | Array<{
            payload: number;
            type: string;
            subtype?: string | undefined;
        }>
        | undefined;
    // a=rtcp-fb:98 trr-int 100
    rtcpFbTrrInt?:
        | Array<{
            payload: number;
            value: number;
        }>
        | undefined;
    // a=fmtp
    fmtp: Array<{
        payload: number;
        config: string;
    }>;
    // a=mid
    mid?: string | undefined;
    // a=msid
    msid?: string | undefined;
    ptime?: number | undefined;
    // a=maxptime
    maxptime?: number | undefined;
    // a=crypto
    crypto?: {
        id: number;
        suite: string;
        config: string;
        sessionConfig?: string | undefined;
    } | undefined;
    // a=candidate
    candidates?:
        | Array<{
            foundation: string;
            component: number;
            transport: string;
            priority: number | string;
            ip: string;
            port: number;
            type: string;
            raddr?: string | undefined;
            rport?: number | undefined;
            tcptype?: string | undefined;
            generation?: number | undefined;
            "network-id"?: number | undefined;
            "network-cost"?: number | undefined;
        }>
        | undefined;
    // a=end-of-candidates
    endOfCandidates?: string | undefined;
    // a=remote-candidates
    remoteCandidates?: string | undefined;
    // a=ssrc:
    ssrcs?:
        | Array<{
            id: number | string;
            attribute: string;
            value?: string | undefined;
        }>
        | undefined;
    // a=ssrc-group:
    ssrcGroups?:
        | Array<{
            semantics: string;
            ssrcs: string;
        }>
        | undefined;
    // a=rtcp-mux
    rtcpMux?: string | undefined;
    // a=rtcp-rsize
    rtcpRsize?: string | undefined;
    // a=sctpmap
    sctpmap?: {
        sctpmapNumber: number | string;
        app: string;
        maxMessageSize: number;
    } | undefined;
    // a=x-google-flag
    xGoogleFlag?: string | undefined;
    // a=rid
    rids?:
        | Array<{
            id: number | string;
            direction: string;
            params?: string | undefined;
        }>
        | undefined;
    // a=imageattr
    imageattrs?:
        | Array<{
            pt: number | string;
            dir1: string;
            attrs1: string;
            dir2?: string | undefined;
            attrs2?: string | undefined;
        }>
        | undefined;
    simulcast?: {
        dir1: string;
        list1: string;
        dir2?: string | undefined;
        list2?: string | undefined;
    } | undefined;
    simulcast_03?: { value: string } | undefined;
    // a=framerate
    framerate?: number | string | undefined;
}

/**
 * Descriptor fields that exist at both the session level and media level.
 *
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
export interface SharedDescriptionFields {
    // i=
    description?: string | undefined;
    // c=IN IP4 10.47.197.26
    connection?: {
        version: number;
        ip: string;
    } | undefined;
    // b=AS:4000
    bandwidth?:
        | Array<{
            type: "TIAS" | "AS" | "CT" | "RR" | "RS";
            limit: number | string;
        }>
        | undefined;
}
