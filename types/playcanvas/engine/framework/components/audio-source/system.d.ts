declare namespace pc {

    /**
     * @name pc.AudioSourceComponentSystem
     * @class Controls playback of an audio sample. This class will be deprecated in favor of {@link pc.SoundComponentSystem}.
     * @param {pc.Application} app The Application
     * @param {pc.SoundManager} manager The sound manager
     * @extends pc.ComponentSystem
     */
    class AudioSourceComponentSystem extends pc.ComponentSystem {
        constructor(app: pc.Application, manager: pc.SoundManager)

        /**
         * @name pc.AudioSourceComponentSystem#setVolume()
         * @function
         * @description Set the volume for the entire AudioSource system. All sources will have their volume multiplied by this value
         * @param {Number} value The value to set the volume to. Valid from 0.0 - 1.0
         */
        setVolume(volume: number): void;
    }
}
