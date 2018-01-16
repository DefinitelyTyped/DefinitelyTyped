declare namespace pc {

    /**
    * @name pc.AudioListenerComponentSystem
    * @class Component System for adding and removing {@link pc.AudioComponent} objects to Entities.
    * @description Create a new AudioListenerComponentSystem
    * @extends pc.ComponentSystem
    */
    class AudioListenerComponentSystem extends pc.ComponentSystem {
        constructor(app: pc.Application, manager: pc.SoundManager)
    }
}