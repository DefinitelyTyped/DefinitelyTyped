declare namespace pc {

    /**
     * @name pc.SoundComponentSystem
     * @class Manages creation of {@link pc.SoundComponent}s.
     * @description Create a SoundComponentSystem
     * @param {pc.Application} app The Application
     * @param {pc.SoundManager} manager The sound manager
     * @property {Number} volume Sets / gets the volume for the entire Sound system. All sounds will have their volume
     * multiplied by this value. Valid between [0, 1].
     * @property {AudioContext} context Gets the AudioContext currently used by the sound manager. Requires Web Audio API support.
     * @property {pc.SoundManager} manager Gets / sets the sound manager
     * @extends pc.ComponentSystem
     */
    class SoundComponentSystem extends pc.ComponentSystem {
        constructor(app: pc.Application, manager: pc.SoundManager)

        volume: number;
        context: AudioContext;
        manager: pc.SoundManager;
    }
}
