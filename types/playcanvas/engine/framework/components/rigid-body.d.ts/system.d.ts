declare namespace pc {

    /**
    * @name pc.RaycastResult
    * @class Object holding the result of a successful raycast hit
    * @description Create a new RaycastResult
    * @param {pc.Entity} entity The entity that was hit
    * @param {pc.Vec3} point The point at which the ray hit the entity in world space
    * @param {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
    * @property {pc.Entity} entity The entity that was hit
    * @property {pc.Vec3} point The point at which the ray hit the entity in world space
    * @property {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
    */
    class RaycastResult {
        constructor(entity: pc.Entity, point: pc.Vec3, normal: pc.Vec3)

        entity: pc.Entity;
        point: pc.Vec3;
        normal: pc.Vec3;
    }

    /**
    * @name pc.SingleContactResult
    * @class Object holding the result of a contact between two rigid bodies
    * @description Create a new SingleContactResult
    * @param {pc.Entity} a The first entity involved in the contact
    * @param {pc.Entity} b The second entity involved in the contact
    * @param {pc.ContactPoint} contactPoint The contact point between the two entities
    * @property {pc.Entity} a The first entity involved in the contact
    * @property {pc.Entity} b The second entity involved in the contact
    * @property {pc.Vec3} localPointA The point on Entity A where the contact occurred, relative to A
    * @property {pc.Vec3} localPointB The point on Entity B where the contact occurred, relative to B
    * @property {pc.Vec3} pointA The point on Entity A where the contact occurred, in world space
    * @property {pc.Vec3} pointB The point on Entity B where the contact occurred, in world space
    * @property {pc.Vec3} normal The normal vector of the contact on Entity B, in world space
    */
    class SingleContactResult {
        constructor(a: pc.Entity, b: pc.Entity, contactPoint: pc.ContactPoint)

        a: pc.Entity;
        b: pc.Entity;
        localPointA: pc.Vec3;
        localPointB: pc.Vec3;
        pointA: pc.Vec3;
        pointB: pc.Vec3;
        normal: pc.Vec3
    }

    /**
    * @name pc.ContactPoint
    * @class Object holding the result of a contact between two Entities.
    * @description Create a new ContactPoint
    * @param {pc.Vec3} localPoint The point on the entity where the contact occurred, relative to the entity
    * @param {pc.Vec3} localPointOther The point on the other entity where the contact occurred, relative to the other entity
    * @param {pc.Vec3} point The point on the entity where the contact occurred, in world space
    * @param {pc.Vec3} pointOther The point on the other entity where the contact occurred, in world space
    * @param {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
    * @property {pc.Vec3} localPoint The point on the entity where the contact occurred, relative to the entity
    * @property {pc.Vec3} localPointOther The point on the other entity where the contact occurred, relative to the other entity
    * @property {pc.Vec3} point The point on the entity where the contact occurred, in world space
    * @property {pc.Vec3} pointOther The point on the other entity where the contact occurred, in world space
    * @property {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
    */
    class ContactPoint {
        constructor(localPoint: pc.Vec3, localPointOther: pc.Vec3, point: pc.Vec3, pointOther: pc.Vec3, normal: pc.Vec3)

        localPoint: pc.Vec3;
        localPointOther: pc.Vec3;
        point: pc.Vec3;
        pointOther: pc.Vec3;
        normal: pc.Vec3;
    }

    /**
    * @name pc.ContactResult
    * @class Object holding the result of a contact between two Entities
    * @description Create a new ContactResult
    * @param {pc.Entity} other The entity that was involved in the contact with this entity
    * @param {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
    * @property {pc.Entity} other The entity that was involved in the contact with this entity
    * @property {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
    */
    class ContactResult {
        constructor(other: pc.Entity, contacts: pc.ContactPoint[])

        other: pc.Entity;
        contacts: pc.ContactPoint[];
    }

    /**
     * @name pc.RigidBodyComponentSystem
     * @description Create a new RigidBodyComponentSystem
     * @class The RigidBodyComponentSystem maintains the dynamics world for simulating rigid bodies, it also controls global values for the world such as gravity.
     * Note: The RigidBodyComponentSystem is only valid if 3D Physics is enabled in your application. You can enable this in the application settings for your Depot.
     * @param {pc.Application} app The Application
     * @extends pc.ComponentSystem
     */
    class RigidBodyComponentSystem extends pc.ComponentSystem {
        constructor(app: pc.Application)

        /**
        * @function
        * @name pc.RigidBodyComponentSystem#setGravity
        * @description Set the gravity vector for the 3D physics world
        * @param {Number} x The x-component of the gravity vector
        * @param {Number} y The y-component of the gravity vector
        * @param {Number} z The z-component of the gravity vector
        */
        setGravity(x: number, y: number, z: number): void;

        /**
        * @function
        * @name pc.RigidBodyComponentSystem#setGravity^2
        * @description Set the gravity vector for the 3D physics world
        * @param {pc.Vec3} gravity The gravity vector to use for the 3D physics world.
        */
        setGravity(gravity: pc.Vec3): void;

        /**
        * @function
        * @name pc.RigidBodyComponentSystem#raycastFirst
        * @description Raycast the world and return the first entity the ray hits. Fire a ray into the world from start to end,
        * if the ray hits an entity with a rigidbody component, it returns a {@link pc.RaycastResult}, otherwise returns null.
        * @param {pc.Vec3} start The world space point where the ray starts
        * @param {pc.Vec3} end The world space point where the ray ends
        * @returns {pc.RaycastResult} The result of the raycasting or null if there was no hit.
        */
        raycastFirst(start: pc.Vec3, end: pc.Vec3): pc.RaycastResult;
    }
}
