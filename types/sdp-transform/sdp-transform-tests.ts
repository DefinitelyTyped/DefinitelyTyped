import {
	SessionDescription,
	parse,
	write,
} from 'sdp-transform';

const session: SessionDescription = parse('');
const mediaType: string = session.media[0].type;
session.media[0].type = 'video';
const extension: string = session.media[0].ext![0].uri;
session.media[0].ext![0].uri = 'urn:ietf:params:rtp-hdrext:ssrc-audio-level';
const codec: string = session.media[0].rtp[0].codec;
session.media[0].rtp[0].codec = 'opus';
const config: string = session.media[0].fmtp[0].config;
session.media[0].fmtp[0].config = 'maxplaybackrate=48000;stereo=1;useinbandfec=1';
session.media[0].rtcpFb = [{ payload: 96, type: 'ccm', subtype: 'fir' }, { payload: 98, type: 'nack', subtype: 'rpsi' }];
session.media[0].rtcpFbTrrInt = [{ payload: 96, value: 100 }, { payload: 98, value: 100 }];
const sdp: string = write(session);
