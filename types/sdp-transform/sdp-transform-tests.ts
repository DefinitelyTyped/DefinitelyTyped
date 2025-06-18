import { parse, parseSimulcastStreamList, SessionDescription, write } from "sdp-transform";

function test_basic() {
    const session: SessionDescription = parse("");
    const mediaType: string = session.media[0].type;
    session.media[0].type = "video";
    const extension: string = session.media[0].ext![0].uri;
    session.media[0].ext![0].uri = "urn:ietf:params:rtp-hdrext:ssrc-audio-level";
    const codec: string = session.media[0].rtp[0].codec;
    session.media[0].rtp[0].codec = "opus";
    const config: string = session.media[0].fmtp[0].config;
    session.media[0].fmtp[0].config = "maxplaybackrate=48000;stereo=1;useinbandfec=1";
    session.media[0].rtcpFb = [{ payload: 96, type: "ccm", subtype: "fir" }, {
        payload: 98,
        type: "nack",
        subtype: "rpsi",
    }];
    session.media[0].rtcpFbTrrInt = [{ payload: 96, value: 100 }, { payload: 98, value: 100 }];
    const sdp: string = write(session);
}

function test_origin_fields() {
    const session: SessionDescription = parse("");
    session.version = 0;
    session.origin = {
        username: "alice",
        sessionId: 1591330608,
        sessionVersion: 1591330609,
        netType: "IN",
        ipVer: 4,
        address: "127.0.0.1",
    };
    const sdp: string = write(session);
}

function test_parse_simulcast_stream_list() {
    const session: SessionDescription = parse("");
    const simulcastList = session.media[0].simulcast?.list1;

    if (!simulcastList) {
        return;
    }

    for (const stream of parseSimulcastStreamList(simulcastList)) {
        for (const format of stream) {
            format.paused; // $ExpectType boolean
            format.scid; // $ExpectType string | number
        }
    }
}

function test_crypto_attribute() {
    const session: SessionDescription = parse("");
    session.media[0].crypto = [
        {
            id: 1,
            suite: "AES_CM_128_HMAC_SHA1_80",
            config: "inline:WVNfX19zZW1jdGwgKCkgewkyMjA7fQp9CnVubGVz|2^31|1:1",
            sessionConfig: "UNENCRYPTED_SRTP",
        },
    ];
    const sdp: string = write(session);
    const parsed = parse(sdp);
    const crypto = parsed.media[0].crypto![0];
    crypto.id; // $ExpectType number
    crypto.suite; // $ExpectType string
    crypto.config; // $ExpectType string
    crypto.sessionConfig; // $ExpectType string | undefined
}
