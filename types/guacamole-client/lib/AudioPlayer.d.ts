import { Mimetype } from './GuacCommon';
import { InputStream } from './InputStream';

/**
 * Abstract audio player which accepts, queues and plays back arbitrary audio
 * data. It is up to implementations of this class to provide some means of
 * handling a provided Guacamole.InputStream. Data received along the provided
 * stream is to be played back immediately.
 */
export class AudioPlayer {
    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.AudioPlayer, in rough order of priority. Beware that only the core
     * mimetypes themselves will be listed. Any mimetype parameters, even required
     * ones, will not be included in the list. For example, "audio/L8" is a
     * supported raw audio mimetype that is supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     * @returns A list of all mimetypes supported by any built-in Guacamole.AudioPlayer, excluding any parameters.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * Returns an instance of Guacamole.AudioPlayer providing support for the given
     * audio format. If support for the given audio format is not available, null
     * is returned.
     *
     * @param stream The Guacamole.InputStream to read audio data from.
     * @param mimetype The mimetype of the audio data in the provided stream.
     * @return A Guacamole.AudioPlayer instance supporting the given mimetype and
     * reading from the given stream, or null if support for the given mimetype is absent.
     */
    static getInstance(stream: InputStream, mimetype: Mimetype): AudioPlayer | null;

    /**
     * Notifies this Guacamole.AudioPlayer that all audio up to the current
     * point in time has been given via the underlying stream, and that any
     * difference in time between queued audio data and the current time can be
     * considered latency.
     */
    sync(): void;
}
