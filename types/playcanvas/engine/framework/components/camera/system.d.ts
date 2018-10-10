declare namespace pc {

    /**
     * @name pc.CameraComponentSystem
     * @class Used to add and remove {@link pc.CameraComponent}s from Entities. It also holds an
     * array of all active cameras.
     * @description Create a new CameraComponentSystem
     * @param {pc.Application} app The Application
     *
     * @property {pc.CameraComponent[]} cameras Holds all the active camera components
     * @extends pc.ComponentSystem
     */
    class CameraComponentSystem extends pc.ComponentSystem {
        constructor(app: pc.Application)

        cameras: pc.CameraComponent[];
    }
}