/**
 * A helper class to provide common functionality for working with HTML5 audio and Howler instances
 * A singleton instance of this class is available as ``game.audio``
 */
declare class AudioHelper {
    /** The set of Howl instances which have been created for different audio paths */
    sounds: any;

    /**
     * A user gesture must be registered before audio can be played.
     * This Array contains the Howl instances which are requested for playback prior to a gesture.
     * Once a gesture is observed, we begin playing all elements of this Array.
     */
    pending: any[];

    /** A flag for whether video playback is currently locked by awaiting a user gesture */
    locked: boolean;

    constructor();

    static registerSettings(): void;

    /**
     * Create a Howl instance
     */
    create({
        src,
        preload,
        autoplay,
        volume,
        loop,
    }: {
        src: string;
        preload: boolean;
        autoplay: boolean;
        volume: number;
        loop: boolean;
    }): void;

    /**
     * Play a single audio effect by it's source path and Howl ID
     */
    play(src: string, id: number): void;

    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed
     */
    awaitFirstGesture(): void;

    preload(data: any): void;

    /**
     * Play a one-off sound effect which is not part of a Playlist
     *
     * @param data 			An object configuring the audio data to play
     * @param data.src		The audio source file path, either a public URL or a local path relative to the public directory
     * @param data.volume	The volume level at which to play the audio, between 0 and 1.
     * @param data.autoplay	Begin playback of the audio effect immediately once it is loaded.
     * @param data.loop		Loop the audio effect and continue playing it until it is manually stopped.
     * @param push			Push the audio sound effect to other connected clients?
     *
     * @return				A Howl instance which controls audio playback.
     *
     * @example
     * // Play the sound of a locked door for all players
     * Audio.play({src: "sounds/lock.wav", volume: 0.8, autoplay: true, loop: false}, true);
     */
    static play(data: { src: string; autoplay: boolean; volume: number; loop: boolean }, push: boolean): void;

    /**
     * Create a Howl object and load it to be ready for later playback
     * @param data	The audio data to preload
     */
    static preload(data: any): void;

    /**
     * Returns the volume value based on a range input volume control's position.
     * This is using an exponential approximation of the logarithmic nature of audio level perception
     * Based on https://www.dr-lex.be/info-stuff/volumecontrols.html
     * We're using x^3 by default instead of x^4 otherwise the audio becomes nearly silent around the 40% mark.
     * @param control	Value between [0, 1] of the range input
     * @param order		(optional) the exponent of the curve (default: 3)
     */
    static inputToVolume(control: number, order: number): number;

    /**
     * Counterpart to inputToVolume()
     * Returns the input range value based on a volume
     * @param control	Value between [0, 1] of the volume level
     * @param order		(optional) the exponent of the curve (default: 3)
     */
    static volumeToInput(volume: number, order: number): number;
}
