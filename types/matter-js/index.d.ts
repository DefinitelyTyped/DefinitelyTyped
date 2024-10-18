export = Matter;
export as namespace Matter;

declare namespace Matter {
    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    export function use(...plugins: Array<Plugin | string>): void;

    /**
     * The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
     */
    export class Axes {
        /**
         * Creates a new set of axes from the given vertices.
         * @method fromVertices
         * @param {Vertices} vertices
         * @returns {axes} A new axes from the given vertices
         */
        static fromVertices(vertices: Vector[]): Vector[];
        /**
         * Rotates a set of axes by the given angle.
         * @method rotate
         * @param {axes} axes
         * @param {number} angle
         */
        static rotate(axes: Vector[], angle: number): void;
    }

    interface IChamfer {
        radius?: number | number[] | undefined;
        quality?: number | undefined;
        qualityMin?: number | undefined;
        qualityMax?: number | undefined;
    }

    interface IChamferableBodyDefinition extends IBodyDefinition {
        chamfer?: IChamfer | undefined;
    }

    /**
     * The `Matter.Bodies` module contains factory methods for creating rigid body models
     * with commonly used body configurations (such as rectangles, circles and other polygons).
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Bodies {
        /**
         * Creates a new rigid body model with a circle hull.
         * The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
         * @method circle
         * @param {number} x
         * @param {number} y
         * @param {number} radius
         * @param {any} [options]
         * @param {number} [maxSides]
         * @returns {Body} A new circle body
         */
        static circle(x: number, y: number, radius: number, options?: IBodyDefinition, maxSides?: number): Body;

        /**
         * Creates a new rigid body model with a regular polygon hull with the given number of sides.
         * The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
         * @method polygon
         * @param {number} x
         * @param {number} y
         * @param {number} sides
         * @param {number} radius
         * @param {any} [options]
         * @returns {Body} A new regular polygon body
         */
        static polygon(x: number, y: number, sides: number, radius: number, options?: IChamferableBodyDefinition): Body;

        /**
         * Creates a new rigid body model with a rectangle hull.
         * The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
         * @method rectangle
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {any} [options]
         * @returns {Body} A new rectangle body
         */
        static rectangle(
            x: number,
            y: number,
            width: number,
            height: number,
            options?: IChamferableBodyDefinition,
        ): Body;

