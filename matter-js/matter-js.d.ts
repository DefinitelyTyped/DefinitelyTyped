// Type definitions for Matter.js 0.8.0
// Project: https://github.com/liabru/matter-js
// Definitions by: Ivane Gegia <https://twitter.com/ivanegegia>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Matter
{
    export interface IEngineOptions
    {

    }

    export interface IEngineTimingOptions
    {
        /**
         *A Number that specifies the time correction factor to apply to the current timestep. It is automatically handled when using Engine.run, but is also only optional even if you use your own game loop. The value is defined as delta / lastDelta, i.e. the percentage change of delta between steps. This value is always 1 (no correction) when frame rate is constant or engine.timing.isFixed is true. If the framerate and hence delta are changing, then correction should be applied to the current update to account for the change. See the paper on Time Corrected Verlet for more information.
         */
        correction:number;

        /**
         * A Number that specifies the time step between updates in milliseconds. If engine.timing.isFixed is set to true, then delta is fixed. If it is false, then delta can dynamically change to maintain the correct apparant simulation speed.
         */
        delta:number;

        /**
         * A Number that specifies the global scaling factor of time for all bodies. A value of 0 freezes the simulation. A value of 0.1 gives a slow-motion effect. A value of 1.2 gives a speed-up effect.
         */
        timeScale:number;

        /**
         * A Number that specifies the current simulation-time in milliseconds starting from 0. It is incremented on every Engine.update by the timing.delta.
         */
        timestamp:number;

        /**
         * An integer Number that specifies the number of velocity iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance.
         */
        velocityIterations:number;

    }

    export class Engine
    {
        /**
         * Clears the engine including the world, pairs and broadphase.
         * @param engine 
         */
        static clear(engine:Engine):void;

        /**
         * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults. All properties have default values, and many are pre-calculated automatically based on other properties. See the properites section below for detailed information on what you can pass via the options object.
         * @param element
         * @param options
         */
        static create(element?: HTMLElement|IEngineOptions, options?:IEngineOptions):Engine;

        /**
         * Merges two engines by keeping the configuration of engineA but replacing the world with the one from engineB.
         * @param engineA
         * @param engineB
         */
        static merge(engineA:Engine, engineB:Engine):void;

        /**
         * Renders the world by calling its defined renderer engine.render.controller. Triggers beforeRender and afterRender events.
         * @param engineA
         * @param engineB
         */
        static render(engineA:Engine, engineB:Engine):void;

        /**
         * An optional utility function that provides a game loop, that handles updating the engine for you. Calls Engine.update and Engine.render on the requestAnimationFrame event automatically. Handles time correction and non-fixed dynamic timing (if enabled). Triggers beforeTick, tick and afterTick events.
         * @param engine
         */
        static run(engine:Engine):void;

        /**
         * Moves the simulation forward in time by delta ms. Triggers beforeUpdate and afterUpdate events.
         *
         * @param engine
         * @param delta
         * @param correction
         */
        static update(engine:Engine, delta:number, correction?:number):void;

        /**
         * An integer Number that specifies the number of constraint iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance. The default value of 2 is usually very adequate.
         */
        constraintIterations:number;

        /**
         * A flag that specifies whether the engine is running or not.
         */
        enabled:boolean;

        /**
         * A flag that specifies whether the engine should allow sleeping via the Matter.Sleeping module. Sleeping can improve stability and performance, but often at the expense of accuracy.
         */
        enableSleeping:boolean;

        /**
         * An integer Number that specifies the number of position iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance.
         */
        positionIterations:number;

        /**
         * An instance of a Render controller. The default value is a Matter.Render instance created by Engine.create. One may also develop a custom renderer module based on Matter.Render and pass an instance of it to Engine.create via options.render.
         A minimal custom renderer object must define at least three functions: create, clear and world (see Matter.Render). It is also possible to instead pass the module reference via options.render.controller and Engine.create will instantiate one for you.
         */
        render:Render;

        /**
         * An Object containing properties regarding the timing systems of the engine.
         */
        timing:IEngineTimingOptions;

        /**
         * A World composite object that will contain all simulated bodies and constraints.
         */
        world:World;
    }

    interface IWorldOptions
    {

    }

    /**
     * The Matter.World module contains methods for creating and manipulating the world composite. A Matter.World is a Matter.Composite body, which is a collection of Matter.Body, Matter.Constraint and other Matter.Composite. A Matter.World has a few additional properties including gravity and bounds. It is important to use the functions in the Matter.Composite module to modify the world composite, rather than directly modifying its properties. There are also a few methods here that alias those in Matter.Composite for easier readability.
     */
    export class World
    {
        /**
         * Add objects or arrays of objects of types: Body, Constraint, Composite
         * @param world
         * @param body
         * @returns world
         */
        static add(world:World, body:Body|Array<Body>|Composite|Array<Composite>|Constraint|Array<Constraint>):World;

        /**
         * An alias for Composite.addBody since World is also a Composite
         * @param world
         * @param body
         * @returns world
         */
        static addBody(world:World, body:Body):World;

        /**
         * An alias for Composite.add since World is also a Composite
         * @param world
         * @param composite
         */
        static addComposite(world:World, composite:Composite):World;

        /**
         * An alias for Composite.addConstraint since World is also a Composite.
         * @param world
         * @param constraint
         */
        static addConstraint(world:World, constraint:Constraint):World;

        /**
         * An alias for Composite.clear since World is also a Composite.
         * @param world
         * @param keepStatic
         */
        static clear(world:World, keepStatic:boolean):void;

        /**
         * Creates a new world composite. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section below for detailed information on what you can pass via the options object.
         * @param options
         */
        static create(options:IWorldOptions):World;

    }

    export interface IBodyDefinition
    {
        angle?:number;
        angularSpeed?:number;
        angularVelocity?:number;
        area?:number;
        axes?:Array<Vector>;
        bounds?:Bounds;
        density?:number;
        force?:Vector;
        friction?:number;
        frictionAir?:number;
        groupId?:number;
        id?:number;
        inertia?:number;
        inverseInertia?:number;
        inverseMass?:number;
        isSleeping?:boolean;
        isStatic?:boolean;
        label?:string;
        mass?:number;
        motion?:number;
        position?:Vector;
        render?:IBodyRenderOptions;
        restitution?:number;
        sleepThreshold?:number;
        slop?:number;
        speed?:number;
        timeScale?:number;
        torque?:number;
        type?:string;
        velocity?:Vector;
        vertices?:Array<Vector>;
    }

    /**
     * The Matter.Body module contains methods for creating and manipulating body models. A Matter.Body is a rigid body that can be simulated by a Matter.Engine. Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module Matter.Bodies.
     */
    export class Body
    {
        /**
         * Applies a force to a body from a given world-space position, including resulting torque.
         * @param body
         * @param position
         * @param force
         */
        static applyForce(body:Body, position:Vector, force:Vector):void;

        /**
         * Applys a mass dependant force to all given bodies.
         * @param bodies
         * @param gravity
         */
        static applyGravityAll(bodies:Array<Body>, gravity:Vector):void;

        /**
         * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults. All properties have default values, and many are pre-calculated automatically based on other properties. See the properites section below for detailed information on what you can pass via the options object.
         * @param options
         */
        static create(options:IBodyDefinition):Body;

        /**
         * Returns the next unique groupID number.
         */
        static nextGroupId():number;

        /**
         * Zeroes the body.force and body.torque force buffers.
         * @param bodies
         */
        static resetForcesAll(bodies:Array<Body>):void;

        /**
         * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
         * @param body
         * @param angle
         */
        static rotate(body:Body, angle:number):void;

        /**
         * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
         * @param isStatic
         */
        setStatic(isStatic:boolean):void;

        /**
         * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
         * @param body
         * @param scaleX
         * @param scaleY
         * @param poinst
         */
        static scale(body:Body, scaleX:number, scaleY:number, poinst?:Vector):void;

        /**
         * Moves a body by a given vector relative to its current position, without imparting any velocity.
         *
         * @param body
         * @param translation
         */
        static translate(body:Body, translation:Vector):void;

        /**
         *Performs a simulation step for the given body, including updating position and angle using Verlet integration.
         *
         * @param body
         * @param deltaTime
         * @param timeScale
         * @param correction
         */
        static update(body:Body, deltaTime:number, timeScale:number, correction:number):void;

        /**
         * Applys Body.update to all given bodies.
         *
         * @param bodies
         * @param deltaTime
         * @param timeScale
         * @param correction
         * @param worldBounds
         */
        static updateAll ( bodies:Array<Body>,  deltaTime:number,  timeScale:number,  correction:number,  worldBounds:Bounds ):void;

        /**
         * A Number specifying the angle of the body, in radians.
         */
        angle:number;

        /**
         * A Number that measures the current angular speed of the body after the last Body.update. It is read-only and always positive (it's the magnitude of body.angularVelocity).
         */
        angularSpeed:number;

        /**
         * A Number that measures the current angular velocity of the body after the last Body.update. It is read-only. If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's angle (as the engine uses position-Verlet integration).
         */
        angularVelocity:number;

        /**
         * A Number that measures the area of the body's convex hull, calculated at creation by Body.create.
         */
        area:number;

        /**
         * An array of unique axis vectors (edge normals) used for collision detection. These are automatically calculated from the given convex hull (vertices array) in Body.create. They are constantly updated by Body.update during the simulation.
         */
        axes:Array<Vector>;

        /**
         * A Bounds object that defines the AABB region for the body. It is automatically calculated from the given convex hull (vertices array) in Body.create and constantly updated by Body.update during simulation.
         */
        bounds:Bounds;

        /**
         * A Number that defines the density of the body, that is its mass per unit area. If you pass the density via Body.create the mass property is automatically calculated for you based on the size (area) of the object. This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
         */
        density:number;

        /**
         * A Vector that specifies the force to apply in the current step. It is zeroed after every Body.update. See also Body.applyForce.
         */
        force:Vector;

        /**
         * A Number that defines the friction of the body. The value is always positive and is in the range (0, 1). A value of 0 means that the body may slide indefinitely. A value of 1 means the body may come to a stop almost instantly after a force is applied.
         The effects of the value may be non-linear. High values may be unstable depending on the body. The engine uses a Coulomb friction model including static and kinetic friction. Note that collision response is based on pairs of bodies, and that friction values are combined with the following formula:
         Math.min(bodyA.friction, bodyB.friction)
         */
        friction:number;

        /**
         * A Number that defines the air friction of the body (air resistance). A value of 0 means the body will never slow as it moves through space. The higher the value, the faster a body slows when moving through space. The effects of the value are non-linear.
         Default: 0.01
         */
        frictionAir:number;

        /**
         * An integer Number that specifies the collision group the body belongs to. Bodies with the same groupId are considered as-one body and therefore do not interact. This allows for creation of segmented bodies that can self-intersect, such as a rope. The default value 0 means the body does not belong to a group, and can interact with all other bodies.
         Default: 0
         */
        groupId:number;

        /**
         * An integer Number uniquely identifying number generated in Body.create by Common.nextId.
         */
        id:number;

        /**
         * A Number that defines the moment of inertia (i.e. second moment of area) of the body. It is automatically calculated from the given convex hull (vertices array) and density in Body.create. If you modify this value, you must also modify the body.inverseInertia property (1 / inertia).
         */
        inertia:number;

        /**
         * A Number that defines the inverse moment of inertia of the body (1 / inertia). If you modify this value, you must also modify the body.inertia property.
         */
        inverseInertia:number;

        /**
         * A Number that defines the inverse mass of the body (1 / mass). If you modify this value, you must also modify the body.mass property.
         */
        inverseMass:number;

        /**
         * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken. If you need to set a body as sleeping, you should use Sleeping.set as this requires more than just setting this flag.
         Default: false
         */
        isSleeping:boolean;

        /**
         * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed. If you need to set a body as static after its creation, you should use Body.setStatic as this requires more than just setting this flag.
         Default: false
         */
        isStatic:boolean;

        /**
         * An arbitrary String name to help the user identify and manage bodies.
         Default: "Body"
         */
        label:string;

        /**
         * A Number that defines the mass of the body, although it may be more appropriate to specify the density property instead. If you modify this value, you must also modify the body.inverseMass property (1 / mass).
         */
        mass:number;

        /**
         * A Number that measures the amount of movement a body currently has (a combination of speed and angularSpeed). It is read-only and always positive. It is used and updated by the Matter.Sleeping module during simulation to decide if a body has come to rest.
         Default: 0
         */
        motion:number;

        /**
         * A Vector that specifies the current world-space position of the body.
         Default: { x: 0, y: 0 }
         */
        position:Vector;

        /**
         * An Object that defines the rendering properties to be consumed by the module Matter.Render.
         */
        render:IBodyRenderOptions;

        /**
         * A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula:
         Math.max(bodyA.restitution, bodyB.restitution)
         Default: 0
         */
        restitution:number;

        /**
         * A Number that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the Matter.Sleeping module (if sleeping is enabled by the engine).
         Default: 60
         */
        sleepThreshold:number;

        /**
         * A Number that specifies a tollerance on how far a body is allowed to 'sink' or rotate into other bodies. Avoid changing this value unless you understand the purpose of slop in physics engines. The default should generally suffice, although very large bodies may require larger values for stable stacking.
         Default: 0.05
         */
        slop:number;

        /**
         * A Number that measures the current speed of the body after the last Body.update. It is read-only and always positive (it's the magnitude of body.velocity).
         Default: 0
         */
        speed:number;

        /**
         * A Number that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
         Default: 1
         */
        timeScale:number;

        /**
         * A Number that specifies the torque (turning force) to apply in the current step. It is zeroed after every Body.update.
         Default: 0
         */
        torque:number;

        /**
         *A String denoting the type of object.
         Default: "body"
         */
        type:string;

        /**
         * A Vector that measures the current velocity of the body after the last Body.update. It is read-only. If you need to modify a body's velocity directly, you should either apply a force or simply change the body's position (as the engine uses position-Verlet integration).
         Default: { x: 0, y: 0 }
         */
        velocity:Vector;

        /**
         * An array of Vector objects that specify the convex hull of the rigid body. These should be provided about the origin (0, 0). E.g.
         [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
         When passed via Body.create, the verticies are translated relative to body.position (i.e. world-space, and constantly updated by Body.update during simulation). The Vector objects are also augmented with additional properties required for efficient collision detection.
         Other properties such as inertia and bounds are automatically calculated from the passed vertices (unless provided via options). Concave hulls are not currently supported. The module Matter.Vertices contains useful methods for working with vertices.
         */
        vertices:Array<Vector>;

    }

    export class Bodies {
        /**
         * Creates a new rigid body model with a circle hull. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section of the Matter.Body module for detailed information on what you can pass via the options object.
         *
         * @param x
         * @param y
         * @param radius
         * @param options
         * @param maxSides
         */
        static circle(x:number, y:number, radius:number, options?:IBodyDefinition, maxSides?:number):Body;

        /**
         * Creates a new rigid body model with a regular polygon hull with the given number of sides. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section of the Matter.Body module for detailed information on what you can pass via the options object.
         *
         * @param x
         * @param y
         * @param sides
         * @param radius
         * @param options
         */
        static polygon(x:number, y:number, sides:number, radius:number, options?:IBodyDefinition):Body;

        /**
         * Creates a new rigid body model with a rectangle hull. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section of the Matter.Body module for detailed information on what you can pass via the options object.
         *
         * @param x
         * @param y
         * @param width
         * @param height
         * @param options
         */
        static rectangle(x:number, y:number, width:number, height:number, options?:IBodyDefinition):Body;

        /**
         * Creates a new rigid body model with a trapezoid hull. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section of the Matter.Body module for detailed information on what you can pass via the options object.
         *
         * @param x
         * @param y
         * @param width
         * @param height
         * @param slope
         * @param options
         */
        static trapezoid(x:number, y:number, width:number, height:number, slope:number, options?:IBodyDefinition):Body;


    }

    export interface IBodyRenderOptions
    {
        /**
         * A String that defines the fill style to use when rendering the body (if a sprite is not defined). It is the same as when using a canvas, so it accepts CSS style property values.
         Default: a random colour
         */
        fillStyle:string;

        /**
         * A Number that defines the line width to use when rendering the body outline (if a sprite is not defined). A value of 0 means no outline will be rendered.
         Default: 1.5
         */
        lineWidth:number;

        /**
         * An Object that defines the sprite properties to use when rendering, if any.
         */
        sprite:IBodyRenderOptionsSprite;

        /**
         * A String that defines the stroke style to use when rendering the body outline (if a sprite is not defined). It is the same as when using a canvas, so it accepts CSS style property values.
         Default: a random colour
         */
        strokeStyle:string;

        /**
         * A flag that indicates if the body should be rendered.
         Default: true
         */
        visible:boolean;

    }

    export interface IBodyRenderOptionsSprite
    {
        /**
         * An String that defines the path to the image to use as the sprite texture, if any.
         */
        texture:string;

        /**
         * A Number that defines the scaling in the x-axis for the sprite, if any.
         Default: 1
         */
        xScale:number;

        /**
         * A Number that defines the scaling in the y-axis for the sprite, if any.
         Default: 1
         */
        yScale:number;
    }

    export class Bounds
    {

    }

    export class Vector
    {

        x:number;
        y:number;

        /**
         * Adds the two vectors.
         *
         * @param vectorA
         * @param vectorB
         * @returns A new vector of vectorA and vectorB added.
         */
        static add ( vectorA:Vector,  vectorB:Vector ):Vector;

        /**
         * Returns the angle in radians between the two vectors relative to the x-axis.
         *
         * @param vectorA
         * @param vectorB
         * @returns The angle in radians.
         */
        static angle ( vectorA:Vector,  vectorB:Vector ):number;

        /**
         * Returns the cross-product of two vectors.
         *
         * @param vectorA
         * @param vectorB
         * @returns The cross product of the two vectors.
         */
        static cross ( vectorA:Vector,  vectorB:Vector ):number;

        /**
         * Divides a vector and a scalar.
         *
         * @param vector
         * @param scalar
         * @returns A new vector divided by scalar.
         */
        static div ( vector:Vector,  scalar:number ):Vector;

        /**
         * Returns the dot-product of two vectors.
         *
         * @param vectorA
         * @param vectorB
         * @returns The dot product of the two vectors
         */
        static dot ( vectorA:Vector,  vectorB:Vector ):Number;

        /**
         * Returns the magnitude (length) of a vector.
         *
         * @param vector
         * @returns The magnitude of the vector
         */
        static magnitude ( vector:Vector ):number;

        /**
         * Returns the magnitude (length) of a vector (therefore saving a sqrt operation).
         *
         * @param vector
         * @returns The squared magnitude of the vector.
         */
        static magnitudeSquared ( vector:Vector ):number;

        /**
         * Multiplies a vector and a scalar.
         *
         * @param vector
         * @param scalar
         * @returns A new vector multiplied by scalar
         */
        static mult ( vector:Vector,  scalar:number ):Vector;

        /**
         * Negates both components of a vector such that it points in the opposite direction.
         * @param vector
         * @returns The negated vector.
         */
        static neg ( vector:Vector ):Vector;

        /**
         * Normalises a vector (such that its magnitude is 1).
         *
         * @param vector
         * @returns A new vector normalised
         */
        static normalise ( vector:Vector ):Vector;

        /**
         * Returns the perpendicular vector. Set negate to true for the perpendicular in the opposite direction.
         *
         * @param vector
         * @param negate
         * @returns The perpendicular vector
         */
        static perp ( vector:Vector, negate?:boolean ):Vector;

        /**
         * Rotates the vector about (0, 0) by specified angle.
         *
         * @param vector
         * @param angle
         * @returns A new vector rotated about (0, 0)
         */
        static rotate ( vector:Vector,  angle:number ):Vector;

        /**
         * Rotates the vector about a specified point by specified angle.
         *
         * @param vector
         * @param angle
         * @param point
         * @returns A new vector rotated about the point
         */
        static rotateAbout ( vector:Vector,  angle:number,  point:Vector ):Vector;

        /**
         * Subtracts the two vectors.
         *
         * @param vectorA
         * @param vectorB
         * @returns A new vector of vectorA and vectorB subtracted
         */
        static sub ( vectorA:Vector,  vectorB:Vector ):Vector;
    }

    export class Constraint
    {
        /**
         * Creates a new constraint. All properties have default values, and many are pre-calculated automatically based on other properties. See the properites section below for detailed information on what you can pass via the options object.
         *
         * @param options
         * @returns constraint
         */
        static create(options:IConstraintDefinition):Constraint;

        /**
         * The first possible Body that this constraint is attached to.
         */
        bodyA:Body;

        /**
         * The second possible Body that this constraint is attached to.
         */
        bodyB:Body;

        /**
         * An integer Number uniquely identifying number generated in Composite.create by Common.nextId.
         */
        id:number;

        /**
         * An arbitrary String name to help the user identify and manage bodies.
         * Default: "Constraint"
         */
        label:string;

        /**
         * A Number that specifies the target resting length of the constraint. It is calculated automatically in Constraint.create from intial positions of the constraint.bodyA and constraint.bodyB.
         */
        length:number;

        /**
         * A Vector that specifies the offset of the constraint from center of the constraint.bodyA if defined, otherwise a world-space position.
         Default: { x: 0, y: 0 }
         */
        pointA:Vector;

        /**
         * A Vector that specifies the offset of the constraint from center of the constraint.bodyA if defined, otherwise a world-space position.
         Default: { x: 0, y: 0 }
         */
        pointB:Vector;

        /**
         * An Object that defines the rendering properties to be consumed by the module Matter.Render.
         */
        render:IConstraintRenderRefinition;

        /**
         * A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting constraint.length. A value of 1 means the constraint should be very stiff. A value of 0.2 means the constraint acts like a soft spring.
         Default: 1
         */
        stiffness:number;

        /**
         * A String denoting the type of object.
         Default: "constraint"
         */
        type:string;
    }

    export class MouseConstraint
    {
        create(engine:Engine, options:IMouseConstraintDefinition):MouseConstraint;

        /**
         * The Constraint object that is used to move the body during interaction.
         */
        constraint:Constraint;

        /**
         * The Body that is currently being moved by the user, or null if no body.
         Default: null
         */
        dragBody:Body;

        /**
         * The Vector offset at which the drag started relative to the dragBody, if any.
         Default: null
         */
        dragPoint:Vector;

        /**
         * The Mouse instance in use.
         Default: engine.input.mouse
         */
        mouse:Mouse;

        /**
         * A String denoting the type of object.
         Default: "constraint"
         */
        type:string;
    }

    export interface IMouseConstraintDefinition
    {
        /**
         * The Constraint object that is used to move the body during interaction.
         */
        constraint?:Constraint;

        /**
         * The Body that is currently being moved by the user, or null if no body.
         Default: null
         */
        dragBody?:Body;

        /**
         * The Vector offset at which the drag started relative to the dragBody, if any.
         Default: null
         */
        dragPoint?:Vector;

        /**
         * The Mouse instance in use.
         Default: engine.input.mouse
         */
        mouse?:Mouse;

        /**
         * A String denoting the type of object.
         Default: "constraint"
         */
            type?:string;
    }
    
    export class Query
    {
        /**
         * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
         * 
         * @param bodies 
         * @param startPoint 
         * @param endPoint 
         * @param [rayWidth]
         * 
         * @returns Object[] Collisions
         */
        static ray( bodies:Array<Body>,  startPoint:Vector,  endPoint:Vector,  rayWidth?:number ):Array<any>;
        
        /**
         * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
         * 
         * @param bodies
         * @param bounds
         * @returns Body[] The bodies matching the query
         */
        static region( bodies:Array<Body>,  bounds:Bounds,  outside?:boolean ):Array<Body>;
    }

    export class Mouse
    {

    }

    export interface IConstraintRenderRefinition
    {
        /**
         * A Number that defines the line width to use when rendering the constraint outline. A value of 0 means no outline will be rendered.
         Default: 2
         */
        lineWidth:number;

        /**
         * A String that defines the stroke style to use when rendering the constraint outline. It is the same as when using a canvas, so it accepts CSS style property values.
         Default: a random colour
         */
        strokeStyle:string;

        /**
         * A flag that indicates if the constraint should be rendered.
         Default: true
         */
        visible:boolean;
    }

    export interface IConstraintDefinition
    {
        /**
         * The first possible Body that this constraint is attached to.
         */
        bodyA?:Body;

        /**
         * The second possible Body that this constraint is attached to.
         */
        bodyB?:Body;

        /**
         * An integer Number uniquely identifying number generated in Composite.create by Common.nextId.
         */
        id?:number;

        /**
         * An arbitrary String name to help the user identify and manage bodies.
         * Default: "Constraint"
         */
        label?:string;

        /**
         * A Number that specifies the target resting length of the constraint. It is calculated automatically in Constraint.create from intial positions of the constraint.bodyA and constraint.bodyB.
         */
        length?:number;

        /**
         * A Vector that specifies the offset of the constraint from center of the constraint.bodyA if defined, otherwise a world-space position.
         Default: { x: 0, y: 0 }
         */
        pointA?:Vector;

        /**
         * A Vector that specifies the offset of the constraint from center of the constraint.bodyA if defined, otherwise a world-space position.
         Default: { x: 0, y: 0 }
         */
        pointB?:Vector;

        /**
         * An Object that defines the rendering properties to be consumed by the module Matter.Render.
         */
        render?:IConstraintRenderRefinition;

        /**
         * A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting constraint.length. A value of 1 means the constraint should be very stiff. A value of 0.2 means the constraint acts like a soft spring.
         Default: 1
         */
        stiffness?:number;

        /**
         * A String denoting the type of object.
         Default: "constraint"
         */
            type?:string;
    }

    export class Composite
    {
        /**
         * Generic add function. Adds one or many body(s), constraint(s) or a composite(s) to the given composite.
         *
         * @param composite
         * @param object
         *
         * @returns The original composite with the objects added
         */
        static add(composite:Composite, object:Body|Composite|Constraint ):Composite;

        /**
         * Adds a body to the given composite
         *
         * @param composite
         * @param body
         *
         * @returns Composite The original composite with the body added
         */
        static addBody(composite:Composite, body:Body):Composite;

        /**
         * Adds a composite to the given composite
         *
         * @param compositeA
         * @param compositeB
         *
         * @returns The original compositeA with the objects from compositeB added
         */
        static addComposite(compositeA:Composite, compositeB:Composite):Composite;

        /**
         *
         * @param composite
         * @param constraint
         * @returns The original composite with the constraint added
         */
        static addConstraint(composite:Composite, constraint:Constraint):Composite;

        /**
         * Returns all bodies in the given composite, including all bodies in its children, recursively.
         *
         * @param composite
         * @returns Body[] All the bodies
         */
        static allBodies(composite:Composite):Array<Body>;

        /**
         * Returns all composites in the given composite, including all composites in its children, recursively.
         *
         * @param composite
         * @returns Composite[] All the composites
         */
        static allComposites(composite:Composite):Array<Composite>;

        /**
         * Returns all constraints in the given composite, including all constraints in its children, recursively.
         *
         * @param composite
         * @returns Constraint[] All the constraints
         */
        static allConstraints(composite:Composite):Array<Composite>;

        /**
         * Removes all bodies, constraints and composites from the given composite Optionally clearing its children recursively.
         *
         * @param world
         * @param keepStatic
         * @param deep
         */
        static clear(world:World, keepStatic:boolean, deep?:boolean):void;

        /**
         * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults. See the properites section below for detailed information on what you can pass via the options object.
         *
         * @param options
         * @returns A new composite
         */
        static create(options:ICompositeDefinition):Composite;

        /**
         * Searches the composite recursively for an object matching the type and id supplied, null if not found
         *
         * @param composite
         * @param id
         * @param type
         * @returns The requested object, if found.
         */
        static get(composite:Composite,id:number,type:string):Body|Composite|Constraint;

        /**
         * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add)
         *
         * @param compositeA
         * @param objects
         * @param compositeB
         * @returns Returns compositeA
         */
        static move(compositeA:Composite, objects:Array<Body|Composite|Constraint>, compositeB:Composite):Composite;

        /**
         * Assigns new ids for all objects in the composite, recursively.
         *
         * @param composite
         * @returns Returns composite
         */
        static rebase(composite:Composite):Composite;

        /**
         * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite. Optionally searching its children recursively.
         *
         * @param composite
         * @param object
         * @param deep
         * @returns The original composite with the objects removed.
         */
        static remove(composite:Composite, object:Body|Composite|Constraint, deep?:boolean):Composite;

        /**
         * Removes a body from the given composite, and optionally searching its children recursively.
         *
         * @param composite
         * @param body
         * @param deep
         * @returns The original composite with the body removed.
         */
        static removeBody(composite:Composite, body:Body, deep?:boolean):Composite;

        /**
         * Removes a body from the given composite.
         *
         * @param composite
         * @param position
         * @returns The original composite with the body removed.
         */
        static removeBodyAt(composite:Composite, position:number):Composite;

        /**
         * Removes a composite from the given composite, and optionally searching its children recursively
         *
         * @param compositeA
         * @param compositeB
         * @returns The original compositeA with the composite removed.
         */
        static removeComposite(compositeA:Composite, compositeB:Composite, deep?:boolean):Composite;

        /**
         * Removes a composite from the given composite
         *
         * @param composite
         * @param position
         * @returns The original composite with the composite removed.
         */
        static removeCompositeAt(composite:Composite, position:number):Composite;

        /**
         * Removes a constraint from the given composite, and optionally searching its children recursively
         *
         * @param composite
         * @param constraint
         * @param deep
         *
         * @returns The original composite with the constraint removed
         */
        static removeConstraint(composite:Composite, constraint:Constraint, deep?:boolean):Composite;

        /**
         * Removes a body from the given composite
         * @param composite
         * @param position
         * @returns The original composite with the constraint removed
         */
        static removeConstraintAt(composite:Composite, position:number):Composite;

        /**
         * Sets the composite's isModified flag. If updateParents is true, all parents will be set (default: false). If updateChildren is true, all children will be set (default: false).
         *
         * @param composite
         * @param isModified
         * @param updateParents
         */
        static setModified(composite:Composite, isModified:boolean, updateParents?:boolean):void;

        /**
         * An array of Body that are direct children of this composite. To add or remove bodies you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allBodies method.
         */
        bodies:Array<Body>;

        /**
         * An array of Composite that are direct children of this composite. To add or remove composites you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allComposites method.
         */
        composites:Array<Composite>;

        /**
         * An array of Constraint that are direct children of this composite. To add or remove constraints you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allConstraints method.
         */
        constraints:Array<Constraint>;

        /**
         * An integer Number uniquely identifying number generated in Composite.create by Common.nextId.
         */
        id:number;

        /**
         * A flag that specifies whether the composite has been modified during the current step. Most Matter.Composite methods will automatically set this flag to true to inform the engine of changes to be handled. If you need to change it manually, you should use the Composite.setModified method.
         */
        isModified:boolean;

        /**
         * An arbitrary String name to help the user identify and manage composites.
         * Default: "Composite"
         */
        label:string;

        /**
         * The Composite that is the parent of this composite. It is automatically managed by the Matter.Composite methods.
         */
        parent:Composite;

        /**
         * A String denoting the type of object.
         */
        type:String;

    }

    export class Composites
    {
        /**
         * It will create car composite, wheels, car body and constraints.
         *
         * @param xx
         * @param yy
         * @param width
         * @param height
         * @param wheelSize
         *
         * @returns A new composite car body
         */
        static car ( xx:number, yy:number,  width:number,  height:number,  wheelSize:number ):Composite;

        /**
         * Creates chain
         * @param composite
         * @param xOffsetA
         * @param yOffsetA
         * @param xOffsetB
         * @param yOffsetB
         * @param options
         */
        static chain ( composite:Composite,  xOffsetA:number,  yOffsetA:number,  xOffsetB:number,  yOffsetB:number, options:any ):Composite;

        /**
         *Connects bodies in the composite with constraints in a grid pattern, with optional cross braces
         *
         * @param composite
         * @param columns
         * @param rows
         * @param crossBrace
         * @param options
         * @returns The composite containing objects meshed together with constraints
         */
        static mesh(composite:Composite, columns:number, rows:number, crossBrace:boolean, options:any ):Composite;

        /**
         * Creates newton cradle
         * @param xx
         * @param yy
         * @param _number
         * @param size
         * @param length
         * @returns A new composite newtonsCradle body
         */
        newtonsCradle(xx:number,  yy:number,  _number:number,  size:number,  length:number):Composite;

        /**
         * Creates pyramid
         *
         * @param xx
         * @param yy
         * @param columns
         * @param rows
         * @param columnGap
         * @param rowGap
         * @param callback
         * @return A new composite containing objects created in the callback
         */
        static pyramid(xx:number,  yy:number, columns:number, rows:number,  columnGap:number,  rowGap:number,  callback:Function):Composite;

        /**
         * Creates a simple soft body like object
         *
         * @param xx
         * @param yy
         * @param columns
         * @param rows
         * @param columnGap
         * @param rowGap
         * @param crossBrace
         * @param particleRadius
         * @param particleOptions
         * @param constraintOptions
         *
         * @returns A new composite softBody
         */
        static softBody ( xx:number,  yy:number, columns:number,  rows:number,  columnGap:number,  rowGap:number, crossBrace:boolean,  particleRadius:number,  particleOptions:any,  constraintOptions:any ):Composite;

        /**
         * Creates objects in and stacks them up.
         * @param xx
         * @param yy
         * @param columns
         * @param rows
         * @param columnGap
         * @param rowGap
         * @param callback
         * @returns A new composite containing objects created in the callback
         */
        static stack ( xx:number,  yy:number,  columns:number,  rows:number,  columnGap:number,  rowGap:number,  callback:Function ):Composite;
    }

    export interface ICompositeDefinition
    {
        /**
         * An array of Body that are direct children of this composite. To add or remove bodies you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allBodies method.
         */
        bodies?:Array<Body>;

        /**
         * An array of Composite that are direct children of this composite. To add or remove composites you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allComposites method.
         */
        composites?:Array<Composite>;

        /**
         * An array of Constraint that are direct children of this composite. To add or remove constraints you should use Composite.add and Composite.remove methods rather than directly modifying this property. If you wish to recursively find all descendants, you should use the Composite.allConstraints method.
         */
        constraints?:Array<Constraint>;

        /**
         * An integer Number uniquely identifying number generated in Composite.create by Common.nextId.
         */
        id?:number;

        /**
         * A flag that specifies whether the composite has been modified during the current step. Most Matter.Composite methods will automatically set this flag to true to inform the engine of changes to be handled. If you need to change it manually, you should use the Composite.setModified method.
         */
        isModified?:boolean;

        /**
         * An arbitrary String name to help the user identify and manage composites.
         * Default: "Composite"
         */
        label?:string;

        /**
         * The Composite that is the parent of this composite. It is automatically managed by the Matter.Composite methods.
         */
        parent?:Composite;

        /**
         * A String denoting the type of object.
         */
            type?:String;
    }

    export class Vertices
    {
        /**
         * Returns the area of the set of vertices.
         *
         * @param vertices
         * @param signed
         */
        static area ( vertices:Array<Vector>,  signed:boolean ):number;

        /**
         * Returns the centre (centroid) of the set of vertices.
         * @param vertices
         * @returns The centre point
         */
        static centre ( vertices:Array<Vector> ):Vector;

        /**
         * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices. The radius parameter is a single number or an array to specify the radius for each vertex.
         * @param vertices
         */
        static chamfer ( vertices:Array<Vector>,  radius:Array<number>,  quality:number,  qualityMin:number,  qualityMax:number ):void;


        /**
         * Returns true if the point is inside the set of vertices.
         *
         * @param vertices
         * @returns True if the vertices contains point, otherwise false.
         */
        static contains ( vertices:Array<Vector>,  point:Vector ):boolean;

        /**
         * Creates a new set of Matter.Body compatible vertices. The vertices argument accepts an array of Matter.Vector orientated around the origin (0, 0), for example:
         [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
         The Vertices.create method then inserts additional indexing properties required for efficient collision detection routines.

         * @param vertices
         * @param body
         */
        static create ( vertices:Array<Vector>,  body:Body):void;

        /**
         * Parses a simple SVG-style path into a set of Matter.Vector points.
         *
         * @param path
         * @returns vertices
         */
        static fromPath ( path:string ):Array<Vector>;

        /**
         * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
         *
         * @param vertices
         * @returns The polygon's moment of inertia
         */
        static inertia( vertices:Array<Vector>,  mass:number ):number;

        /**
         * Rotates the set of vertices in-place.
         *
         * @param vertices
         * @param angle
         * @param point
         */
        static static  ( vertices:Array<Vector>,  angle:number,  point:Vector ):void;

        /**
         * Scales the vertices from a point (default is centre) in-place.
         *
         * @param vertices
         * @param scaleX
         * @param scaleY
         * @param point
         */
        static scale( vertices:Array<Vector>,  scaleX:number,  scaleY:number,  point:Vector ):void;

        /**
         * Translates the set of vertices in-place.
         *
         * @param vertices
         */
        static translate ( vertices:Array<Vector>,  vector:Vector,  scalar:number ):void;
    }

    export class Render
    {

    }

    export class Events
    {
        /**
         * Fired after rendering
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"afterRender", callback:(e:any) => void ):void;

        /**
         * Fired after engine update and after rendering
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"afterUpdate", callback:(e:any) => void ):void;

        /**
         * Fired just before rendering
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"beforeRender", callback:(e:any) => void ):void;

        /**
         * Fired at the start of a tick, before any updates to the engine or timing
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"beforeTick", callback:(e:any) => void ):void;

        /**
         * Fired just before an update
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"beforeUpdate", callback:(e:any) => void ):void;

        /**
         * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"collisionActive", callback:(e:any) => void ):void;


        /**
         * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"collisionEnd", callback:(e:any) => void ):void;

        /**
         * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"collisionStart", callback:(e:any) => void ):void;

        /**
         * Fired when the mouse is down (or a touch has started) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"mousedown", callback:(e:any) => void ):void;

        /**
         * Fired when the mouse has moved (or a touch moves) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"mousemove", callback:(e:any) => void ):void;

        /**
         * Fired when the mouse is up (or a touch has ended) during the last step
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"mouseup", callback:(e:any) => void ):void;

        /**
         * Fired after engine timing updated, but just before engine state updated
         * @param obj
         * @param name
         * @param callback
         */
        static on(obj:Engine, name:"tick", callback:(e:any) => void ):void;

        static on(obj:Engine, name:string, callback:(e:any) => void ):void;

        /**
         * Removes the given event callback. If no callback, clears all callbacks in eventNames. If no eventNames, clears all events.
         *
         * @param obj
         * @param eventName
         * @param callback
         */
        static off(obj:any, eventName:string, callback: (e:any) => void ):void;

        /**
         * Fires all the callbacks subscribed to the given object's eventName, in the order they subscribed, if any.
         *
         * @param object
         * @param eventNames
         * @param event
         */
        static trigger( object:any,  eventNames:string,  event: (e:any) => void ):void;

    }
}
