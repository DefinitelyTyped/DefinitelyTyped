declare namespace pc {

    /**
    * @component
    * @name pc.AudioListenerComponent
    * @class Represents the audio listener in the 3D world, so that 3D positioned audio sources are heard correctly.
    * @description Create new AudioListenerComponent
    * @param {pc.AudioListenerComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @extends pc.Component
    */
    class AudioListenerComponent extends pc.Component {
        constructor(system: pc.AudioListenerComponentSystem, entity: pc.Entity)
    }
}
