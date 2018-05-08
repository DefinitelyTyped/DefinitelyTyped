declare namespace pc {

    /**
     * @name pc.SoundManager
     * @class The SoundManager is used to load and play audio. As well as apply system-wide settings
     * like global volume, suspend and resume.
     * @description Creates a new sound manager.
     * @param {Object} [options]
     * @param {Boolean} [options.forceWebAudioApi] Always use the Web Audio API even check indicates that it if not available
     * @property {pc.Listener} listener Gets / sets the audio listener
     * @property {Number} volume Global volume for the manager. All {@link pc.SoundInstance}s will scale their volume with this volume. Valid between [0, 1].
     */
    class SoundManager {
        constructor(options: { forceWebAudioApi: boolean })

        listener: pc.Listener;
        volume: number;

        /**
         * @private
         * @function
         * @name pc.SoundManager.hasAudio
         * @description Reports whether this device supports the HTML5 Audio tag API
         * @returns true if HTML5 Audio tag API is supported and false otherwise
         */
        private hasAudio(): boolean;

        /**
         * @private
         * @function
         * @name pc.SoundManager.hasAudioContext
         * @description Reports whether this device supports the Web Audio API
         * @returns true if Web Audio is supported and false otherwise
         */
        private hasAudioContext(): boolean;

        /**
        * @private
        * @function
        * @name pc.SoundManager#playSound
        * @description Create a new pc.Channel and begin playback of the sound.
        * @param {pc.Sound} sound The Sound object to play.
        * @param {Object} options
        * @param {Number} [options.volume] The volume to playback at, between 0 and 1.
        * @param {Boolean} [options.loop] Whether to loop the sound when it reaches the end.
        */
        private playSound(sound: pc.Sound, options: { volume: number, loop: boolean }): pc.Channel;

        /**
        * @private
        * @function
        * @name pc.SoundManager#playSound3d
        * @description Create a new pc.Channel3d and begin playback of the sound at the position specified
        * @param {pc.Sound} sound The Sound object to play.
        * @param {pc.Vec3} position The position of the sound in 3D space.
        * @param {Object} options
        * @param {Number} [options.volume] The volume to playback at, between 0 and 1.
        * @param {Boolean} [options.loop] Whether to loop the sound when it reaches the end.
        */
        private playSound3d(sound: pc.Sound, position: pc.Vec3, options: { volume: number, loop: boolean }): pc.Channel3d;
    }
}