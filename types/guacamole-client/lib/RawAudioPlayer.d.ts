import { Mimetype } from './GuacCommon.d';
import { AudioPlayer } from './AudioPlayer.d';
import { InputStream } from './InputStream.d';

export {};

/**
 * Implementation of Guacamole.AudioPlayer providing support for raw PCM format
 * audio. This player relies only on the Web Audio API and does not require any
 * browser-level support for its audio formats.
 */
export class RawAudioPlayer extends AudioPlayer {
    /**
     * Determines whether the given mimetype is supported by
     * Guacamole.RawAudioPlayer.
     * @param mimetype The mimetype to check.
     * @returns true if the given mimetype is supported by Guacamole.RawAudioPlayer, false otherwise.
     */
    static isSupportedType(mimetype: Mimetype): boolean;

    /**
     * Returns a list of all mimetypes supported by Guacamole.RawAudioPlayer. Only
     * the core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a raw audio mimetype that may be supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * @returns
     *     A list of all mimetypes supported by Guacamole.RawAudioPlayer, excluding
     *     any parameters. If the necessary JavaScript APIs for playing raw audio
     *     are absent, this list will be empty.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * @param stream The Guacamole.InputStream to read audio data from.
     *
     * @param mimetype The mimetype of the audio data in the provided stream, which must be a
     * "audio/L8" or "audio/L16" mimetype with necessary parameters, such as: "audio/L16;rate=44100,channels=2".
     */
    constructor(stream: InputStream, mimetype: Mimetype);

    sync(): void;
}
