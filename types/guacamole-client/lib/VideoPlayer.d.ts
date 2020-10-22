import { InputStream } from './InputStream';
import { Mimetype } from './GuacCommon';
import { VisibleLayer } from './VisibleLayer';

/**
 * Abstract video player which accepts, queues and plays back arbitrary video
 * data. It is up to implementations of this class to provide some means of
 * handling a provided Guacamole.InputStream and rendering the received data to
 * the provided Guacamole.Display.VisibleLayer. Data received along the
 * provided stream is to be played back immediately.
 */
export class VideoPlayer {
    /**
     * Determines whether the given mimetype is supported by any built-in
     * implementation of Guacamole.VideoPlayer, and thus will be properly handled
     * by Guacamole.VideoPlayer.getInstance().
     * @param mimetype The mimetype to check.
     * @returns true if the given mimetype is supported by any built-in Guacamole.VideoPlayer, false otherwise.
     */
    static isSupportedType(mimetype: MimeType): boolean;

    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.VideoPlayer, in rough order of priority. Beware that only the core
     * mimetypes themselves will be listed. Any mimetype parameters, even required
     * ones, will not be included in the list.
     *
     * @returns A list of all mimetypes supported by any built-in Guacamole.VideoPlayer,
     * excluding any parameters.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * Returns an instance of Guacamole.VideoPlayer providing support for the given
     * video format. If support for the given video format is not available, null
     * is returned.
     *
     * @param stream The Guacamole.InputStream to read video data from.
     * @param layer The destination layer in which this Guacamole.VideoPlayer should play
     * the received video data.
     * @param mimetype The mimetype of the video data in the provided stream.
     * @return
     * A Guacamole.VideoPlayer instance supporting the given mimetype and
     * reading from the given stream, or null if support for the given mimetype
     * is absent.
     */
    static getInstance(stream: InputStream, layer: VisibleLayer, mimetype: MimeType): VideoPlayer | null;

    /**
     * Notifies this Guacamole.VideoPlayer that all video up to the current
     * point in time has been given via the underlying stream, and that any
     * difference in time between queued video data and the current time can be
     * considered latency.
     */
    sync(): void;
}
