import { Mimetype } from './GuacCommon.d';
import { OutputStream } from './OutputStream';

/**
 * Abstract audio recorder which streams arbitrary audio data to an underlying
 * Guacamole.OutputStream. It is up to implementations of this class to provide
 * some means of handling this Guacamole.OutputStream. Data produced by the
 * recorder is to be sent along the provided stream immediately.
 */
export class AudioRecorder {
    /**
     * Determines whether the given mimetype is supported by any built-in
     * implementation of Guacamole.AudioRecorder, and thus will be properly handled
     * by Guacamole.AudioRecorder.getInstance().
     *
     * @param mimetype The mimetype to check.
     *
     * @returns true if the given mimetype is supported by any built-in Guacamole.AudioRecorder, false otherwise.
     */
    static isSupportedType(mimetype: Mimetype): boolean;

    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.AudioRecorder, in rough order of priority. Beware that only the
     * core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a supported raw audio mimetype that is supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * A list of all mimetypes supported by any built-in
     * Guacamole.AudioRecorder, excluding any parameters.
     */
    static getSupportedTypes(): string[];

    /**
     * Returns an instance of Guacamole.AudioRecorder providing support for the
     * given audio format. If support for the given audio format is not available,
     * null is returned.
     *
     * @param stream The Guacamole.OutputStream to send audio data through.
     *
     * @param mimetype The mimetype of the audio data to be sent along the provided stream.
     * @return A Guacamole.AudioRecorder instance supporting the given mimetype and
     * writing to the given stream, or null if support for the given mimetype is absent.
     */
    static getInstance(stream: OutputStream, mimetype: Mimetype): AudioRecorder | null;

    /**
     * Callback which is invoked when the audio recording process has stopped
     * and the underlying Guacamole stream has been closed normally. Audio will
     * only resume recording if a new Guacamole.AudioRecorder is started. This
     * Guacamole.AudioRecorder instance MAY NOT be reused.
     *
     * @event
     */
    onclose: null | (() => void);

    /**
     * Callback which is invoked when the audio recording process cannot
     * continue due to an error, if it has started at all. The underlying
     * Guacamole stream is automatically closed. Future attempts to record
     * audio should not be made, and this Guacamole.AudioRecorder instance
     * MAY NOT be reused.
     *
     * @event
     */
    onerror: null | (() => void);
}
