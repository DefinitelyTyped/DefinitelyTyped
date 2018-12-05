declare namespace pc {

    /**
     * @name pc.SoundSlot
     * @class The SoundSlot controls playback of an audio asset.
     * @description Create a new SoundSlot
     * @param {pc.SoundComponent} component The Component that created this slot.
     * @param {String} name The name of the slot.
     * @param {Object} options Settings for the slot
     * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
     * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
     * @param {Boolean} [options.loop=false] If true the sound will restart when it reaches the end.
     * @param {Number} [options.startTime=0] The start time from which the sound will start playing.
     * @param {Number} [options.duration=null] The duration of the sound that the slot will play starting from startTime.
     * @param {Boolean} [options.overlap=false] If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
     * @param {Boolean} [options.autoPlay=false] If true the slot will start playing as soon as its audio asset is loaded.
     * @param {Number} [options.asset=null] The asset id of the audio asset that is going to be played by this slot.
     * @property {String} name The name of the slot
     * @property {String} asset The asset id
     * @property {Boolean} autoPlay If true the slot will begin playing as soon as it is loaded
     * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
     * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
     * @property {Number} startTime The start time from which the sound will start playing.
     * @property {Number} duration The duration of the sound that the slot will play starting from startTime.
     * @property {Boolean} loop If true the slot will restart when it finishes playing
     * @property {Boolean} overlap If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
     * @property {Boolean} isLoaded Returns true if the asset of the slot is loaded.
     * @property {Boolean} isPlaying Returns true if the slot is currently playing.
     * @property {Boolean} isPaused Returns true if the slot is currently paused.
     * @property {Boolean} isStopped Returns true if the slot is currently stopped.
     * @property {pc.SoundInstance[]} instances An array that contains all the {@link pc.SoundInstance}s currently being played by the slot.
     */
    class SoundSlot {
        constructor(component: pc.SoundComponent, name: string, options?: {
            volume?: number;
            pitch?: number;
            loop?: boolean;
            startTime?: number;
            duration?: number;
            overlap?: boolean;
            autoPlay?: boolean;
            asset?: number;
        })

        name: string;
        volume?: number;
        pitch?: number;
        loop?: boolean;
        startTime?: number;
        duration?: number;
        overlap?: boolean;
        autoPlay?: boolean;
        asset?: number;
        isLoading: boolean;
        isPlaying: boolean;
        isPaused: boolean;
        isStopped: boolean;
        instances: pc.SoundInstance[];

        /**
         * @function pc.SoundSlot#play
         * @description Plays a sound. If {@link pc.SoundSlot#overlap} is true the new sound
         * instance will be played independently of any other instances already playing.
         * Otherwise existing sound instances will stop before playing the new sound.
         * @return {pc.SoundInstance} The new sound instance
         */
        play(): pc.SoundInstance;

        /**
         * @function
         * @name pc.SoundSlot#pause
         * @description Pauses all sound instances. To continue playback call {@link pc.SoundSlot#resume}.
         */
        pause(): boolean;

        /**
         * @function
         * @name pc.SoundSlot#resume
         * @description Resumes playback of all paused sound instances.
         * @returns {Boolean} True if any instances were resumed.
         */
        resume(): boolean;

        /**
         * @function
         * @name pc.SoundSlot#stop
         * @description Stops playback of all sound instances.
         * @returns {Boolean} True if any instances were stopped.
         */
        stop(): boolean;

        /**
         * @function
         * @name pc.SoundSlot#load
         * @description Loads the asset assigned to this slot.
         */
        load(): void;

        /**
         * @function
         * @name pc.SoundSlot#setExternalNodes
         * @description Connect external Web Audio API nodes. Any sound played by this slot will
         * automatically attach the specified nodes to the source that plays the sound. You need to pass
         * the first node of the node graph that you created externally and the last node of that graph. The first
         * node will be connected to the audio source and the last node will be connected to the destination of the AudioContext (e.g. speakers).
         * @param {AudioNode} firstNode The first node that will be connected to the audio source of sound instances.
         * @param {AudioNode} [lastNode] The last node that will be connected to the destination of the AudioContext.
         * If unspecified then the firstNode will be connected to the destination instead.
         * @example
         * var context = app.systems.sound.context;
         * var analyzer = context.createAnalyzer();
         * var distortion = context.createWaveShaper();
         * var filter = context.createBiquadFilter();
         * analyzer.connect(distortion);
         * distortion.connect(filter);
         * slot.setExternalNodes(analyzer, filter);
         */
        setExternalNodes(firstNode: AudioNode, lastNode: AudioNode): void;

        /**
         * @function
         * @name pc.SoundSlot#clearExternalNodes
         * @description Clears any external nodes set by {@link pc.SoundSlot#setExternalNodes}.
         */
        clearExternalNodes(): void;

        /**
         * @function
         * @name pc.SoundSlot#getExternalNodes
         * @description Gets an array that contains the two external nodes set by {@link pc.SoundSlot#setExternalNodes}.
         * @returns {AudioNode[]} An array of 2 elements that contains the first and last nodes set by {@link pc.SoundSlot#setExternalNodes}.
         */
        getExternalNodes(): [AudioNode, AudioNode];
    }
}
