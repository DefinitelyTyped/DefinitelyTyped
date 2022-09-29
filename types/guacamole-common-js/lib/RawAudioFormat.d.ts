import { Mimetype } from './GuacCommon.d';

/**
 * A description of the format of raw PCM audio, such as that used by
 * Guacamole.RawAudioPlayer and Guacamole.RawAudioRecorder. This object
 * describes the number of bytes per sample, the number of channels, and the
 * overall sample rate.
 */
export class RawAudioFormat {
    /**
     * Parses the given mimetype, returning a new Guacamole.RawAudioFormat
     * which describes the type of raw audio data represented by that mimetype. If
     * the mimetype is not a supported raw audio data mimetype, null is returned.
     *
     * @param mimetype The audio mimetype to parse.
     * @returns
     *     A new Guacamole.RawAudioFormat which describes the type of raw
     *     audio data represented by the given mimetype, or null if the given
     *     mimetype is not supported.
     */
    static parse(mimetype: Mimetype): RawAudioFormat;

    /**
     * @param template The object whose properties should be copied into the corresponding
     * properties of the new Guacamole.RawAudioFormat.
     */
    constructor(template: RawAudioFormat);

    /**
     * The number of bytes in each sample of audio data. This value is
     * independent of the number of channels.
     */
    bytesPerSample: number;

    /**
     * The number of audio channels (ie: 1 for mono, 2 for stereo).
     *
     */
    channels: number;

    /**
     * The number of samples per second, per channel.
     */
    rate: number;
}
