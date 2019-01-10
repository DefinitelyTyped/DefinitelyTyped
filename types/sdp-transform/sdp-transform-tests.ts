import {
	SessionDescription,
	parse,
	write,
} from 'sdp-transform';

const session: SessionDescription = parse('');
const mediaType: string = session.media[0].type;
session.media[0].type = 'video';
const sdp: string = write(session);