        /**
         * Creates a new rigid body model with a trapezoid hull.
         * The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
         * @method trapezoid
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} slope
         * @param {any} [options]
         * @returns {Body} A new trapezoid body
         */
        static trapezoid(
            x: number,
            y: number,
            width: number,
            height: number,
            slope: number,
            options?: IChamferableBodyDefinition,
        ): Body;
        /**
         * Creates a body using the supplied vertices (or an array containing multiple sets of vertices).
         * If the vertices are convex, they will pass through as supplied.
         * Otherwise if the vertices are concave, they will be decomposed if [poly-decomp.js](https://github.com/schteppe/poly-decomp.js) is available.
         * Note that this process is not guaranteed to support complex sets of vertices (e.g. those with holes may fail).
         * By default the decomposition will discard collinear edges (to improve performance).
         * It can also optionally discard any parts that have an area less than `minimumArea`.
         * If the vertices can not be decomposed, the result will fall back to using the convex hull.
         * The options parameter is an object that specifies any `Matter.Body` properties you wish to override the defaults.
         * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
         * @method fromVertices
         * @param {number} x
         * @param {number} y
         * @param {Vertex[][]} vertexSets
         * @param {any} [options]
         * @param {boolean} [flagInternal=false]
         * @param {number} [removeCollinear=0.01]
         * @param {number} [minimumArea=10]
         * @param {number} [removeDuplicatePoints=0.01]
         * @returns {Body}
         */
        static fromVertices(
            x: number,
            y: number,
            vertexSets: Vector[][],
            options?: IBodyDefinition,
            flagInternal?: boolean,
            removeCollinear?: number,
            minimumArea?: number,
            removeDuplicatePoints?: number,
        ): Body;
    }

    export interface IBodyDefinition {
        /**
         * A `Number` specifying the angle of the body, in radians.
         *
         * @default 0
         */
        angle?: number | undefined;
        /**
         * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
         *
         * @readOnly
         * @default 0
         */
        angularSpeed?: number | undefined;
        /**
         * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only.
         * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
         *
         * @readOnly
         * @default 0
         */
        angularVelocity?: number | undefined;
        /**
         * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
         *
         * @default
         */
        area?: number | undefined;
        /**
         * An array of unique axis vectors (edge normals) used for collision detection.
         * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
         * They are constantly updated by `Body.update` during the simulation.
         */
        axes?: Vector[] | undefined;
        /**
         * A `Bounds` object that defines the AABB region for the body.
         * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
         */
        bounds?: Bounds | undefined;
        /**
         * A `Number` that defines the density of the body, that is its mass per unit area.
         * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
         * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
         *
         * @default 0.001
         */
        density?: number | undefined;
        /**
         * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
         *
         * @default { x: 0, y: 0 }
         */
        force?: Vector | undefined;
        /**
         * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
         * A value of `0` means that the body may slide indefinitely.
         * A value of `1` means the body may come to a stop almost instantly after a force is applied.
         *
         * The effects of the value may be non-linear.
         * High values may be unstable depending on the body.
         * The engine uses a Coulomb friction model including static and kinetic friction.
         * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
         *
         *     Math.min(bodyA.friction, bodyB.friction)
         *
         * @default 0.1
         */
        friction?: number | undefined;
        /**
         * A `Number` that defines the air friction of the body (air resistance).
         * A value of `0` means the body will never slow as it moves through space.
         * The higher the value, the faster a body slows when moving through space.
         * The effects of the value are non-linear.
         *
         * @default 0.01
         */
        frictionAir?: number | undefined;
        /**
         * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
         */
        id?: number | undefined;
        /**
         * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
         * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
         * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
         */
        inertia?: number | undefined;
        /**
         * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
         * If you modify this value, you must also modify the `body.inertia` property.
         */
        inverseInertia?: number | undefined;
        /**
         * A `Number` that defines the inverse mass of the body (`1 / mass`).
         * If you modify this value, you must also modify the `body.mass` property.
         */
        inverseMass?: number | undefined;
        /**
         * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
         *
         * @default false
         */
        isSensor?: boolean | undefined;
        /**
         * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
         * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
         *
         * @default false
         */
        isSleeping?: boolean | undefined;
        /**
         * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
         * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
         *
         * @default false
         */
        isStatic?: boolean | undefined;
        /**
         * An arbitrary `String` name to help the user identify and manage bodies.
         *
         * @default "Body"
         */

        label?: string | undefined;
        /**
         * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
         * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
         */
        mass?: number | undefined;
        /**
         * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
         * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
         *
         * @readOnly
         * @default 0
         */
        motion?: number | undefined;
        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin?: any;
        /**
         * A `Vector` that specifies the current world-space position of the body.
         *
         * @default { x: 0, y: 0 }
         */
        position?: Vector | undefined;
        /**
         * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
         */
        render?: IBodyRenderOptions | undefined;
        /**
         * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
         * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur.
         * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
         * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
         *
         *     Math.max(bodyA.restitution, bodyB.restitution)
         *
         * @default 0
         */
        restitution?: number | undefined;
        /**
         * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
         *
         * @default 60
         */
        sleepThreshold?: number | undefined;
        /**
         * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
         * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
         * The default should generally suffice, although very large bodies may require larger values for stable stacking.
         *
         * @default 0.05
         */
        slop?: number | undefined;
        /**
         * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
         *
         * @readOnly
         * @default 0
         */
        speed?: number | undefined;
        /**
         * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
         *
         * @default 1
         */
        timeScale?: number | undefined;
        /**
         * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
         *
         * @default 0
         */
        torque?: number | undefined;
        /**
         * A `String` denoting the type of object.
         *
         * @default "body"
         */
        type?: string | undefined;
        /**
         * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only.
         * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
         *
         * @readOnly
         * @default { x: 0, y: 0 }
         */
        velocity?: Vector | undefined;
        /**
         * An array of `Vector` objects that specify the convex hull of the rigid body.
         * These should be provided about the origin `(0, 0)`. E.g.
         *
         *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
         *
         * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
         * The `Vector` objects are also augmented with additional properties required for efficient collision detection.
         *
         * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
         * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
         */
        vertices?: Vector[] | undefined;
        /**
         * An array of bodies that make up this body.
         * The first body in the array must always be a self reference to the current body instance.
         * All bodies in the `parts` array together form a single rigid compound body.
         * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
         * Parts themselves should never be added to a `World`, only the parent body should be.
         * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
         */
        parts?: Body[] | undefined;
        /**
         * A self reference if the body is _not_ a part of another body.
         * Otherwise this is a reference to the body that this is a part of.
         * See `body.parts`.
         */
        parent?: Body | undefined;
        /**
         * A `Number` that defines the static friction of the body (in the Coulomb friction model).
         * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
         * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
         * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
         *
         * @default 0.5
         */
        frictionStatic?: number | undefined;
        /**
         * An `Object` that specifies the collision filtering properties of this body.
         *
         * Collisions between two bodies will obey the following rules:
         * - If the two bodies have the same non-zero value of `collisionFilter.group`,
         *   they will always collide if the value is positive, and they will never collide
         *   if the value is negative.
         * - If the two bodies have different values of `collisionFilter.group` or if one
         *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
         *
         * Each body belongs to a collision category, given by `collisionFilter.category`. This
         * value is used as a bit field and the category should have only one bit set, meaning that
         * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
         * different collision categories available.
         *
         * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
         * the categories it collides with (the value is the bitwise AND value of all these categories).
         *
         * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
         * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
         * are both true.
         */
        collisionFilter?: ICollisionFilter | undefined;
    }

    export interface IBodyRenderOptions {
        /**
         * A flag that indicates if the body should be rendered.
         *
         * @default true
         */
        visible?: boolean | undefined;

        /**
         * An `Object` that defines the sprite properties to use when rendering, if any.
         */
        sprite?: IBodyRenderOptionsSprite | undefined;

        /**
         * A String that defines the fill style to use when rendering the body (if a sprite is not defined). It is the same as when using a canvas, so it accepts CSS style property values.
         Default: a random colour
        */
        fillStyle?: string | undefined;

        /**
         * A Number that defines the line width to use when rendering the body outline (if a sprite is not defined). A value of 0 means no outline will be rendered.
         Default: 1.5
        */
        lineWidth?: number | undefined;

        /**
         * A String that defines the stroke style to use when rendering the body outline (if a sprite is not defined). It is the same as when using a canvas, so it accepts CSS style property values.
         Default: a random colour
        */
        strokeStyle?: string | undefined;

        /*
         * Sets the opacity. 1.0 is fully opaque. 0.0 is fully translucent
         */
        opacity?: number | undefined;
    }

    export interface IBodyRenderOptionsSprite {
        /**
         * A `String` that defines the path to the image to use as the sprite texture, if any.
         */
        texture: string;

        /**
         * A `Number` that defines the scaling in the x-axis for the sprite, if any.
         *
         * @default 1
         */
        xScale: number;

        /**
         * A `Number` that defines the scaling in the y-axis for the sprite, if any.
         *
         * @default 1
         */
        yScale: number;
    }

    /**
     * The `Matter.Body` module contains methods for creating and manipulating body models.
     * A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
     * Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Body {
        /**
         * Applies a force to a body from a given world-space position, including resulting torque.
         * @method applyForce
         * @param {Body} body
         * @param {Vector} position
         * @param {Vector} force
         */
        static applyForce(body: Body, position: Vector, force: Vector): void;

        /**
         * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @returns {Body} body
         */
        static create(options: IBodyDefinition): Body;
        /**
         * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
         * @method rotate
         * @param {Body} body
         * @param {number} rotation
         */
        static rotate(body: Body, rotation: number): void;
        /**
         * Returns the next unique group index for which bodies will collide.
         * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
         * See `body.collisionFilter` for more information.
         * @method nextGroup
         * @param {boolean} [isNonColliding=false]
         * @returns {Number} Unique group index
         */
        static nextGroup(isNonColliding: boolean): number;
        /**
         * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
         * There are 32 available. See `body.collisionFilter` for more information.
         * @method nextCategory
         * @returns {Number} Unique category bitfield
         */
        static nextCategory(): number;
        /**
         * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
         * Prefer to use the actual setter functions in performance critical situations.
         * @method set
         * @param {Body} body
         * @param {} settings A property name (or map of properties and values) to set on the body.
         * @param {} value The value to set if `settings` is a single property name.
         */
        static set(body: Body, settings: any, value?: any): void;
        /**
         * Sets the mass of the body. Inverse mass and density are automatically updated to reflect the change.
         * @method setMass
         * @param {Body} body
         * @param {number} mass
         */
        static setMass(body: Body, mass: number): void;
        /**
         * Sets the density of the body. Mass is automatically updated to reflect the change.
         * @method setDensity
         * @param {Body} body
         * @param {number} density
         */
        static setDensity(body: Body, density: number): void;
        /**
         * Sets the moment of inertia (i.e. second moment of area) of the body of the body.
         * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
         * @method setInertia
         * @param {Body} body
         * @param {number} inertia
         */
        static setInertia(body: Body, interna: number): void;
        /**
         * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
         * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
         * They are then automatically translated to world space based on `body.position`.
         *
         * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
         * Vertices must form a convex hull, concave hulls are not supported.
         *
         * @method setVertices
         * @param {Body} body
         * @param {Vector[]} vertices
         */
        static setVertices(body: Body, vertices: Vector[]): void;
        /**
         * Sets the parts of the `body` and updates mass, inertia and centroid.
         * Each part will have its parent set to `body`.
         * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
         * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
         * @method setParts
         * @param {Body} body
         * @param [body] parts
         * @param {boolean} [autoHull=true]
         */
        static setParts(body: Body, parts: Body[], autoHull?: boolean): void;
        /**
         * Set the centre of mass of the body.
         * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
         * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
         * This is equal to moving `body.position` but not the `body.vertices`.
         * Invalid if the `centre` falls outside the body's convex hull.
         * @method setCentre
         * @param body
         * @param centre
         * @param relative
         */
        static setCentre(body: Body, centre: Vector, relative?: boolean): void;
        /**
         * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
         * @method setPosition
         * @param {Body} body
         * @param {Vector} position
         */
        static setPosition(body: Body, position: Vector): void;
        /**
         * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
         * @method setAngle
         * @param {Body} body
         * @param {number} angle
         */
        static setAngle(body: Body, angle: number): void;
        /**
         * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
         * @method setVelocity
         * @param {Body} body
         * @param {Vector} velocity
         */
        static setVelocity(body: Body, velocity: Vector): void;
        /**
         * Gets the current linear velocity of the body.
         * @method getVelocity
         * @param {body} body
         * @return {vector} velocity
         */
        static getVelocity(body: Body): Vector;
        /**
         * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
         * @method setAngularVelocity
         * @param {Body} body
         * @param {number} velocity
         */
        static setAngularVelocity(body: Body, velocity: number): void;
        /**
         * Gets the current rotational velocity of the body.
         * @method getAngularVelocity
         * @param {body} body
         * @return {number} angular velocity
         */
        static getAngularVelocity(body: Body): number;
        /**
         * Sets the current rotational speed of the body.
         * Direction is maintained. Affects body angular velocity.
         * @method setAngularSpeed
         * @param {body} body
         * @param {number} speed
         */
        static setAngularSpeed(body: Body, speed: number): void;
        /**
         * Gets the current rotational speed of the body.
         * Equivalent to the magnitude of its angular velocity.
         * @method getAngularSpeed
         * @param {body} body
         * @return {number} angular speed
         */
        static getAngularSpeed(body: Body): number;
        /**
         * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
         * @method updateVelocities
         * @param {body} body
         */
        static updateVelocities(body: Body): void;
        /**
         * Gets the current linear speed of the body.
         * Equivalent to the magnitude of its velocity.
         * @method getSpeed
         * @param {body} body
         * @return {number} speed
         */
        static getSpeed(body: Body): number;
        /**
         * Sets the current linear speed of the body.
         * Direction is maintained. Affects body velocity.
         * @method setSpeed
         * @param {body} body
         * @param {number} speed
         */
        static setSpeed(body: Body, speed: number): void;

        /**
         * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
         * @method setStatic
         * @param {Body} body
         * @param {boolean} isStatic
         */
        static setStatic(body: Body, isStatic: boolean): void;

        /**
         * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
         * @method scale
         * @param {Body} body
         * @param {number} scaleX
         * @param {number} scaleY
         * @param {Vector} [point]
         */
        static scale(body: Body, scaleX: number, scaleY: number, point?: Vector): void;

        /**
         * Moves a body by a given vector relative to its current position, without imparting any velocity.
         * @method translate
         * @param {Body} body
         * @param {Vector} translation
         */
        static translate(body: Body, translation: Vector): void;

        /**
         * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
         * @method update
         * @param {Body} body
         * @param {number} deltaTime
         * @param {number} timeScale
         * @param {number} correction
         */
        static update(body: Body, deltaTime: number, timeScale: number, correction: number): void;

        /**
         * A `Number` specifying the angle of the body, in radians.
         *
         * @default 0
         */
        angle: number;
        /**
         * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
         *
         * @readOnly
         * @default 0
         */
        readonly angularSpeed: number;
        /**
         * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only.
         * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
         *
         * @readOnly
         * @default 0
         */
        readonly angularVelocity: number;
        /**
         * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
         *
         * @default
         */
        area: number;
        /**
         * An array of unique axis vectors (edge normals) used for collision detection.
         * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
         * They are constantly updated by `Body.update` during the simulation.
         */
        axes: Vector[];
        /**
         * A `Bounds` object that defines the AABB region for the body.
         * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
         */
        bounds: Bounds;
        /**
         * A `Number` that is set to the radius of the object if the body was constructed using `Bodies.circle`.
         * May have a value of `null` if the body is no longer a circle (i.e. was scaled with a scaleX != scaleY).
         *
         * @default 0
         */
        circleRadius?: number | undefined;
        /**
         * A `Number` that defines the density of the body, that is its mass per unit area.
         * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
         * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
         *
         * @default 0.001
         */
        density: number;
        /**
         * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
         *
         * @default { x: 0, y: 0 }
         */
        force: Vector;
        /**
         * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
         * A value of `0` means that the body may slide indefinitely.
         * A value of `1` means the body may come to a stop almost instantly after a force is applied.
         *
         * The effects of the value may be non-linear.
         * High values may be unstable depending on the body.
         * The engine uses a Coulomb friction model including static and kinetic friction.
         * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
         *
         *     Math.min(bodyA.friction, bodyB.friction)
         *
         * @default 0.1
         */
        friction: number;
        /**
         * A `Number` that defines the air friction of the body (air resistance).
         * A value of `0` means the body will never slow as it moves through space.
         * The higher the value, the faster a body slows when moving through space.
         * The effects of the value are non-linear.
         *
         * @default 0.01
         */
        frictionAir: number;
        /**
         * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
         */
        id: number;
        /**
         * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
         * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
         * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
         */
        inertia: number;
        /**
         * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
         * If you modify this value, you must also modify the `body.inertia` property.
         */
        inverseInertia: number;
        /**
         * A `Number` that defines the inverse mass of the body (`1 / mass`).
         * If you modify this value, you must also modify the `body.mass` property.
         */
        inverseMass: number;
        /**
         * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
         * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
         *
         * @default false
         */
        isSleeping: boolean;
        /**
         * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
         * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
         *
         * @default false
         */
        isStatic: boolean;
        /**
         * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
         *
         * @default false
         */
        isSensor: boolean;
        /**
         * An arbitrary `String` name to help the user identify and manage bodies.
         *
         * @default "Body"
         */

        label: string;
        /**
         * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
         * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
         */
        mass: number;
        /**
         * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
         * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
         *
         * @readOnly
         * @default 0
         */
        readonly motion: number;
        /**
         * A `Vector` that specifies the current world-space position of the body.
         *
         * @default { x: 0, y: 0 }
         */
        position: Vector;
        /**
         * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
         */
        render: IBodyRenderOptions;
        /**
         * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
         * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur.
         * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
         * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
         *
         *     Math.max(bodyA.restitution, bodyB.restitution)
         *
         * @default 0
         */
        restitution: number;
        /**
         * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
         *
         * @default 60
         */
        sleepThreshold: number;
        /**
         * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
         * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
         * The default should generally suffice, although very large bodies may require larger values for stable stacking.
         *
         * @default 0.05
         */
        slop: number;
        /**
         * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
         *
         * @readOnly
         * @default 0
         */
        readonly speed: number;
        /**
         * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
         *
         * @default 1
         */
        timeScale: number;
        /**
         * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
         *
         * @default 0
         */
        torque: number;
        /**
         * A `String` denoting the type of object.
         *
         * @default "body"
         */
        type: string;
        /**
         * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only.
         * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
         *
         * @readOnly
         * @default { x: 0, y: 0 }
         */
        readonly velocity: Vector;
        /**
         * An array of `Vector` objects that specify the convex hull of the rigid body.
         * These should be provided about the origin `(0, 0)`. E.g.
         *
         *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
         *
         * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
         * The `Vector` objects are also augmented with additional properties required for efficient collision detection.
         *
         * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
         * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
         */
        vertices: Vector[];
        /**
         * An array of bodies that make up this body.
         * The first body in the array must always be a self reference to the current body instance.
         * All bodies in the `parts` array together form a single rigid compound body.
         * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
         * Parts themselves should never be added to a `World`, only the parent body should be.
         * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
         */
        parts: Body[];
        /**
         * A self reference if the body is _not_ a part of another body.
         * Otherwise this is a reference to the body that this is a part of.
         * See `body.parts`.
         */
        parent: Body;
        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin: any;
        /**
         * A `Number` that defines the static friction of the body (in the Coulomb friction model).
         * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
         * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
         * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
         *
         * @default 0.5
         */
        frictionStatic: number;
        /**
         * An `Object` that specifies the collision filtering properties of this body.
         *
         * Collisions between two bodies will obey the following rules:
         * - If the two bodies have the same non-zero value of `collisionFilter.group`,
         *   they will always collide if the value is positive, and they will never collide
         *   if the value is negative.
         * - If the two bodies have different values of `collisionFilter.group` or if one
         *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
         *
         * Each body belongs to a collision category, given by `collisionFilter.category`. This
         * value is used as a bit field and the category should have only one bit set, meaning that
         * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
         * different collision categories available.
         *
         * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
         * the categories it collides with (the value is the bitwise AND value of all these categories).
         *
         * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
         * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
         * are both true.
         */
        collisionFilter: ICollisionFilter;
    }

    /**
     * The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
     */
    export class Bounds {
        min: Vector;
        max: Vector;

        /**
         * Creates a new axis-aligned bounding box (AABB) for the given vertices.
         * @method create
         * @param {Vertices} vertices
         * @returns {Bounds} A new bounds object
         */
        static create(vertices: Vertices): Bounds;
        /**
         * Updates bounds using the given vertices and extends the bounds given a velocity.
         * @method update
         * @param {Bounds} bounds
         * @param {Vertices} vertices
         * @param {Vector} velocity
         */
        static update(bounds: Bounds, vertices: Vertices, velocity: Vector): void;
        /**
         * Returns true if the bounds contains the given point.
         * @method contains
         * @param {Bounds} bounds
         * @param {Vector} point
         * @returns {boolean} True if the bounds contain the point, otherwise false
         */
        static contains(bounds: Bounds, point: Vector): boolean;
        /**
         * Returns true if the two bounds intersect.
         * @method overlaps
         * @param {Bounds} boundsA
         * @param {Bounds} boundsB
         * @returns {boolean} True if the bounds overlap, otherwise false
         */
        static overlaps(boundsA: Bounds, boundsB: Bounds): boolean;
        /**
         * Translates the bounds by the given vector.
         * @method translate
         * @param {Bounds} bounds
         * @param {Vector} vector
         */
        static translate(bounds: Bounds, vector: Vector): void;
        /**
         * Shifts the bounds to the given position.
         * @method shift
         * @param {Bounds} bounds
         * @param {Vector} position
         */
        static shift(bounds: Bounds, position: Vector): void;
    }

    export interface ICompositeDefinition {
        /**
         * An array of `Body` that are _direct_ children of this composite.
         * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
         *
         * @default []
         */
        bodies?: Body[] | undefined;

        /**
         * An array of `Composite` that are _direct_ children of this composite.
         * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
         *
         * @default []
         */
        composites?: Composite[] | undefined;

        /**
         * An array of `Constraint` that are _direct_ children of this composite.
         * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
         *
         * @default []
         */
        constraints?: Constraint[] | undefined;

        /**
         * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
         */
        id?: number | undefined;

        /**
         * A flag that specifies whether the composite has been modified during the current step.
         * Most `Matter.Composite` methods will automatically set this flag to `true` to inform the engine of changes to be handled.
         * If you need to change it manually, you should use the `Composite.setModified` method.
         *
         * @default false
         */
        isModified?: boolean | undefined;

        /**
         * An arbitrary `String` name to help the user identify and manage composites.
         *
         * @default "Composite"
         */
        label?: string | undefined;

        /**
         * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
         *
         * @default null
         */
        parent?: Composite | undefined;

        /**
         * A `String` denoting the type of object.
         *
         * @default "composite"
         */
        type?: String | undefined;
    }

    /**
     * The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
     * A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
     * It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
     * Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Composite {
        /**
         * Generic add function. Adds one or many body(s), constraint(s) or a composite(s) to the given composite.
         * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
         * @method add
         * @param {Composite} composite
         * @param {any} object
         * @returns {Composite} The original composite with the objects added
         */
        static add(
            composite: Composite,
            object:
                | Body
                | Composite
                | Constraint
                | MouseConstraint
                | Array<Body | Composite | Constraint | MouseConstraint>,
        ): Composite;

        /**
         * Returns all bodies in the given composite, including all bodies in its children, recursively.
         * @method allBodies
         * @param {Composite} composite
         * @returns {Body[]} All the bodies
         */
        static allBodies(composite: Composite): Body[];

        /**
         * Returns all composites in the given composite, including all composites in its children, recursively.
         * @method allComposites
         * @param {Composite} composite
         * @returns {Composite[]} All the composites
         */
        static allComposites(composite: Composite): Composite[];

        /**
         * Returns all constraints in the given composite, including all constraints in its children, recursively.
         * @method allConstraints
         * @param {Composite} composite
         * @returns {Constraint[]} All the constraints
         */
        static allConstraints(composite: Composite): Constraint[];

        /**
         * Removes all bodies, constraints and composites from the given composite.
         * Optionally clearing its children recursively.
         * @method clear
         * @param {Composite} composite
         * @param {boolean} keepStatic
         * @param {boolean} [deep=false]
         */
        static clear(composite: Composite, keepStatic: boolean, deep?: boolean): void;

        /**
         * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properites section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} [options]
         * @returns {Composite} A new composite
         */
        static create(options?: ICompositeDefinition): Composite;

        /**
         * Searches the composite recursively for an object matching the type and id supplied, null if not found.
         * @method get
         * @param {Composite} composite
         * @param {number} id
         * @param {string} type
         * @returns {any} The requested object, if found
         */
        static get(composite: Composite, id: number, type: string): Body | Composite | Constraint;

        /**
         * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
         * @method move
         * @param {compositeA} compositeA
         * @param {(Body | Composite | Constraint)[]} objects
         * @param {compositeB} compositeB
         * @returns {Composite} Returns compositeA
         */
        static move(
            compositeA: Composite,
            objects: Array<Body | Composite | Constraint>,
            compositeB: Composite,
        ): Composite;

        /**
         * Assigns new ids for all objects in the composite, recursively.
         * @method rebase
         * @param {Composite} composite
         * @returns {Composite} Returns composite
         */
        static rebase(composite: Composite): Composite;

        /**
         * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
         * Optionally searching its children recursively.
         * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
         * @method remove
         * @param {Composite} composite
         * @param {Body | Composite | Constraint | MouseConstraint | Array<Body | Composite | Constraint | MouseConstraint>} object
         * @param {boolean} [deep=false]
         * @returns {Composite} The original composite with the objects removed
         */
        static remove(
            composite: Composite,
            object:
                | Body
                | Composite
                | Constraint
                | MouseConstraint
                | Array<Body | Composite | Constraint | MouseConstraint>,
            deep?: boolean,
        ): Composite;

        /**
         * Translates all children in the composite by a given vector relative to their current positions,
         * without imparting any velocity.
         * @method translate
         * @param {Composite} composite
         * @param {Vector} translation
         * @param {boolean} [recursive=true]
         */
        static translate(composite: Composite, translation: Vector, recursive?: boolean): void;
        /**
         * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
         * @method rotate
         * @param {Composite} composite
         * @param {number} rotation
         * @param {Vector} point
         * @param {boolean} [recursive=true]
         */
        static rotate(composite: Composite, rotation: number, point: Vector, recursive?: boolean): void;
        /**
         * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
         * @method scale
         * @param {Composite} composite
         * @param {number} scaleX
         * @param {number} scaleY
         * @param {Vector} point
         * @param {boolean} [recursive=true]
         */
        static scale(composite: Composite, scaleX: number, scaleY: number, point: Vector, recursive?: boolean): void;

        /**
         * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
         */
        id: number;

        /**
         * A `String` denoting the type of object.
         *
         * @default "composite"
         * @readOnly
         */
        readonly type: string;

        /**
         * An arbitrary `String` name to help the user identify and manage composites.
         *
         * @default "Composite"
         */
        label: string;

        /**
         * A flag that specifies whether the composite has been modified during the current step.
         * This is automatically managed when bodies, constraints or composites are added or removed.
         *
         * @default false
         */
        isModified: boolean;

        /**
         * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
         *
         * @default null
         */
        parent: Composite | null;

        /**
         * An array of `Body` that are _direct_ children of this composite.
         * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
         *
         * @default []
         */
        bodies: Body[];

        /**
         * An array of `Constraint` that are _direct_ children of this composite.
         * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
         *
         * @default []
         */
        constraints: Constraint[];

        /**
         * An array of `Composite` that are _direct_ children of this composite.
         * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
         * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
         *
         * @default []
         */
        composites: Composite[];

        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin: Plugin;
    }

    /**
     * The `Matter.Composites` module contains factory methods for creating composite bodies
     * with commonly used configurations (such as stacks and chains).
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Composites {
        /**
         * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
         * @deprecated moved to car example
         * @method car
         * @param {number} xx
         * @param {number} yy
         * @param {number} width
         * @param {number} height
         * @param {number} wheelSize
         * @returns {Composite} A new composite car body
         */
        static car(xx: number, yy: number, width: number, height: number, wheelSize: number): Composite;

        /**
         * Chains all bodies in the given composite together using constraints.
         * @method chain
         * @param {Composite} composite
         * @param {number} xOffsetA
         * @param {number} yOffsetA
         * @param {number} xOffsetB
         * @param {number} yOffsetB
         * @param {any} options
         * @returns {Composite} A new composite containing objects chained together with constraints
         */
        static chain(
            composite: Composite,
            xOffsetA: number,
            yOffsetA: number,
            xOffsetB: number,
            yOffsetB: number,
            options: any,
        ): Composite;

        /**
         * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
         * @method mesh
         * @param {Composite} composite
         * @param {number} columns
         * @param {number} rows
         * @param {boolean} crossBrace
         * @param {any} options
         * @returns {Composite} The composite containing objects meshed together with constraints
         */
        static mesh(composite: Composite, columns: number, rows: number, crossBrace: boolean, options: any): Composite;

        /**
         * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
         * @deprecated moved to newtonsCradle example
         * @method newtonsCradle
         * @param {number} xx
         * @param {number} yy
         * @param {number} number
         * @param {number} size
         * @param {number} length
         * @returns {Composite} A new composite newtonsCradle body
         */
        static newtonsCradle(xx: number, yy: number, _number: number, size: number, length: number): Composite;

        /**
         * Create a new composite containing bodies created in the callback in a pyramid arrangement.
         * This function uses the body's bounds to prevent overlaps.
         * @method pyramid
         * @param {number} xx
         * @param {number} yy
         * @param {number} columns
         * @param {number} rows
         * @param {number} columnGap
         * @param {number} rowGap
         * @param {function} callback
         * @returns {Composite} A new composite containing objects created in the callback
         */
        static pyramid(
            xx: number,
            yy: number,
            columns: number,
            rows: number,
            columnGap: number,
            rowGap: number,
            callback: Function,
        ): Composite;

        /**
         * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
         * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
         * @deprecated moved to softBody and cloth examples
         * @method softBody
         * @param {number} xx
         * @param {number} yy
         * @param {number} columns
         * @param {number} rows
         * @param {number} columnGap
         * @param {number} rowGap
         * @param {boolean} crossBrace
         * @param {number} particleRadius
         * @param {} particleOptions
         * @param {} constraintOptions
         * @returns {Composite} A new composite softBody
         */
        static softBody(
            xx: number,
            yy: number,
            columns: number,
            rows: number,
            columnGap: number,
            rowGap: number,
            crossBrace: boolean,
            particleRadius: number,
            particleOptions: any,
            constraintOptions: any,
        ): Composite;

        /**
         * Create a new composite containing bodies created in the callback in a grid arrangement.
         * This function uses the body's bounds to prevent overlaps.
         * @method stack
         * @param {number} xx
         * @param {number} yy
         * @param {number} columns
         * @param {number} rows
         * @param {number} columnGap
         * @param {number} rowGap
         * @param {function} callback
         * @returns {Composite} A new composite containing objects created in the callback
         */
        static stack(
            xx: number,
            yy: number,
            columns: number,
            rows: number,
            columnGap: number,
            rowGap: number,
            callback: Function,
        ): Composite;
    }

    export interface IConstraintDefinition {
        /**
         * The first possible `Body` that this constraint is attached to.
         *
         * @default null
         */
        bodyA?: Body | undefined;

        /**
         * The second possible `Body` that this constraint is attached to.
         *
         * @default null
         */
        bodyB?: Body | undefined;

        /**
         * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
         */
        id?: number | undefined;

        /**
         * An arbitrary `String` name to help the user identify and manage bodies.
         *
         * @default "Constraint"
         */
        label?: string | undefined;

        /**
         * A `Number` that specifies the target resting length of the constraint.
         * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
         */
        length?: number | undefined;

        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
         *
         * @default { x: 0, y: 0 }
         */
        pointA?: Vector | undefined;

        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
         *
         * @default { x: 0, y: 0 }
         */
        pointB?: Vector | undefined;

        /**
         * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
         */
        render?: IConstraintRenderDefinition | undefined;

        /**
         * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
         * A value of `1` means the constraint should be very stiff.
         * A value of `0.2` means the constraint acts like a soft spring.
         *
         * @default 1
         */
        stiffness?: number | undefined;

        /**
         * A `Number` that specifies the damping of the constraint,
         * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
         * Damping will only be apparent when the constraint also has a very low `stiffness`.
         * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
         * A value of `0` means the constraint will apply no damping.
         *
         * @default 0
         */
        damping?: number | undefined;

        /**
         * A `String` denoting the type of object.
         *
         * @default "constraint"
         */
        type?: string | undefined;
    }

    export interface IConstraintRenderDefinition {
        /**
         * A `Number` that defines the line width to use when rendering the constraint outline.
         * A value of `0` means no outline will be rendered.
         *
         * @default 2
         */
        lineWidth?: number | undefined;

        /**
         * A `String` that defines the stroke style to use when rendering the constraint outline.
         * It is the same as when using a canvas, so it accepts CSS style property values.
         *
         * @default a random colour
         */
        strokeStyle?: string | undefined;

        /**
         * A flag that indicates if the constraint should be rendered.
         *
         * @default true
         */
        visible?: boolean | undefined;

        /**
         * A `Boolean` that defines if the constraint's anchor points should be rendered.
         *
         * @default true
         */
        anchors?: boolean | undefined;

        /**
         * A String that defines the constraint rendering type. The possible values are
         * 'line', 'pin', 'spring'. An appropriate render type will be automatically
         * chosen unless one is given in options.
         *
         * @default 'line'
         */
        type?: "line" | "pin" | "spring" | undefined;
    }

    /**
     * The `Matter.Constraint` module contains methods for creating and manipulating constraints.
     * Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
     * The stiffness of constraints can be modified to create springs or elastic.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Constraint {
        /**
         * Creates a new constraint.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @returns {constraint} constraint
         */
        static create(options: IConstraintDefinition): Constraint;

        /**
         * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
         * @method pointAWorld
         * @param {constraint} constraint
         * @returns {Vector} the world-space position
         */
        static pointAWorld(constraint: Constraint): Vector;

        /**
         * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
         * @method pointBWorld
         * @param {constraint} constraint
         * @returns {Vector} the world-space position
         */
        static pointBWorld(constraint: Constraint): Vector;

        /**
         * The first possible `Body` that this constraint is attached to.
         *
         * @default null
         */
        bodyA: Body | null;

        /**
         * The second possible `Body` that this constraint is attached to.
         *
         * @default null
         */
        bodyB: Body | null;

        /**
         * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
         */
        id: number;

        /**
         * An arbitrary `String` name to help the user identify and manage bodies.
         *
         * @default "Constraint"
         */
        label: string;

        /**
         * A `Number` that specifies the target resting length of the constraint.
         * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
         */
        length: number;

        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
         *
         * @default { x: 0, y: 0 }
         */
        pointA: Vector;

        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
         *
         * @default { x: 0, y: 0 }
         */
        pointB: Vector;

        /**
         * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
         */
        render: IConstraintRenderDefinition;

        /**
         * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
         * A value of `1` means the constraint should be very stiff.
         * A value of `0.2` means the constraint acts like a soft spring.
         *
         * @default 1
         */
        stiffness: number;

        /**
         * A `Number` that specifies the damping of the constraint,
         * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
         * Damping will only be apparent when the constraint also has a very low `stiffness`.
         * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
         * A value of `0` means the constraint will apply no damping.
         *
         * @default 0
         */
        damping: number;

        /**
         * A `String` denoting the type of object.
         *
         * @default "constraint"
         */
        type: string;
    }

    export interface IEngineDefinition {
        /**
         * An integer `Number` that specifies the number of position iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         *
         * @default 6
         */
        positionIterations?: number;
        /**
         * An integer `Number` that specifies the number of velocity iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         *
         * @default 4
         */
        velocityIterations?: number;
        /**
         * An integer `Number` that specifies the number of constraint iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         * The default value of `2` is usually very adequate.
         *
         * @default 2
         */
        constraintIterations?: number;

        /**
         * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
         * Sleeping can improve stability and performance, but often at the expense of accuracy.
         *
         * @default false
         */
        enableSleeping?: boolean;

        /**
         * An `Object` containing properties regarding the timing systems of the engine.
         */
        timing?: Partial<IEngineTimingOptions>;

        /**
         * A `Matter.Detector` instance.
         *
         * @default {Matter.Detector} instance
         */
        detector?: Detector;

        /**
         * A `Matter.Grid` instance.
         *
         * @deprecated replaced by `engine.detector`
         * @default a Matter.Grid instance
         */
        grid?: Grid;

        /**
         * A `World` composite object that will contain all simulated bodies and constraints.
         *
         * @default {Matter.World} instance
         */
        world?: World;

        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin?: {};

        /**
         * The gravity to apply on all bodies in `engine.world`.
         */
        gravity?: Partial<Gravity>;
    }

    export interface IEngineTimingOptions {
        /**
         * A `Number` that specifies the global scaling factor of time for all bodies.
         * A value of `0` freezes the simulation.
         * A value of `0.1` gives a slow-motion effect.
         * A value of `1.2` gives a speed-up effect.
         *
         * @default 1
         */
        timeScale: number;

        /**
         * A `Number` that specifies the current simulation-time in milliseconds starting from `0`.
         * It is incremented on every `Engine.update` by the given `delta` argument.
         *
         * @default 0
         */
        timestamp: number;

        /**
         * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
         * It is updated by timing from the start of the last `Engine.update` call until it ends.
         *
         * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
         *
         * @default 0
         */
        lastElapsed: number;

        /**
         * A `Number` that represents the `delta` value used in the last engine update.
         *
         * @default 0
         */
        lastDelta: number;
    }

    /**
     * The `Matter.Engine` module contains methods for creating and manipulating engines.
     * An engine is a controller that manages updating the simulation of the world.
     * See `Matter.Runner` for an optional game loop utility.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Engine {
        /**
         * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {IEngineDefinition} [options]
         * @returns {Engine} engine
         */
        static create(options?: IEngineDefinition): Engine;

        /**
         * Clears the engine pairs and detector.
         * @method clear
         * @param {engine} engine
         */
        static clear(engine: Engine): void;

        /**
         * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
         * @method merge
         * @param {engine} engineA
         * @param {engine} engineB
         */
        static merge(engineA: Engine, engineB: Engine): void;

        /**
         * Moves the simulation forward in time by `delta` ms.
         * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
         * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
         * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
         * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
         * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
         *
         * Triggers `beforeUpdate` and `afterUpdate` events.
         * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
         * @method update
         * @param {engine} engine
         * @param {number} [delta=16.666]
         * @param {number} [correction=1]
         */
        static update(engine: Engine, delta?: number, correction?: number): Engine;

        /**
         * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
         * @deprecated use Matter.Runner.run(engine) instead
         * @method run
         * @param {engine} engine
         */
        static run(enige: Engine): void;

        /**
         * Replaced by and now alias for `engine.grid`.
         *
         * @deprecated use `engine.grid`
         * @default a Matter.Grid instance
         */
        broadphase: Grid;
        /**
         * An integer `Number` that specifies the number of constraint iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         * The default value of `2` is usually very adequate.
         *
         * @default 2
         */
        constraintIterations: number;

        /**
         * A flag that specifies whether the engine is running or not.
         */
        enabled: boolean;

        /**
         * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
         * Sleeping can improve stability and performance, but often at the expense of accuracy.
         *
         * @default false
         */
        enableSleeping: boolean;

        /**
         * The gravity to apply on all bodies in `engine.world`.
         */
        gravity: Gravity;

        /**
         * Collision pair set for this `Engine`.
         */
        pairs: any;

        /**
         * An integer `Number` that specifies the number of position iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         *
         * @default 6
         */
        positionIterations: number;

        /**
         * An instance of a `Render` controller. The default value is a `Matter.Render` instance created by `Engine.create`.
         * One may also develop a custom renderer module based on `Matter.Render` and pass an instance of it to `Engine.create` via `options.render`.
         *
         * A minimal custom renderer object must define at least three functions: `create`, `clear` and `world` (see `Matter.Render`).
         * It is also possible to instead pass the _module_ reference via `options.render.controller` and `Engine.create` will instantiate one for you.
         *
         * @default a Matter.Render instance
         */
        render: Render;

        /**
         * An `Object` containing properties regarding the timing systems of the engine.
         */
        timing: IEngineTimingOptions;

        /**
         * A `Matter.Detector` instance.
         *
         * @default {Matter.Detector} instance
         */
        detector: Detector;

        /**
         * A `Matter.Grid` instance.
         *
         * @deprecated replaced by `engine.detector`
         * @default a Matter.Grid instance
         */
        grid: Grid;

        /**
         * An integer `Number` that specifies the number of velocity iterations to perform each update.
         * The higher the value, the higher quality the simulation will be at the expense of performance.
         *
         * @default 4
         */
        velocityIterations: number;

        /**
         * A `World` composite object that will contain all simulated bodies and constraints.
         *
         * @default a Matter.World instance
         */
        world: World;
    }

    export interface IGridDefinition {}

    /**
     * This module has now been replaced by `Matter.Detector`.
     *
     * All usage should be migrated to `Matter.Detector` or another alternative.
     * For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
     *
     * The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
     *
     * @deprecated
     */
    export class Grid {
        /**
         * Creates a new grid.
         * @deprecated replaced by Matter.Detector
         * @method create
         * @param {} options
         * @returns {grid} A new grid
         */
        static create(options?: IGridDefinition): Grid;

        /**
         * Updates the grid.
         * @method update
         * @deprecated replaced by Matter.Detector
         * @param {grid} grid
         * @param {Body[]} bodies
         * @param {engine} engine
         * @param {boolean} forceUpdate
         */
        static update(grid: Grid, bodies: Body[], engine: Engine, forceUpdate: boolean): void;

        /**
         * Clears the grid.
         * @deprecated replaced by Matter.Detector
         * @method clear
         * @param {grid} grid
         */
        static clear(grid: Grid): void;

        /**
         * The width of a single grid bucket.
         * @deprecated replaced by Matter.Detector
         */
        bucketWidth: number;

        /**
         * The height of a single grid bucket.
         * @deprecated replaced by Matter.Detector
         */
        bucketHeight: number;
    }

    export interface IMouseConstraintDefinition {
        /**
         * The `Constraint` object that is used to move the body during interaction.
         */
        constraint?: IConstraintDefinition | undefined;

        /**
         * An `Object` that specifies the collision filter properties.
         * The collision filter allows the user to define which types of body this mouse constraint can interact with.
         * See `body.collisionFilter` for more information.
         */
        collisionFilter?: ICollisionFilter | undefined;

        /**
         * The `Body` that is currently being moved by the user, or `null` if no body.
         *
         * @default null
         */
        body?: Body | undefined;

        /**
         * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
         *
         * @default mouse
         */
        mouse?: Mouse | undefined;

        /**
         * A `String` denoting the type of object.
         *
         * @default "constraint"
         */

        type?: string | undefined;
    }

    /**
     * The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
     * Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class MouseConstraint {
        /**
         * Creates a new mouse constraint.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {engine} engine
         * @param {} options
         * @returns {MouseConstraint} A new MouseConstraint
         */
        static create(engine: Engine, options?: IMouseConstraintDefinition): MouseConstraint;

        /**
         * The `Constraint` object that is used to move the body during interaction.
         */
        constraint: Constraint;

        /**
         * An `Object` that specifies the collision filter properties.
         * The collision filter allows the user to define which types of body this mouse constraint can interact with.
         * See `body.collisionFilter` for more information.
         */
        collisionFilter: ICollisionFilter;

        /**
         * The `Body` that is currently being moved by the user, or `null` if no body.
         *
         * @default null
         */
        body: Body;

        /**
         * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
         *
         * @default mouse
         */
        mouse: Mouse;

        /**
         * A `String` denoting the type of object.
         *
         * @default "constraint"
         */

        type: string;
    }

    /**
     * The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
     */
    export class Pairs {
        /**
         * Creates a new pairs structure.
         * @method create
         * @param {any} options
         * @returns {Pairs} A new pairs structure
         */
        static create(options: any): Pairs;

        /**
         * Clears the given pairs structure.
         * @method clear
         * @param {Pairs} pairs
         * @returns {Pairs} pairs
         */
        static clear(pairs: Pairs): Pairs;

        /**
         * Updates pairs given a list of collisions.
         * @method update
         * @param {Pairs} pairs
         * @param {Collision[]} collisions
         * @param {number} timestamp
         */
        static update(pairs: Pairs, collisions: Collision[], timestamp: number): void;
    }

    export interface Vertex extends Vector {
        index: number;
        body: Body;
        isInternal: boolean;
    }

    /**
     * The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
     */
    export class Contact {
        /**
         * Creates a new contact.
         * @method create
         * @param {Vertex} vertex
         * @returns {contact} A new contact
         */
        static create(vertex: Vertex): Contact;

        vertex: Vertex;
        normalImpulse: number;
        tangentImpulse: number;
    }

    /**
     * The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
     */
    export class Pair {
        /**
         * Creates a pair.
         * @method create
         * @param {Collision} collision
         * @param {number} timestamp
         * @returns {Pair} A new pair
         */
        static create(collision: Collision, timestamp: number): Pair;

        /**
         * Updates a pair given a collision.
         * @method update
         * @param {Pair} pair
         * @param {Collision} collision
         * @param {number} timestamp
         */
        static update(pair: Pair, collision: Collision, timestamp: number): void;

        /**
         * Set a pair as active or inactive.
         * @method setActive
         * @param {Pair} pair
         * @param {boolean} isActive
         * @param {number} timestamp
         */
        static setActive(pair: Pair, isActive: boolean, timestamp: number): void;

        /**
         * Get the id for the given pair.
         * @method id
         * @param {Body} bodyA
         * @param {Body} bodyB
         * @returns {string} Unique pairId
         */
        static id(bodyA: Body, bodyB: Body): string;

        id: string;
        bodyA: Body;
        bodyB: Body;
        collision: Collision;
        /**
         * @default {[]}
         */
        contacts: Contact[];
        /**
         * @default {[]}
         */
        activeContacts: Contact[];
        separation: number;
        isActive: boolean;
        confirmedActive: boolean;
        isSensor: boolean;
        timeCreated: number;
        timeUpdated: number;
        inverseMass: number;
        friction: number;
        frictionStatic: number;
        restitution: number;
        slop: number;
    }

    /**
     * The `Matter.Query` module contains methods for performing collision queries.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Query {
        /**
         * Finds a list of collisions between body and bodies.
         * @method collides
         * @param {Body} body
         * @param {Body[]} bodies
         * @returns {Collision[]} Collisions
         */
        static collides(body: Body, bodies: Body[]): Collision[];

        /**
         * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
         * @method ray
         * @param {Body[]} bodies
         * @param {Vector} startPoint
         * @param {Vector} endPoint
         * @param {number} [rayWidth]
         * @returns {Collision[]} Collisions
         */
        static ray(bodies: Body[], startPoint: Vector, endPoint: Vector, rayWidth?: number): Collision[];

        /**
         * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
         * @method region
         * @param {Body[]} bodies
         * @param {Bounds} bounds
         * @param {boolean} [outside=false]
         * @returns {Body[]} The bodies matching the query
         */
        static region(bodies: Body[], bounds: Bounds, outside?: boolean): Body[];

        /**
         * Returns all bodies whose vertices contain the given point, from the given set of bodies.
         * @method point
         * @param {Body[]} bodies
         * @param {Vector} point
         * @returns {Body[]} The bodies matching the query
         */
        static point(bodies: Body[], point: Vector): Body[];
    }

    export interface IRenderDefinition {
        /**
         * A back-reference to the `Matter.Render` module.
         */
        controller?: any;
        /**
         * A reference to the `Matter.Engine` instance to be used.
         */
        engine: Engine;
        /**
         * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
         *
         * @default null
         * @deprecated
         */
        element?: HTMLElement | undefined;
        /**
         * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
         *
         * @default null
         */
        canvas?: HTMLCanvasElement | undefined;

        /**
         * The configuration options of the renderer.
         */
        options?: IRendererOptions | undefined;

        /**
         * A `Bounds` object that specifies the drawing view region.
         * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
         * This allows for creating views that can pan or zoom around the scene.
         * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
         */
        bounds?: Bounds | undefined;

        /**
         * The 2d rendering context from the `render.canvas` element.
         */
        context?: CanvasRenderingContext2D | undefined;

        /**
         * The sprite texture cache.
         */
        textures?: any;
    }

    export interface IRendererOptions {
        /**
         * The target width in pixels of the `render.canvas` to be created.
         *
         * @default 800
         */
        width?: number | undefined;

        /**
         * The target height in pixels of the `render.canvas` to be created.
         *
         * @default 600
         */
        height?: number | undefined;

        /**
         * A flag that specifies if `render.bounds` should be used when rendering.
         *
         * @default false
         */
        hasBounds?: boolean | undefined;

        /**
         * Render wireframes only
         * @default true
         */
        wireframes?: boolean | undefined;

        /**
         * Sets scene background
         *
         * default undefined
         */
        background?: string | undefined;

        /**
         * Sets wireframe background if `render.options.wireframes` is enabled
         *
         * default undefined
         */
        wireframeBackground?: string | undefined;

        /**
         * Sets opacity of sleeping body if `render.options.showSleeping` is enabled
         *
         * default true
         */
        showSleeping?: boolean | undefined;

        /**
         * A flag to enable or disable the body vertex numbers debug overlay.
         * @default false
         */
        showVertexNumbers?: boolean | undefined;

        /**
         * A flag to enable or disable the body velocity debug overlay.
         * @default false
         */
        showVelocity?: boolean | undefined;

        /**
         * A flag to enable or disable the engine stats info overlay.
         * From left to right, the values shown are:
         * - body parts total
         * - body total
         * - constraints total
         * - composites total
         * - collision pairs total
         * @default false
         */
        showStats?: boolean | undefined;

        /**
         * A flag to enable or disable the collision resolver separations debug overlay.
         * @default false
         */
        showSeparations?: boolean | undefined;

        /**
         * A flag to enable or disable the body positions debug overlay.
         * @default false
         */
        showPositions?: boolean | undefined;

        /**
         * A flag to enable or disable performance charts.
         * From left to right, the values shown are:
         * - average render frequency (e.g. 60 fps)
         * - exact engine delta time used for last update (e.g. 16.66ms)
         * - average engine execution duration (e.g. 5.00ms)
         * - average render execution duration (e.g. 0.40ms)
         * - average effective play speed (e.g. '1.00x' is 'real-time')
         * Each value is recorded over a fixed sample of past frames (60 frames).
         * A chart shown below each value indicates the variance from the average over the sample. The more stable or fixed the value is the flatter the chart will appear.
         * @default false
         */
        showPerformance?: boolean | undefined;

        /**
         * A flag to enable or disable the mouse position debug overlay.
         * @default false
         */
        showMousePosition?: boolean | undefined;

        /**
         * A flag to enable or disable the body internal edges debug overlay.
         * @default false
         */
        showInternalEdges?: boolean | undefined;

        /**
         * A flag to enable or disable the body and part ids debug overlay.
         * @default false
         */
        showIds?: boolean | undefined;

        /**
         * A flag to enable or disable the debug information overlay.
         * This includes and has priority over the values of:
         * - render.options.showStats
         * - render.options.showPerformance
         * @default false
         */
        showDebug?: boolean | undefined;

        /**
         * A flag to enable or disable the body convex hulls debug overlay.
         * @default false
         */
        showConvexHulls?: boolean | undefined;

        /**
         * A flag to enable or disable the body collisions debug overlay.
         * @default false
         */
        showCollisions?: boolean | undefined;

        /**
         * A flag to enable or disable the collision broadphase debug overlay.
         * @deprecated no longer implemented
         * @default false
         */
        showBroadphase?: boolean | undefined;

        /**
         * A flag to enable or disable the body bounds debug overlay.
         * @default false
         */
        showBounds?: boolean | undefined;

        /**
         * A flag to enable or disable the body axes debug overlay.
         * @default false
         */
        showAxes?: boolean | undefined;

        /**
         * A flag to enable or disable the body angle debug overlay.
         * @default false
         */
        showAngleIndicator?: boolean | undefined;

        /**
         * The pixel ratio to use when rendering.
         * @default 1
         */
        pixelRatio?: number | undefined;
    }

    interface IRenderLookAtObject {
        bounds?: Bounds | undefined;
        position?:
            | {
                x: number;
                y: number;
            }
            | undefined;
        min?:
            | {
                x: number;
                y: number;
            }
            | undefined;
        max?:
            | {
                x: number;
                y: number;
            }
            | undefined;
    }

    /**
     * The `Matter.Render` module is a simple HTML5 canvas based renderer for visualising instances of `Matter.Engine`.
     * It is intended for development and debugging purposes, but may also be suitable for simple games.
     * It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
     */
    export class Render {
        /**
         * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
         * All properties have default values, and many are pre-calculated automatically based on other properties.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {any} [options]
         * @returns {render} A new renderer
         */
        static create(options: IRenderDefinition): Render;
        /**
         * Continuously updates the render canvas on the `requestAnimationFrame` event.
         * @method run
         * @param {render} render
         */
        static run(render: Render): void;
        /**
         * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
         * @method stop
         * @param {render} render
         */
        static stop(render: Render): void;
        /**
         * Sets the pixel ratio of the renderer and updates the canvas.
         * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
         * @method setPixelRatio
         * @param {render} render
         * @param {number} pixelRatio
         */
        static setPixelRatio(render: Render, pixelRatio: number): void;
        /**
         * Renders the given `engine`'s `Matter.World` object.
         * This is the entry point for all rendering and should be called every time the scene changes.
         * @method world
         * @param {engine} engine
         */
        static world(render: Render): void;
        /**
         * Positions and sizes the viewport around the given object bounds.
         * @method lookAt
         * @param {Render} render
         * @param {IRenderLookAtObject | IRenderLookAtObject[]} objects
         * @param {Vector} padding
         * @param {boolean} center
         */
        static lookAt(
            render: Render,
            objects: IRenderLookAtObject | IRenderLookAtObject[],
            padding?: Vector,
            center?: boolean,
        ): void;

        /**
         * A back-reference to the `Matter.Render` module.
         */
        controller: any;
        /**
         * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
         *
         * @default null
         */
        element: HTMLElement;
        /**
         * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
         *
         * @default null
         */
        canvas: HTMLCanvasElement;

        /**
         * The configuration options of the renderer.
         */
        options: IRendererOptions;

        /**
         * A `Bounds` object that specifies the drawing view region.
         * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
         * This allows for creating views that can pan or zoom around the scene.
         * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
         */
        bounds: Bounds;

        /**
         * The 2d rendering context from the `render.canvas` element.
         */
        context: CanvasRenderingContext2D;

        /**
         * The sprite texture cache.
         */
        textures: any;

        /**
         * The mouse to render if render.options.showMousePosition is enabled.
         *
         * @default null
         */
        mouse: Mouse;
    }

    /**
     * The `Matter.Resolver` module contains methods for resolving collision pairs.
     */
    export class Resolver {
        /**
         * Apply position resolution.
         * @method postSolvePosition
         * @param {Body[]} bodies
         */
        static postSolvePosition(bodies: Body[]): void;

        /**
         * Prepare pairs for position solving.
         * @method preSolvePosition
         * @param {Pair[]} pairs
         */
        static preSolvePosition(pairs: Pair[]): void;

        /**
         * Prepare pairs for velocity solving.
         * @method preSolveVelocity
         * @param {Pair[]} pairs
         */
        static preSolveVelocity(pairs: Pair[]): void;

        /**
         * Find a solution for pair positions.
         * @method solvePosition
         * @param {Pair[]} pairs
         * @param {number} timeScale
         */
        static solvePosition(pairs: Pair[], timeScale: number): void;

        /**
         * Find a solution for pair velocities.
         * @method solveVelocity
         * @param {Pair[]} pairs
         * @param {number} timeScale
         */
        static solveVelocity(pairs: Pair[], timeScale: number): void;
    }

    export interface IRunnerOptions {
        /**
         * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
         * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
         * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
         *
         * @default false
         */
        isFixed?: boolean | undefined;

        /**
         * A `Number` that specifies the time step between updates in milliseconds.
         * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
         * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
         *
         * @default 1000 / 60
         */
        delta?: number | undefined;

        /**
         * A flag that specifies whether the runner is running or not.
         * @default true
         */
        enabled?: boolean | undefined;
    }

    /**
     * The `Matter.Runner` module is an optional utility which provides a game loop,
     * that handles updating and rendering a `Matter.Engine` for you within a browser.
     * It is intended for demo and testing purposes, but may be adequate for simple games.
     * If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
     * Instead just call `Engine.update(engine, delta)` in your own loop.
     * Note that the method `Engine.run` is an alias for `Runner.run`.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Runner {
        /**
         * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
         * @method create
         * @param {} options
         */
        static create(options?: IRunnerOptions): Runner;
        /**
         * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
         * @method run
         * @param {engine} engine
         */
        static run(runner: Runner, engine: Engine): Runner;
        /**
         * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
         * @method run
         * @param {engine} engine
         */
        static run(engine: Engine): Runner;
        /**
         * A game loop utility that updates the engine and renderer by one step (a 'tick').
         * Features delta smoothing, time correction and fixed or dynamic timing.
         * Triggers `beforeTick`, `tick` and `afterTick` events on the engine.
         * Consider just `Engine.update(engine, delta)` if you're using your own loop.
         * @method tick
         * @param {runner} runner
         * @param {engine} engine
         * @param {number} time
         */
        static tick(runner: Runner, engine: Engine, time: number): void;
        /**
         * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
         * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
         * @method stop
         * @param {runner} runner
         */
        static stop(runner: Runner): void;
        /**
         * Alias for `Runner.run`.
         * @method start
         * @param {runner} runner
         * @param {engine} engine
         */
        static start(runner: Runner, engine: Engine): void;

        /**
         * A flag that specifies whether the runner is running or not.
         *
         * @default true
         */
        enabled: boolean;

        /**
         * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
         * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
         * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
         *
         * @default false
         */
        isFixed: boolean;

        /**
         * A `Number` that specifies the time step between updates in milliseconds.
         * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
         * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
         *
         * @default 1000 / 60
         */
        delta: number;
    }

    /**
     * The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
     */
    export class Sleeping {
        static set(body: Body, isSleeping: boolean): void;
    }

    /**
     * The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Svg {
        /**
         * Converts an SVG path into an array of vector points.
         * If the input path forms a concave shape, you must decompose the result into convex parts before use.
         * See `Bodies.fromVertices` which provides support for this.
         * Note that this function is not guaranteed to support complex paths (such as those with holes).
         * @method pathToVertices
         * @param {SVGPathElement} path
         * @param {Number} [sampleLength=15]
         * @returns {Vector[]} points
         */
        static pathToVertices(path: SVGPathElement, sampleLength: number): Vector[];
    }

    /**
     * The `Matter.Vector` module contains methods for creating and manipulating vectors.
     * Vectors are the basis of all the geometry related operations in the engine.
     * A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Vector {
        x: number;
        y: number;

        /**
         * Creates a new vector.
         * @method create
         * @param {number} x
         * @param {number} y
         * @returns {Vector} A new vector
         */
        static create(x?: number, y?: number): Vector;

        /**
         * Returns a new vector with `x` and `y` copied from the given `vector`.
         * @method clone
         * @param {Vector} vector
         * @returns {Vector} A new cloned vector
         */
        static clone(vector: Vector): Vector;

        /**
         * Returns the cross-product of three vectors.
         * @method cross3
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @param {Vector} vectorC
         * @returns {number} The cross product of the three vectors
         */
        static cross3(vectorA: Vector, vectorB: Vector, vectorC: Vector): number;

        /**
         * Adds the two vectors.
         * @method add
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @param {Vector} [output]
         * @returns {Vector} A new vector of vectorA and vectorB added
         */
        static add(vectorA: Vector, vectorB: Vector, output?: Vector): Vector;

        /**
         * Returns the angle in radians between the two vectors relative to the x-axis.
         * @method angle
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @returns {number} The angle in radians
         */
        static angle(vectorA: Vector, vectorB: Vector): number;

        /**
         * Returns the cross-product of two vectors.
         * @method cross
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @returns {number} The cross product of the two vectors
         */
        static cross(vectorA: Vector, vectorB: Vector): number;

        /**
         * Divides a vector and a scalar.
         * @method div
         * @param {Vector} vector
         * @param {number} scalar
         * @returns {Vector} A new vector divided by scalar
         */
        static div(vector: Vector, scalar: number): Vector;

        /**
         * Returns the dot-product of two vectors.
         * @method dot
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @returns {number} The dot product of the two vectors
         */
        static dot(vectorA: Vector, vectorB: Vector): number;

        /**
         * Returns the magnitude (length) of a vector.
         * @method magnitude
         * @param {Vector} vector
         * @returns {number} The magnitude of the vector
         */
        static magnitude(vector: Vector): number;

        /**
         * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
         * @method magnitudeSquared
         * @param {Vector} vector
         * @returns {number} The squared magnitude of the vector
         */
        static magnitudeSquared(vector: Vector): number;

        /**
         * Multiplies a vector and a scalar.
         * @method mult
         * @param {Vector} vector
         * @param {number} scalar
         * @returns {Vector} A new vector multiplied by scalar
         */
        static mult(vector: Vector, scalar: number): Vector;

        /**
         * Negates both components of a vector such that it points in the opposite direction.
         * @method neg
         * @param {Vector} vector
         * @returns {Vector} The negated vector
         */
        static neg(vector: Vector): Vector;

        /**
         * Normalises a vector (such that its magnitude is `1`).
         * @method normalise
         * @param {Vector} vector
         * @returns {Vector} A new vector normalised
         */
        static normalise(vector: Vector): Vector;

        /**
         * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
         * @method perp
         * @param {Vector} vector
         * @param {boolean} [negate=false]
         * @returns {Vector} The perpendicular vector
         */
        static perp(vector: Vector, negate?: boolean): Vector;

        /**
         * Rotates the vector about (0, 0) by specified angle.
         * @method rotate
         * @param {Vector} vector
         * @param {number} angle
         * @returns {Vector} A new vector rotated about (0, 0)
         */
        static rotate(vector: Vector, angle: number): Vector;

        /**
         * Rotates the vector about a specified point by specified angle.
         * @method rotateAbout
         * @param {Vector} vector
         * @param {number} angle
         * @param {Vector} point
         * @param {Vector} [output]
         * @returns {Vector} A new vector rotated about the point
         */
        static rotateAbout(vector: Vector, angle: number, point: Vector, output?: Vector): Vector;

        /**
         * Subtracts the two vectors.
         * @method sub
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @param {Vector} [output]
         * @returns {Vector} A new vector of vectorA and vectorB subtracted
         */
        static sub(vectorA: Vector, vectorB: Vector, optional?: Vector): Vector;
    }

    /**
     * The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
     * A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
     * A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class Vertices {
        /**
         * Returns the average (mean) of the set of vertices.
         * @method mean
         * @param {Vertices} vertices
         * @returns {Vector} The average point
         */
        static mean(vertices: Vector[]): Vector;

        /**
         * Sorts the input vertices into clockwise order in place.
         * @method clockwiseSort
         * @param {Vertices} vertices
         * @returns {Vertices} vertices
         */
        static clockwiseSort(vertices: Vector[]): Vector[];

        /**
         * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
         * @method isConvex
         * @param {Vertices} vertices
         * @returns {boolean} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
         */
        static isConvex(vertices: Vector[]): boolean;

        /**
         * Returns the convex hull of the input vertices as a new array of points.
         * @method hull
         * @param {Vertices} vertices
         * @returns {Array<Vertex>} vertices
         */
        static hull(vertices: Vertex[]): Vertex[];

        /**
         * Returns the area of the set of vertices.
         * @method area
         * @param {Vertices} vertices
         * @param {boolean} signed
         * @returns {number} The area
         */
        static area(vertices: Vector[], signed: boolean): number;

        /**
         * Returns the centre (centroid) of the set of vertices.
         * @method centre
         * @param {Vertices} vertices
         * @returns {Vector} The centre point
         */
        static centre(vertices: Vector[]): Vector;

        /**
         * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
         * The radius parameter is a single number or an array to specify the radius for each vertex.
         * @method chamfer
         * @param {Vertices} vertices
         * @param {number[]} radius
         * @param {number} quality
         * @param {number} qualityMin
         * @param {number} qualityMax
         * @returns {Vertices} vertices
         */
        static chamfer(
            vertices: Vector[],
            radius: number | number[],
            quality: number,
            qualityMin: number,
            qualityMax: number,
        ): Vector[];

        /**
         * Returns `true` if the `point` is inside the set of `vertices`.
         * @method contains
         * @param {Vertices} vertices
         * @param {Vector} point
         * @returns {boolean} True if the vertices contains point, otherwise false
         */
        static contains(vertices: Vector[], point: Vector): boolean;

        /**
         * Creates a new set of `Matter.Body` compatible vertices.
         * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
         *
         *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
         *
         * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
         * but with some additional references required for efficient collision detection routines.
         *
         * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
         *
         * @method create
         * @param {Vector[]} points
         * @param {Body} body
         * @returns {Vertices} vertices
         */
        static create(points: Vector[], body: Body): Vector[];

        /**
         * Parses a string containing ordered x y pairs separated by spaces (and optionally commas),
         * into a `Matter.Vertices` object for the given `Matter.Body`.
         * For parsing SVG paths, see `Svg.pathToVertices`.
         * @method fromPath
         * @param {string} path
         * @param {Body} body
         * @returns {Vertices} vertices
         */
        static fromPath(path: string, body: Body): Vector[];

        /**
         * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
         * @method inertia
         * @param {Vertices} vertices
         * @param {number} mass
         * @returns {number} The polygon's moment of inertia
         */
        static inertia(vertices: Vector[], mass: number): number;

        /**
         * Rotates the set of vertices in-place.
         * @method rotate
         * @param {Vertices} vertices
         * @param {number} angle
         * @param {Vector} point
         * @returns {Vertices} vertices
         */
        static rotate(vertices: Vector[], angle: number, point: Vector): Vector[];

        /**
         * Scales the vertices from a point (default is centre) in-place.
         * @method scale
         * @param {Vertices} vertices
         * @param {number} scaleX
         * @param {number} scaleY
         * @param {Vector} point
         * @returns {Vertices} vertices
         */
        static scale(vertices: Vector[], scaleX: number, scaleY: number, point: Vector): Vector[];

        /**
         * Translates the set of vertices in-place.
         * @method translate
         * @param {Vertices} vertices
         * @param {Vector} vector
         * @param {number} scalar
         * @returns {Vertices} vertices
         */
        static translate(vertices: Vector[], vector: Vector, scalar: number): Vector[];
    }

    interface IWorldDefinition extends ICompositeDefinition {
        gravity?: Gravity | undefined;
        bounds?: Bounds | undefined;
    }

    interface Gravity {
        /**
         * The gravity x component.
         *
         * @default 0
         */
        x: number;

        /**
         * The gravity y component.
         *
         * @default 1
         */
        y: number;

        /**
         * The gravity scale factor.
         *
         * @default 0.001
         */
        scale: number;
    }

    /**
     * The `Matter.World` module contains methods for creating and manipulating the world composite.
     * A `Matter.World` is a `Matter.Composite` body, which is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`.
     * A `Matter.World` has a few additional properties including `gravity` and `bounds`.
     * It is important to use the functions in the `Matter.Composite` module to modify the world composite, rather than directly modifying its properties.
     * There are also a few methods here that alias those in `Matter.Composite` for easier readability.
     *
     * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
     */
    export class World extends Composite {
        /**
         * Add objects or arrays of objects of types: Body, Constraint, Composite
         * @param world
         * @param body
         * @returns world
         */
        static add(
            world: World,
            body:
                | Body
                | Composite
                | Constraint
                | MouseConstraint
                | Array<Body | Composite | Constraint | MouseConstraint>,
        ): World;

        /**
         * An alias for Composite.addBody since World is also a Composite
         * @method addBody
         * @param {world} world
         * @param {Body} body
         * @returns {world} The original world with the body added
         */
        static addBody(world: World, body: Body): World;

        /**
         * An alias for Composite.add since World is also a Composite
         * @method addComposite
         * @param {world} world
         * @param {Composite} composite
         * @returns {world} The original world with the objects from composite added
         */
        static addComposite(world: World, composite: Composite): World;

        /**
         * An alias for Composite.addConstraint since World is also a Composite
         * @method addConstraint
         * @param {world} world
         * @param {constraint} constraint
         * @returns {world} The original world with the constraint added
         */
        static addConstraint(world: World, constraint: Constraint): World;

        /**
         * An alias for Composite.clear since World is also a Composite
         * @method clear
         * @param {world} world
         * @param {boolean} keepStatic
         */
        static clear(world: World, keepStatic: boolean): void;

        /**
         * Creates a new world composite. The options parameter is an object that specifies any properties you wish to override the defaults.
         * See the properties section below for detailed information on what you can pass via the `options` object.
         * @method create
         * @param {} options
         * @returns {world} A new world
         */
        static create(options: IWorldDefinition): World;

        /**
         * @deprecated moved to engine.gravity
         */
        gravity: Gravity;
        bounds: Bounds;
    }

    export interface ICollisionFilter {
        category?: number | undefined;
        mask?: number | undefined;
        group?: number | undefined;
    }

    export interface IMousePoint {
        x: number;
        y: number;
    }

    export class Mouse {
        static create(element: HTMLElement): Mouse;
        static setElement(mouse: Mouse, element: HTMLElement): void;
        static clearSourceEvents(mouse: Mouse): void;
        static setOffset(mouse: Mouse, offset: Vector): void;
        static setScale(mouse: Mouse, scale: Vector): void;

        element: HTMLElement;
        absolute: IMousePoint;
        position: IMousePoint;
        mousedownPosition: IMousePoint;
        mouseupPosition: IMousePoint;
        offset: IMousePoint;
        scale: IMousePoint;
        wheelDelta: number;
        button: number;
        pixelRatio: number;
    }

    export class Common {
        /**
         * Extends the object in the first argument using the object in the second argument.
         * @method extend
         * @param {any} obj
         * @param {boolean} deep
         * @returns {any} obj extended
         */
        static extend(obj: any, deep: boolean): any;

        /**
         * Creates a new clone of the object, if deep is true references will also be cloned.
         * @method clone
         * @param {any} obj
         * @param {boolean} deep
         * @returns {any} obj cloned
         */
        static clone(obj: any, deep: boolean): any;

        /**
         * Returns the list of keys for the given object.
         * @method keys
         * @param {any} obj
         * @returns {string[]} keys
         */
        static keys(obj: any): string[];

        /**
         * Returns the list of values for the given object.
         * @method values
         * @param {any} obj
         * @returns {array} Array of the objects property values
         */
        static values(obj: any): any[];

        /**
         * Gets a value from `base` relative to the `path` string.
         * @method get
         * @param {any} obj The base object
         * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
         * @param {number} [begin] Path slice begin
         * @param {number} [end] Path slice end
         * @returns {} The object at the given path
         */
        static get(obj: any, path: string, begin: number, end: number): any;

        /**
         * Sets a value on `base` relative to the given `path` string.
         * @method set
         * @param {any} obj The base object
         * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
         * @param {} val The value to set
         * @param {number} [begin] Path slice begin
         * @param {number} [end] Path slice end
         * @returns {} Pass through `val` for chaining
         */
        static set(obj: any, path: string, val: any, begin: number, end: number): any;

        /**
         * Shuffles the given array in-place.
         * The function uses a seeded random generator.
         * @method shuffle
         * @param {array} array
         * @returns {array} array shuffled randomly
         */
        static shuffle<T>(array: T[]): T[];

        /**
         * Randomly chooses a value from a list with equal probability.
         * The function uses a seeded random generator.
         * @method choose
         * @param {array} choices
         * @returns {any} A random choice object from the array
         */
        static choose<T>(choices: readonly T[]): T;

        /**
         * Returns true if the object is a HTMLElement, otherwise false.
         * @method isElement
         * @param {any} obj
         * @returns {boolean} True if the object is a HTMLElement, otherwise false
         */
        static isElement<T>(obj: T): T extends HTMLElement ? true : false;

        /**
         * Returns true if the object is an array.
         * @method isArray
         * @param {any} obj
         * @returns {boolean} True if the object is an array, otherwise false
         */
        static isArray<T>(obj: T): T extends any[] ? true : false;

        /**
         * Returns true if the object is a function.
         * @method isFunction
         * @param {any} obj
         * @returns {boolean} True if the object is a function, otherwise false
         */
        static isFunction<T>(obj: T): T extends Function ? true : false;

        /**
         * Returns true if the object is a plain object.
         * @method isPlainObject
         * @param {any} obj
         * @returns {boolean} True if the object is a plain object, otherwise false
         */
        static isPlainObject(obj: any): boolean;

        /**
         * Returns true if the object is a string.
         * @method isString
         * @param {any} obj
         * @returns {boolean} True if the object is a string, otherwise false
         */
        static isString<T>(obj: T): T extends string ? true : false;

        /**
         * Returns the given value clamped between a minimum and maximum value.
         * @method clamp
         * @param {number} value
         * @param {number} min
         * @param {number} max
         * @returns {number} The value clamped between min and max inclusive
         */
        static clamp(value: number, min: number, max: number): number;

        /**
         * Returns the sign of the given value.
         * @method sign
         * @param {number} value
         * @returns {number} -1 if negative, +1 if 0 or positive
         */
        static sign(value: number): number;

        /**
         * Returns the current timestamp since the time origin (e.g. from page load).
         * The result will be high-resolution including decimal places if available.
         * @method now
         * @returns {number} the current timestamp
         */
        static now(): number;

        /**
         * Returns a random value between a minimum and a maximum value inclusive.
         * The function uses a seeded random generator.
         * @method random
         * @param {number} min
         * @param {number} max
         * @returns {number} A random number between min and max inclusive
         */
        static random(min?: number, max?: number): number;

        /**
         * Converts a CSS hex colour string into an integer.
         * @method colorToNumber
         * @param {string} colorString
         * @returns {number} An integer representing the CSS hex string
         */
        static colorToNumber(colorString: string): number;

        /**
         * Shows a `console.log` message only if the current `Common.logLevel` allows it.
         * The message will be prefixed with 'matter-js' to make it easily identifiable.
         * @method log
         * @param ...objs {} The objects to log.
         */
        static log(...objs: any[]): void;

        /**
         * Shows a `console.info` message only if the current `Common.logLevel` allows it.
         * The message will be prefixed with 'matter-js' to make it easily identifiable.
         * @method info
         * @param ...objs {} The objects to log.
         */
        static info(...objs: any[]): void;

        /**
         * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
         * The message will be prefixed with 'matter-js' to make it easily identifiable.
         * @method warn
         * @param ...objs {} The objects to log.
         */
        static warn(...objs: any[]): void;

        /**
         * Returns the next unique sequential ID.
         * @method nextId
         * @returns {number} Unique sequential ID
         */
        static nextId(): number;

        /**
         * A cross browser compatible indexOf implementation.
         * @method indexOf
         * @param {array} haystack
         * @param {any} needle
         * @returns {number} The position of needle in haystack, otherwise -1.
         */
        static indexOf<T>(haystack: T[], needle: T): number;

        /**
         * A cross browser compatible array map implementation.
         * @method map
         * @param {array} list
         * @param {function} func
         * @returns {array} Values from list transformed by func.
         */
        static map<T, U>(list: T[], func: (element: T) => U): U[];

        /**
         * Takes a directed graph and returns the partially ordered set of vertices in topological order.
         * Circular dependencies are allowed.
         * @method topologicalSort
         * @param {any} graph
         * @returns {array} Partially ordered set of vertices in topological order.
         */
        static topologicalSort(graph: any): any[];

        /**
         * Takes _n_ functions as arguments and returns a new function that calls them in order.
         * The arguments applied when calling the new function will also be applied to every function passed.
         * The value of `this` refers to the last value returned in the chain that was not `undefined`.
         * Therefore if a passed function does not return a value, the previously returned value is maintained.
         * After all passed functions have been called the new function returns the last returned value (if any).
         * If any of the passed functions are a chain, then the chain will be flattened.
         * @method chain
         * @param ...funcs {function} The functions to chain.
         * @returns {function} A new function that calls the passed functions in order.
         */
        static chain(): Function;

        /**
         * Chains a function to excute before the original function on the given `path` relative to `base`.
         * See also docs for `Common.chain`.
         * @method chainPathBefore
         * @param {} base The base object
         * @param {string} path The path relative to `base`
         * @param {function} func The function to chain before the original
         * @returns {function} The chained function that replaced the original
         */
        static chainPathBefore(base: any, path: string, func: Function): Function;

        /**
         * Chains a function to excute after the original function on the given `path` relative to `base`.
         * See also docs for `Common.chain`.
         * @method chainPathAfter
         * @param {} base The base object
         * @param {string} path The path relative to `base`
         * @param {function} func The function to chain after the original
         * @returns {function} The chained function that replaced the original
         */
        static chainPathAfter(base: any, path: string, func: Function): Function;

        /**
         * Used to require external libraries outside of the bundle.
         * It first looks for the `globalName` on the environment's global namespace.
         * If the global is not found, it will fall back to using the standard `require` using the `moduleName`.
         * @method _requireGlobal
         * @param {string} globalName The global module name
         * @param {string} moduleName The fallback CommonJS module name
         * @returns {} The loaded module
         */
        static _requireGlobal(globalName: string, moduleName: string): any;

        /**
         * Uses `Common.warn` to log the given message one time only.
         * @method warnOnce
         * @param ...objs {} The objects to log.
         */
        static warnOnce(...objs: any[]): void;

        /**
         * Shows a deprecated console warning when the function on the given object is called.
         * The target function will be replaced with a new function that first shows the warning
         * and then calls the original function.
         * @method deprecated
         * @param {any} obj The object or module
         * @param {string} name The property name of the function on obj
         * @param {string} warning The one-time message to show if the function is called
         */
        static deprecated<T>(obj: T, name: keyof T, warning: string): void;

        /**
         * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
         * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
         * @method setDecomp
         * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
         */
        static setDecomp(decomp: any): void;

        /**
         * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
         * otherwise returns the global `decomp` if set.
         * @method getDecomp
         * @returns {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
         */
        static getDecomp(): any;
    }

    export interface IEvent<T> {
        /**
         * The name of the event
         */
        name: string;
        /**
         * The source object of the event
         */
        source: T;
    }

    export interface IEventComposite<T> extends IEvent<T> {
        name: "beforeAdd" | "afterAdd" | "beforeRemove" | "afterRemove";
        /**
         * EventObjects (may be a single body, constraint, composite or a mixed array of these)
         */
        object: any;
    }

    export interface IEventTimestamped<T> extends IEvent<T> {
        /**
         * The engine.timing.timestamp of the event
         */
        timestamp: number;
    }

    export interface IEventCollision<T> extends IEventTimestamped<T> {
        name: "collisionStart" | "collisionActive" | "collisionEnd";
        /**
         * The collision pair
         */
        pairs: Pair[];
    }

    export interface IMouseEvent<T> extends IEvent<T> {
        mouse: Mouse;
        name: "mousedown" | "mousemove" | "mouseup";
    }

    type ICallback<T> = (e: IEvent<T>) => void;

    type ICollisionCallback = (e: IEventCollision<Engine>) => void;

    type ICompositeCallback = (e: IEventComposite<Composite>) => void;

    type IEngineCallback = (e: IEventTimestamped<Engine>) => void;

    type IMouseCallback = (e: IMouseEvent<MouseConstraint>) => void;

    type IRenderCallback = (e: IEventTimestamped<Render>) => void;

    type IRunnerCallback = (e: IEventTimestamped<Runner>) => void;

    export class Events {
        /**
         * Fired when a body starts sleeping (where `this` is the body).
         *
         * @event sleepStart
         * The body that has started sleeping
         * @param {} event An event object
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICallback<Body>>(obj: Body, name: "sleepStart", callback: C): C;

        /**
         * Fired when a body ends sleeping (where `this` is the body).
         *
         * @event sleepEnd
         * The body that has ended sleeping
         * @param {} event An event object
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICallback<Body>>(obj: Body, name: "sleepEnd", callback: C): C;

        /**
         * Fired when a call to `Composite.add` is made, before objects have been added.
         *
         * @event beforeAdd
         * @param {} event An event object
         * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICompositeCallback>(obj: Composite, name: "beforeAdd", callback: C): C;

        /**
         * Fired when a call to `Composite.add` is made, after objects have been added.
         *
         * @event afterAdd
         * @param {} event An event object
         * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICompositeCallback>(obj: Composite, name: "afterAdd", callback: C): C;

        /**
         * Fired when a call to `Composite.remove` is made, before objects have been removed.
         *
         * @event beforeRemove
         * @param {} event An event object
         * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICompositeCallback>(obj: Composite, name: "beforeRemove", callback: C): C;

        /**
         * Fired when a call to `Composite.remove` is made, after objects have been removed.
         *
         * @event afterRemove
         * @param {} event An event object
         * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICompositeCallback>(obj: Composite, name: "afterRemove", callback: C): C;

        /**
         * Fired after engine update and all collision events
         *
         * @event afterUpdate
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IEngineCallback>(obj: Engine, name: "afterUpdate", callback: C): C;

        /**
         * Fired before rendering
         *
         * @event beforeRender
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRenderCallback>(obj: Render, name: "beforeRender", callback: C): C;
        /**
         * Fired after rendering
         *
         * @event afterRender
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRenderCallback>(obj: Render, name: "afterRender", callback: C): C;

        /**
         * Fired just before an update
         *
         * @event beforeUpdate
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IEngineCallback>(obj: Engine, name: "beforeUpdate", callback: C): C;

        /**
         * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
         *
         * @event collisionActive
         * @param {} event An event object
         * @param {} event.pairs List of affected pairs
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICollisionCallback>(obj: Engine, name: "collisionActive", callback: C): C;

        /**
         * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
         *
         * @event collisionEnd
         * @param {} event An event object
         * @param {} event.pairs List of affected pairs
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICollisionCallback>(obj: Engine, name: "collisionEnd", callback: C): C;

        /**
         * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
         *
         * @event collisionStart
         * @param {} event An event object
         * @param {} event.pairs List of affected pairs
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends ICollisionCallback>(obj: Engine, name: "collisionStart", callback: C): C;

        /**
         * Fired at the start of a tick, before any updates to the engine or timing
         *
         * @event beforeTick
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRunnerCallback>(obj: Runner, name: "beforeTick", callback: C): C;

        /**
         * Fired after engine timing updated, but just before update
         *
         * @event tick
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRunnerCallback>(obj: Runner, name: "tick", callback: C): C;

        /**
         * Fired at the end of a tick, after engine update and after rendering
         *
         * @event afterTick
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRunnerCallback>(obj: Runner, name: "afterTick", callback: C): C;

        /**
         * Fired before rendering
         *
         * @event beforeRender
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRenderCallback>(obj: Render, name: "beforeRender", callback: C): C;

        /**
         * Fired after rendering
         *
         * @event afterRender
         * @param {} event An event object
         * @param {number} event.timestamp The engine.timing.timestamp of the event
         * @param {} event.source The source object of the event
         * @param {} event.name The name of the event
         */
        static on<C extends IRenderCallback>(obj: Render, name: "afterRender", callback: C): C;

        /**
         * Fired when the mouse is down (or a touch has started) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on<C extends IMouseCallback>(obj: MouseConstraint, name: "mousedown", callback: C): C;

        /**
         * Fired when the mouse has moved (or a touch moves) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on<C extends IMouseCallback>(obj: MouseConstraint, name: "mousemove", callback: C): C;

        /**
         * Fired when the mouse is up (or a touch has ended) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on<C extends IMouseCallback>(obj: MouseConstraint, name: "mouseup", callback: C): C;

        static on<T, C extends (e: IEvent<T>) => void>(obj: T, name: string, callback: C): C;

        /**
         * Removes the given event callback. If no callback, clears all callbacks in eventNames. If no eventNames, clears all events.
         *
         * @param obj
         * @param eventName
         * @param callback
         */
        static off(obj: any, eventName: string, callback: (e: any) => void): void;

        /**
         * Fires all the callbacks subscribed to the given object's eventName, in the order they subscribed, if any.
         *
         * @param object
         * @param eventNames
         * @param event
         */
        static trigger(object: any, eventNames: string, event?: any): void;
    }

    type Dependency = { name: string; range: string } | { name: string; version: string } | string;

    export class Plugin {
        name: string;
        version: string;
        install: () => void;
        for?: string | undefined;

        /**
         * Registers a plugin object so it can be resolved later by name.
         * @method register
         * @param {} plugin The plugin to register.
         * @returns {any} The plugin.
         */
        static register(plugin: Plugin): Plugin;

        /**
         * Resolves a dependency to a plugin object from the registry if it exists.
         * The `dependency` may contain a version, but only the name matters when resolving.
         * @method resolve
         * @param {string} dependency The dependency.
         * @returns {any} The plugin if resolved, otherwise `undefined`.
         */
        static resolve(dependency: string): Plugin | undefined;

        /**
         * Returns `true` if the object meets the minimum standard to be considered a plugin.
         * This means it must define the following properties:
         * - `name`
         * - `version`
         * - `install`
         * @method isPlugin
         * @param {any} obj The obj to test.
         * @returns {boolean} `true` if the object can be considered a plugin otherwise `false`.
         */
        static isPlugin(obj: {}): boolean;

        /**
         * Returns a pretty printed plugin name and version.
         * @method toString
         * @param {} plugin The plugin.
         * @returns {string} Pretty printed plugin name and version.
         */
        static toString(plugin: string | Plugin): string;

        /**
         * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
         * If `plugin.for` is not specified then it is assumed to be applicable.
         * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
         * @method isFor
         * @param {} plugin The plugin.
         * @param {} module The module.
         * @returns {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
         */
        static isFor(plugin: Plugin, module: { name?: string | undefined; [_: string]: any }): boolean;

        /**
         * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
         * For installing plugins on `Matter` see the convenience function `Matter.use`.
         * Plugins may be specified either by their name or a reference to the plugin object.
         * Plugins themselves may specify further dependencies, but each plugin is installed only once.
         * Order is important, a topological sort is performed to find the best resulting order of installation.
         * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
         * This function logs the resulting status of each dependency in the console, along with any warnings.
         * - A green tick ✅ indicates a dependency was resolved and installed.
         * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
         * - A red cross ❌ indicates a dependency could not be resolved.
         * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
         * @method use
         * @param  {} The module install plugins on.
         * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
         */
        static use(
            module: { uses?: Array<Plugin | string> | undefined; [_: string]: any },
            plugins: Array<Plugin | string>,
        ): void;

        /**
         * Recursively finds all of a module's dependencies and returns a flat dependency graph.
         * @method dependencies
         * @param {Dependency} module The module.
         * @returns {any} A dependency graph.
         */
        static dependencies(
            module: Dependency,
            tracked?: { [_: string]: string[] },
        ): { [_: string]: string[] } | string | undefined;

        /**
         * Parses a dependency string into its components.
         * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
         * See documentation for `Plugin.versionParse` for a description of the format.
         * This function can also handle dependencies that are already resolved (e.g. a module object).
         * @method dependencyParse
         * @param {Dependency} dependency The dependency of the format `'module-name'` or `'module-name@version'`.
         * @returns {any} The dependency parsed into its components.
         */
        static dependencyParse(dependency: Dependency): { name: string; range: string };

        /**
         * Parses a version string into its components.
         * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
         * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
         * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
         * Only the following range types are supported:
         * - Tilde ranges e.g. `~1.2.3`
         * - Caret ranges e.g. `^1.2.3`
         * - Exact version e.g. `1.2.3`
         * - Any version `*`
         * @method versionParse
         * @param range {string} The version string.
         * @returns {any} The version range parsed into its components.
         */
        static versionParse(range: string): {
            isRange: boolean;
            version: string;
            range: string;
            operator: string;
            parts: number[];
            prerelease: string;
            number: number;
        };

        /**
         * Returns `true` if `version` satisfies the given `range`.
         * See documentation for `Plugin.versionParse` for a description of the format.
         * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
         * @method versionSatisfies
         * @param {string} version The version string.
         * @param {string} range The range string.
         * @returns {boolean} `true` if `version` satisfies `range`, otherwise `false`.
         */
        static versionSatisfies(version: string, range: string): boolean;
    }

    /**
     * The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
     *
     * For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
     *
     * See `Matter.Engine` for collision events.
     */
    export class Collision {
        /**
         * Creates a new collision record.
         * @method create
         * @param {Body} bodyA The first body part represented by the collision record
         * @param {Body} bodyB The second body part represented by the collision record
         * @returns {Collision} A new collision record
         */
        static create(bodyA: Body, bodyB: Body): Collision;

        /**
         * Detect collision between two bodies.
         * @method collides
         * @param {Body} bodyA
         * @param {Body} bodyB
         * @param {pairs} [Pairs] Optionally reuse collision records from existing pairs.
         * @returns {collision|null} A collision record if detected, otherwise null
         */
        static collides(bodyA: Body, bodyB: Body, pairs?: Pairs): Collision | null;

        /**
         * A reference to the pair using this collision record, if there is one.
         *
         * @default null
         */
        pair: Pair | null;

        /**
         * A flag that indicates if the bodies were colliding when the collision was last updated.
         *
         * @default false
         */
        collided: boolean;

        /**
         * The first body part represented by the collision (see also `collision.parentA`).
         */
        bodyA: Body;

        /**
         * The second body part represented by the collision (see also `collision.parentB`).
         */
        bodyB: Body;

        /**
         * The first body represented by the collision (i.e. `collision.bodyA.parent`).
         */
        parentA: Body;

        /**
         * The second body represented by the collision (i.e. `collision.bodyB.parent`).
         */
        parentB: Body;

        /**
         * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
         *
         * @readOnly
         * @default 0
         */
        readonly depth: number;

        /**
         * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
         *
         * @default { x: 0, y: 0 }
         */
        normal: Vector;

        /**
         * A normalised `Vector` that is the tangent direction to the collision normal.
         *
         * @default { x: 0, y: 0 }
         */
        tangent: Vector;

        /**
         * A `Vector` that represents the direction and depth of the collision.
         *
         * @default { x: 0, y: 0 }
         */
        penetration: Vector;

        /**
         * An array of body vertices that represent the support points in the collision.
         * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
         *
         * @default []
         */
        supports: Vector[];
    }

    interface IDetectorOptions {
        /**
         * The array of `Matter.Body` between which the detector finds collisions.
         *
         * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
         * @default []
         */
        bodies?: Body[];

        /**
         * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
         * @default null
         */
        pairs?: Pairs | null;
    }

    /**
     * The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
     */
    export class Detector {
        /**
         * Finds all collisions given a list of pairs.
         * Creates a new collision detector.
         * @method create
         * @param {IDetectorOptions | undefined} options
         * @returns {Detector} A new collision detector
         */
        static create(options?: IDetectorOptions): Detector;

        /**
         * Returns `true` if both supplied collision filters will allow a collision to occur.
         * See `body.collisionFilter` for more information.
         * @method canCollide
         * @param ICollisionFilter filterA
         * @param ICollisionFilter filterB
         * @returns {boolean} `true` if collision can occur
         */
        static canCollide(filterA: ICollisionFilter, filterB: ICollisionFilter): boolean;

        /**
         * Clears the detector including its list of bodies.
         * @method clear
         * @param {Detector} detector
         */
        static clear(detector: Detector): void;

        /**
         * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
         *
         * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
         * If a specific ordering is required then apply a sort to the resulting array.
         * @method collisions
         * @param {Detector} detector
         * @returns {Collision[]} collisions
         */
        static collisions(detector: Detector): Collision[];

        /**
         * Sets the list of bodies in the detector.
         * @method setBodies
         * @param {Detector} detector
         * @param {Body[]} bodies
         */
        static setBodies(detector: Detector, bodies: Body[]): void;

        /**
         * The array of `Matter.Body` between which the detector finds collisions.
         *
         * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
         * @default []
         */
        bodies: Body[];

        /**
         * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
         * @default null
         */
        pairs: Pairs | null;
    }

    /**
     * This module has now been replaced by `Matter.Collision`.
     *
     * All usage should be migrated to `Matter.Collision`.
     * For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
     *
     * The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
     *
     * @deprecated
     */
    export class SAT {
        /**
         * Detect collision between two bodies using the Separating Axis Theorem.
         * @deprecated replaced by Collision.collides
         * @method collides
         * @param {Body} bodyA
         * @param {Body} bodyB
         * @param {Collision} previousCollision
         * @returns {Collision} collision
         */
        static collides(bodyA: Body, bodyB: Body, previousCollision?: Collision): Collision;
    }
}
