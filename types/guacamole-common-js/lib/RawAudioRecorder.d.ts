import { Mimetype } from './GuacCommon.d';
import { AudioRecorder } from './AudioRecorder.d';
import { OutputStream } from './OutputStream.d';

/**
 * Implementation of Guacamole.AudioRecorder providing support for raw PCM
 * format audio. This recorder relies only on the Web Audio API and does not
 * require any browser-level support for its audio formats.
 */
export class RawAudioRecorder extends AudioRecorder {
    static isSupportedType: typeof AudioRecorder['isSupportedType'];

    /**
     * Returns a list of all mimetypes supported by Guacamole.RawAudioRecorder. Only
     * the core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a raw audio mimetype that may be supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * @returns
     *     A list of all mimetypes supported by Guacamole.RawAudioRecorder,
     *     excluding any parameters. If the necessary JavaScript APIs for recording
     *     raw audio are absent, this list will be empty.
     */
    static getSupportedTypes(): string[];

    /**
     * @param stream The Guacamole.OutputStream to write audio data to.
     *
     * @param mimetype The mimetype of the audio data to send along the provided stream, which
     * must be a "audio/L8" or "audio/L16" mimetype with necessary parameters,
     * such as: "audio/L16;rate=44100,channels=2".
     */
    constructor(stream: OutputStream, mimetype: Mimetype);
}
