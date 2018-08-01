declare namespace pc {

    /**
    * @component
    * @name pc.ZoneComponent
    * @extends pc.Component
    * @class The ZoneComponent allows you to define an area in world space of certain size.
    * This can be used in various ways, such as affecting audio reverb when audiolistener is within zone.
    * Or create culling system with portals between zones to hide whole indoor sections for performance reasons.
    * And many other possible options. Zones are building blocks and meant to be used in many different ways.
    * @param {pc.ZoneComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Vec3} size The Size of Box of a Zone.
    */
    class ZoneComponent extends pc.Component {
        constructor(system: ZoneComponentSystem, entity: pc.Entity)
    }
}
