/**
 * Creates and plays/pauses a sound effect or music.
 * @param buffer Handle to the audio buffer created by an audio loader
 * @param how An options object that defines parameters for playback of the audio buffer
 * @param cb A callback that is executed when playback stops
 * @returns a handle to the player, which can then call pause and play functions
 */
declare function audioPlay(buffer: AudioBuffer, how: audioPlay.Options, cb: () => void): audioPlay.AudioPlayHandle;

declare namespace audioPlay {
    interface AudioPlayHandle {
        play: () => any;
        pause: () => any;
        currentTime: number;
    }

    /**
     * Various options for audio playback
     * @param start The timestamp at which to start the audio. Can be negative to start from end. (Default: 0)
     * @param end The timestamp the audio ends at. (Default: length of audio buffer)
     * @param autoplay Plays back the audio immediately upon loading. (Default: false)
     * @param loop Continuously loops the buffer until paused. (Default: false)
     * @param context Handle to an audio context. If not provided, one is provided for you.
     * @param volume (not implemented) Playback the audio at a percentage of full volume. (Default: 1)
     * @param detune (not implemented) Percentage of fine-tuning. (Default: 0)
     * @param rate (not implemented) Playback rate, in percent, of the audio. (Default: 1)
     */
    interface Options {
        start?: number | undefined;
        end?: number | undefined;
        autoplay?: boolean | undefined;
        loop?: boolean | undefined;
        rate?: number | undefined;
        detune?: number | undefined;
        volume?: number | undefined;
        context?: AudioContext | undefined;
    }
}
export = audioPlay;
