declare namespace pc {

    /**
    * @component
    * @name pc.SoundComponent
    * @class The Sound Component controls playback of {@link pc.Sound}s.
    * @description Create a new Sound Component
    * @param {pc.SoundComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The entity that the Component is attached to
    * @extends pc.Component
    * @property {Number} volume The volume modifier to play the audio with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the audio with. Must be larger than 0.01
    * @property {Boolean} positional If true the audio will play back at the location of the Entity in space, so the audio will be affect by the position of the {@link pc.AudioListenerComponent}.
    * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
    * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
    * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @property {Number} rollOffFactor The factor used in the falloff equation.
    * @property {Object} slots A dictionary that contains the {@link pc.SoundSlot}s managed by this Component.
    */
    class SoundComponent extends pc.Component {
        constructor(system: pc.SoundComponentSystem, entity: pc.Entity)

        volume: number;
        pitch: number;
        positional: boolean;
        distanceModel: string;
        refDistance: number;
        maxDistance: number;
        rollOffFactor: number;
        slots: {};

        /**
         * @function
         * @name pc.SoundComponent#addSlot
         * @description Creates a new {@link pc.SoundSlot} with the specified name.
         * @param {String} name The name of the slot
         * @param {Object} options Settings for the slot
         * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
         * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
         * @param {Boolean} [options.loop=false] If true the sound will restart when it reaches the end.
         * @param {Number} [options.startTime=0] The start time from which the sound will start playing.
         * @param {Number} [options.duration=null] The duration of the sound that the slot will play starting from startTime.
         * @param {Boolean} [options.overlap=false] If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
         * @param {Boolean} [options.autoPlay=false] If true the slot will start playing as soon as its audio asset is loaded.
         * @param {Number} [options.asset=null] The asset id of the audio asset that is going to be played by this slot.
         * @returns {pc.SoundSlot} The new slot.
         * @example
         * // get an asset by id
         * var asset = app.assets.get(10);
         * // add a slot
         * this.entity.sound.addSlot('beep', {
         *     asset: asset
         * });
         * // play
         * this.entity.sound.play('beep');
         */
        addSlot(name: string, options?: {
            volume?: number;
            pitch?: number;
            loop?: boolean;
            startTime?: number;
            duration?: number;
            overlap?: boolean;
            autoPlay?: boolean;
            asset?: number;
        }): pc.SoundSlot;

        /**
         * @function
         * @name pc.SoundComponent#removeSlot
         * @description Removes the {@link pc.SoundSlot} with the specified name.
         * @param {String} name The name of the slot
         * @example
         * // remove a slot called 'beep'
         * this.entity.sound.removeSlot('beep');
         */
        removeSlot(name: string): void;

        /**
         * @function
         * @name pc.SoundComponent#slot
         * @description Returns the slot with the specified name
         * @param {String} name The name of the slot
         * @returns {pc.SoundSlot} The slot
         * @example
         * // get a slot and set its volume
         * this.entity.sound.slot('beep').volume = 0.5;
         *
         */
        slot(name: string): pc.Slot;

        /**
        * @function
        * @name pc.SoundComponent#play
        * @description Begins playing the sound slot with the specified name. The slot will restart playing if it is already playing unless the overlap field is true in which case a new sound will be created and played.
        * @param {String} name The name of the {@link pc.SoundSlot} to play
        * @example
        * // get asset by id
        * var asset = app.assets.get(10);
        * // create a slot and play it
        * this.entity.sound.addSlot('beep', {
        *     asset: asset
        * });
        * this.entity.sound.play('beep');
        * @returns {pc.SoundInstance} The sound instance that will be played.
        */
        play(name: string): pc.SoundInstance;

        /**
        * @function
        * @name pc.SoundComponent#pause
        * @description Pauses playback of the slot with the specified name. If the name is undefined then all slots currently played will be paused. The slots can be resumed by calling {@link pc.SoundComponent#resume}.
        * @param {String} [name] The name of the slot to pause. Leave undefined to pause everything.
        * @example
        * // pause all sounds
        * this.entity.sound.pause();
        * // pause a specific sound
        * this.entity.sound.pause('beep');
        */
        pause(name: string): void;

        /**
        * @function
        * @name pc.SoundComponent#resume
        * @description Resumes playback of the sound slot with the specified name if it's paused. If no name is specified all slots will be resumed.
        * @param {String} name The name of the slot to resume. Leave undefined to resume everything.
        * @example
        * // resume all sounds
        * this.entity.sound.resume();
        * // resume a specific sound
        * this.entity.sound.resume('beep');
        */
        resume(name: string): void;

        /**
        * @function
        * @name pc.SoundComponent#stop
        * @description Stops playback of the sound slot with the specified name if it's paused. If no name is specified all slots will be stopped.
        * @param {String} name The name of the slot to stop. Leave undefined to stop everything.
        * @example
        * // stop all sounds
        * this.entity.sound.stop();
        * // stop a specific sound
        * this.entity.sound.stop('beep');
        */
        stop(name: string): void;
    }
}
