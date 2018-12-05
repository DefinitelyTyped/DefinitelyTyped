declare namespace pc {
    type rigidBodyType = 'pc.BODYTYPE_STATIC' | 'pc.BODYTYPE_DYNAMIC' | 'pc.BODYTYPE_KINEMATIC'

    /**
     * @component
     * @name pc.RigidBodyComponent
     * @description Create a new RigidBodyComponent
     * @class The rigidbody component, when combined with a {@link pc.CollisionComponent}, allows your
     * entities to be simulated using realistic physics.
     * A rigidbody component will fall under gravity and collide with other rigid bodies. Using scripts, you
     * can apply forces and impulses to rigid bodies.
     * @param {pc.RigidBodyComponentSystem} system The ComponentSystem that created this component
     * @param {pc.Entity} entity The entity this component is attached to
     * @extends pc.Component
     * @property {Number} mass The mass of the body. This is only relevant for {@link pc.BODYTYPE_DYNAMIC}
     * bodies, other types have infinite mass. Defaults to 1.
     * @property {pc.Vec3} linearVelocity Defines the speed of the body in a given direction.
     * @property {pc.Vec3} angularVelocity Defines the rotational speed of the body around each world axis.
     * @property {Number} linearDamping Controls the rate at which a body loses linear velocity over time.
     * Defaults to 0.
     * @property {Number} angularDamping Controls the rate at which a body loses angular velocity over time.
     * Defaults to 0.
     * @property {pc.Vec3} linearFactor Scaling factor for linear movement of the body in each axis.
     * Defaults to 1 in all axes.
     * @property {pc.Vec3} angularFactor Scaling factor for angular movement of the body in each axis.
     * Defaults to 1 in all axes.
     * @property {Number} friction The friction value used when contacts occur between two bodies. A higher
     * value indicates more friction. Should be set in the range 0 to 1. Defaults to 0.5.
     * @property {Number} restitution Influences the amount of energy lost when two rigid bodies collide. The
     * calculation multiplies the restitution values for both colliding bodies. A multiplied value of 0 means
     * that all energy is lost in the collision while a value of 1 means that no energy is lost. Should be
     * set in the range 0 to 1. Defaults to 0.
     * @property {Number} group The collision group this body belongs to. Combine the group and the mask to
     * prevent bodies colliding with each other. Defaults to 1.
     * @property {Number} mask The collision mask sets which groups this body collides with. It is a bitfield
     * of 16 bits, the first 8 bits are reserved for engine use. Defaults to 65535.
     * @property {String} type The rigid body type determines how the body is simulated. Can be:
     * <ul>
     *     <li>pc.BODYTYPE_STATIC: infinite mass and cannot move.</li>
     *     <li>pc.BODYTYPE_DYNAMIC: simulated according to applied forces.</li>
     *     <li>pc.BODYTYPE_KINEMATIC: infinite mass and does not respond to forces but can still be moved by setting their velocity or position.</li>
     * </ul>
     * Defaults to pc.BODYTYPE_STATIC.
     */
    class RigidBodyComponent extends pc.Component {
        constructor(system: pc.RigidBodyComponentSystem, entity: pc.Entity)

        /**
         * Controls the rate at which a body loses angular velocity over time. 
         * @type {number}
         * @memberof RigidBodyComponent
         */
        angularDamping: number;

        /**
         * Scaling factor for angular movement of the body in each axis.
         * @type {pc.Vec3}
         * @memberof RigidBodyComponent
         */
        angularFactor: pc.Vec3;

        /**
         * Defines the rotational speed of the body around each world axis. 
         * @type {pc.Vec3}
         * @memberof RigidBodyComponent
         */
        angularVelocity: pc.Vec3;

        /**
         * The friction value used when contacts occur between two bodies. A higher value
         * indicates more friction. Should be set in the range 0 to 1. Defaults to 0.5.
         * @type {number}
         * @memberof RigidBodyComponent
         */
        friction: number;

        /**
         * The collision group this body belongs to. Combine the group and the mask to
         * prevent bodies colliding with each other. Defaults to 1. 
         * @type {number}
         * @memberof RigidBodyComponent
         */
        group: number;

        /**
         * Controls the rate at which a body loses linear velocity over time.
         * Defaults to 0.
         * @type {number}
         * @memberof RigidBodyComponent
         */
        linearDamping: number;

        /**
         * Scaling factor for linear movement of the body in each axis.
         * Defaults to 1 in all axes.
         * @type {pc.Vec3}
         * @memberof RigidBodyComponent
         */
        linearFactor: pc.Vec3;

        /**
         * Defines the speed of the body in a given direction.
         * @type {pc.Vec3}
         * @memberof RigidBodyComponent
         */
        linearVelocity: pc.Vec3;

        /**
         * The collision mask sets which groups this body collides with. It is a bitfield
         * of 16 bits, the first 8 bits are reserved for engine use. Defaults to 65535.
         * @type {number}
         * @memberof RigidBodyComponent
         */
        mask: number;

        /**
         * The mass of the body. This is only relevant for {@link pc.BODYTYPE_DYNAMIC}
         * bodies, other types have infinite mass. Defaults to 1.
         * @type {number}
         * @memberof RigidBodyComponent
         */
        mass: number;

        /**
         * Influences the amount of energy lost when two rigid bodies collide. The
         * calculation multiplies the restitution values for both colliding bodies. A multiplied value of 0 means
         * that all energy is lost in the collision while a value of 1 means that no energy is lost. Should be
         * set in the range 0 to 1. Defaults to 0.
         * @type {number}
         * @memberof RigidBodyComponent
         */
        restitution: number;

        /**
         * The rigid body type determines how the body is simulated. Can be:
         * <ul>
         *     <li>pc.BODYTYPE_STATIC: infinite mass and cannot move.</li>
         *     <li>pc.BODYTYPE_DYNAMIC: simulated according to applied forces.</li>
         *     <li>pc.BODYTYPE_KINEMATIC: infinite mass and does not respond to forces but can still be moved by setting their velocity or position.</li>
         * </ul>
         * Defaults to pc.BODYTYPE_STATIC.
         * @type {string}
         * @memberof RigidBodyComponent
         */
        type: rigidBodyType;



        /**
        * @private
        * @function
        * @name pc.RigidBodyComponent#createBody
        * @description If the Entity has a Collision shape attached then create a rigid body using this shape. This method destroys the existing body.
        */
        private createBody(): void;

        /**
        * @function
        * @name pc.RigidBodyComponent#isActive
        * @description Returns true if the rigid body is currently actively being simulated. i.e. not 'sleeping'
        * @returns {Boolean} True if the body is active
        */
        isActive(): boolean;

        /**
        * @function
        * @name pc.RigidBodyComponent#activate
        * @description Forcibly activate the rigid body simulation
        */
        activate(): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyForce
         * @description Apply an force to the body at a point. By default, the force is applied at the origin of the
         * body. However, the force can be applied at an offset this point by specifying a world space vector from
         * the body's origin to the point of application.
         * @param {Number} x The x component of the force to apply, in world space.
         * @param {Number} y The y component of the force to apply, in world space.
         * @param {Number} z The z component of the force to apply, in world space.
         * @param {Number} [px] The x component of a world space offset from the body's position where the force is applied.
         * @param {Number} [py] The y component of a world space offset from the body's position where the force is applied.
         * @param {Number} [pz] The z component of a world space offset from the body's position where the force is applied.
         * @example
         * // EXAMPLE 1: Apply an approximation of gravity at the body's center
         * this.entity.rigidbody.applyForce(0, -10, 0);
         *
         * // EXAMPLE 2: Apply an approximation of gravity at 1 unit down the world Z from the center of the body
         * this.entity.rigidbody.applyForce(0, -10, 0, 0, 0, 1);
         */
        applyForce(x: number, y: number, z: number, px?: number, py?: number, pz?: number): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyForce^2
         * @description Apply an force to the body at a point. By default, the force is applied at the origin of the
         * body. However, the force can be applied at an offset this point by specifying a world space vector from
         * the body's origin to the point of application.
         * @param {pc.Vec3} force The force to apply, in world space.
         * @param {pc.Vec3} [relativePoint] A world space offset from the body's position where the force is applied.
         * @example
         * // EXAMPLE 1: Apply a force at the body's center
         * // Calculate a force vector pointing in the world space direction of the entity
         * var force = this.entity.forward.clone().scale(100);
         *
         * // Apply the force
         * this.entity.rigidbody.applyForce(force);
         *
         * // EXAMPLE 2: Apply a force at some relative offset from the body's center
         * // Calculate a force vector pointing in the world space direction of the entity
         * var force = this.entity.forward.clone().scale(100);
         *
         * // Calculate the world space relative offset
         * var relativePos = new pc.Vec3();
         * var childEntity = this.entity.findByName('Engine');
         * relativePos.sub2(childEntity.getPosition(), this.entity.getPosition());
         *
         * // Apply the force
         * this.entity.rigidbody.applyForce(force, relativePos);
         */
        applyForce(force: pc.Vec3, relativePoint: pc.Vec3): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyTorque
         * @description Apply torque (rotational force) to the body.
         * @param {Number} x The x component of the torque to apply, in world space.
         * @param {Number} y The y component of the torque to apply, in world space.
         * @param {Number} z The z component of the torque to apply, in world space.
         */
        applyTorque(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyTorque^2
         * @description Apply torque (rotational force) to the body.
         * @param {pc.Vec3} force The torque to apply, in world space.
         */
        applyTorque(force: pc.Vec3): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyImpulse
         * @description Apply an impulse (instantaneous change of velocity) to the body at a point.
         * @param {Number} x The x component of the impulse to apply, in world space.
         * @param {Number} y The y component of the impulse to apply, in world space.
         * @param {Number} z The z component of the impulse to apply, in world space.
         * @param {Number} [px] The x component of the point at which to apply the impulse, in local space (relative to the Entity).
         * @param {Number} [py] The y component of the point at which to apply the impulse, in local space (relative to the Entity).
         * @param {Number} [pz] The z component of the point at which to apply the impulse, in local space (relative to the Entity).
        */
        applyImpulse(x: number, y: number, z: number, px?: number, py?: number, pz?: number): void;


        /**
         * @function
         * @name pc.RigidBodyComponent#applyImpulse^2
         * @description Apply an impulse (instantaneous change of velocity) to the body at a point.
         * @param {pc.Vec3} impulse The impulse to apply, in world space.
         * @param {pc.Vec3} [relativePoint] The point at which to apply the impulse, in local space (relative to the entity).
         */
        applyImpulse(impulse: pc.Vec3, relativePoint?: pc.Vec3): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyTorqueImpulse
         * @description Apply a torque impulse (rotational force applied instantaneously) to the body.
         * @param {Number} x The x component of the torque impulse to apply, in world space.
         * @param {Number} y The y component of the torque impulse to apply, in world space.
         * @param {Number} z The z component of the torque impulse to apply, in world space.
        */
        applyTorqueImpulse(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#applyTorqueImpulse^2
         * @description Apply a torque impulse (rotational force applied instantaneously) to the body.
         * @param {pc.Vec3} torqueImpulse The torque impulse to apply, in world space.
         */
        applyTorqueImpulse(torqueImpulse: pc.Vec3): void;

        /**
         * @function
         * @name pc.RigidBodyComponent#isStatic
         * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_STATIC}
         * @returns {Boolean} True if static
         */
        isStatic(): boolean;

        /**
         * @function
         * @name pc.RigidBodyComponent#isStaticOrKinematic
         * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_STATIC} or {@link pc.BODYTYPE_KINEMATIC}
         * @returns {Boolean} True if static or kinematic
         */
        isStaticOrKinematic(): boolean;

        /**
         * @function
         * @name pc.RigidBodyComponent#isKinematic
         * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_KINEMATIC}
         * @returns {Boolean} True if kinematic
         */
        isKinematic(): boolean;


        /**
         * @private
         * @function
         * @name pc.RigidBodyComponent#syncEntityToBody
         * @description Set the rigid body transform to be the same as the Entity transform.
         * This must be called after any Entity transformation functions (e.g. {@link pc.Entity#setPosition}) are called
         * in order to update the rigid body to match the Entity.
         */
        private syncEntityToBody(): void;

        /**
         * @private
         * @function
         * @name pc.RigidBodyComponent#syncBodyToEntity
         * @description Update the Entity transform from the rigid body.
         * This is called internally after the simulation is stepped, to keep the Entity transform in sync with the rigid body transform.
         */
        private syncBodyToEntity(): void;

        /**
        * @function
        * @name pc.RigidBodyComponent#teleport
        * @description Teleport an entity to a new position and/or orientation
        * @param {pc.Vec3} position The new position
        * @param {pc.Vec3} [angles] The new set of Euler angles
        */
        teleport(position: pc.Vec3, angles?: pc.Vec3): void;

        /**
        * @function
        * @name pc.RigidBodyComponent#teleport^2
        * @description Teleport an entity to a new position and/or orientation
        * @param {pc.Vec3} position The new position
        * @param {pc.Quat} [rotation] The new rotation
        */
        teleport(position: pc.Vec3, rotation?: pc.Vec3): void;

        /**
        * @function
        * @name pc.RigidBodyComponent#teleport^3
        * @description Teleport an entity to a new position and/or orientation
        * @param {Number} x The new position x value
        * @param {Number} y The new position y value
        * @param {Number} z The new position z value
        * @param {Number} [x] The new x angle value
        * @param {Number} [y] The new y angle value
        * @param {Number} [z] The new z angle value
        */
        teleport(x: number, y: number, z: number, ax?: number, ay?: number, az?: number): void;

        /**
         * @private
         * @function
         * @name pc.RigidBodyComponent#_updateKinematic
         * @description Kinematic objects maintain their own linear and angular velocities. This method updates their transform
         * based on their current velocity. It is called in every frame in the main physics update loop, after the simulation is stepped.
         */
        private _updateKinematic(dt: number): void;
    }
}
