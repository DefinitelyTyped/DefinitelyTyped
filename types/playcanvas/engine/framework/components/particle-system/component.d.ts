declare namespace pc {

    /**
     * @component
     * @name pc.ParticleSystemComponent
     * @description Create a new ParticleSystemComponent
     * @class Used to simulate particles and produce renderable particle mesh on either CPU or GPU.
     * GPU simulation is generally much faster than its CPU counterpart, because it avoids slow CPU-GPU synchronization and takes advantage of many GPU cores.
     * However, it requires client to support reasonable uniform count, reading from multiple textures in vertex shader and OES_texture_float extension, including rendering into float textures.
     * Most mobile devices fail to satisfy these requirements, so it's not recommended to simulate thousands of particles on them. GPU version also can't sort particles, so enabling sorting forces CPU mode too.
     * Particle rotation is specified by a single angle parameter: default billboard particles rotate around camera facing axis, while mesh particles rotate around 2 different view-independent axes.
     * Most of the simulation parameters are specified with pc.Curve or pc.CurveSet. Curves are interpolated based on each particle's lifetime, therefore parameters are able to change over time.
     * Most of the curve parameters can also be specified by 2 minimum/maximum curves, this way each particle will pick a random value in-between.
     * @param {pc.ParticleSystemComponentSystem} system The ComponentSystem that created this Component
     * @param {pc.Entity} entity The Entity this Component is attached to
     * @extends pc.Component
     * @property {Boolean} autoPlay Controls whether the particle system plays automatically on creation. If set to false, it is necessary to call {@link pc.ParticleSystemComponent#play} for the particle system to play. Defaults to true.
     * @property {Boolean} loop Enables or disables respawning of particles.
     * @property {Boolean} preWarm If enabled, the particle system will be initialized as though it had already completed a full cycle. This only works with looping particle systems.
     * @property {Boolean} lighting If enabled, particles will be lit by ambient and directional lights.
     * @property {Boolean} halfLambert Enabling Half Lambert lighting avoids particles looking too flat in shadowed areas. It is a completely non-physical lighting model but can give more pleasing visual results.
     * @property {Boolean} alignToMotion Orient particles in their direction of motion.
     * @property {Boolean} depthWrite If enabled, the particles will write to the depth buffer. If disabled, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered.
     * @property {Boolean} noFog Disable fogging
     * @property {Number} numParticles Maximum number of simulated particles.
     * @property {Number} rate Minimal interval in seconds between particle births.
     * @property {Number} rate2 Maximal interval in seconds between particle births.
     * @property {Number} startAngle Minimal initial Euler angle of a particle.
     * @property {Number} startAngle2 Maximal initial Euler angle of a particle.
     * @property {Number} lifetime The length of time in seconds between a particle's birth and its death.
     * @property {Number} stretch A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position.
     * @property {Number} intensity Color multiplier.
     * @property {Boolean} animLoop Controls whether the sprite sheet animation plays once or loops continuously.
     * @property {Number} animTilesX Number of horizontal tiles in the sprite sheet.
     * @property {Number} animTilesY Number of vertical tiles in the sprite sheet.
     * @property {Number} animNumFrames Number of sprite sheet frames to play. It is valid to set the number of frames to a value less than animTilesX multiplied by animTilesY.
     * @property {Number} animSpeed Sprite sheet animation speed. 1 = particle lifetime, 2 = twice during lifetime etc...
     * @property {Number} depthSoftening Controls fading of particles near their intersections with scene geometry. This effect, when it's non-zero, requires scene depth map to be rendered. Multiple depth-dependent effects can share the same map, but if you only use it for particles, bear in mind that it can double engine draw calls.
     * @property {Number} initialVelocity Defines magnitude of the initial emitter velocity. Direction is given by emitter shape.
     * @property {pc.Vec3} emitterExtents (Only for EMITTERSHAPE_BOX) The extents of a local space bounding box within which particles are spawned at random positions.
     * @property {Number} emitterRadius (Only for EMITTERSHAPE_SPHERE) The radius within which particles are spawned at random positions.
     * @property {pc.Vec3} wrapBounds The half extents of a world space box volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side.
     * @property {pc.Texture} colorMap The color map texture to apply to all particles in the system. If no texture is assigned, a default spot texture is used.
     * @property {pc.Texture} normalMap The normal map texture to apply to all particles in the system. If no texture is assigned, an approximate spherical normal is calculated for each vertex.
     * @property {pc.EMITTERSHAPE} emitterShape Shape of the emitter. Defines the bounds inside which particles are spawned. Also affects the direction of initial velocity.
     * <ul>
     * <li><strong>{@link pc.EMITTERSHAPE_BOX}</strong>: Box shape parameterized by emitterExtents. Initial velocity is directed towards local Z axis.</li>
     * <li><strong>{@link pc.EMITTERSHAPE_SPHERE}</strong>: Sphere shape parameterized by emitterRadius. Initial velocity is directed outwards from the center.</li>
     * </ul>
     * @property {pc.PARTICLESORT} sort Sorting mode. Forces CPU simulation, so be careful.
     * <ul>
     * <li><strong>{@link pc.PARTICLESORT_NONE}</strong>: No sorting, particles are drawn in arbitary order. Can be simulated on GPU.</li>
     * <li><strong>{@link pc.PARTICLESORT_DISTANCE}</strong>: Sorting based on distance to the camera. CPU only.</li>
     * <li><strong>{@link pc.PARTICLESORT_NEWER_FIRST}</strong>: Newer particles are drawn first. CPU only.</li>
     * <li><strong>{@link pc.PARTICLESORT_OLDER_FIRST}</strong>: Older particles are drawn first. CPU only.</li>
     * </ul>
     * @property {pc.Mesh} mesh Triangular mesh to be used as a particle. Only first vertex/index buffer is used. Vertex buffer must contain local position at first 3 floats of each vertex.
     * @property {pc.BLEND} blend Blending mode.
     * @property {pc.CurveSet} localVelocityGraph Velocity relative to emitter over lifetime.
     * @property {pc.CurveSet} localVelocityGraph2 If not null, particles pick random values between localVelocityGraph and localVelocityGraph2.
     * @property {pc.CurveSet} velocityGraph World-space velocity over lifetime.
     * @property {pc.CurveSet} velocityGraph2 If not null, particles pick random values between velocityGraph and velocityGraph2.
     * @property {pc.CurveSet} colorGraph Color over lifetime.
     * @property {pc.Curve} rotationSpeedGraph Rotation speed over lifetime.
     * @property {pc.Curve} rotationSpeedGraph2 If not null, particles pick random values between rotationSpeedGraph and rotationSpeedGraph2.
     * @property {pc.Curve} scaleGraph Scale over lifetime.
     * @property {pc.Curve} scaleGraph2 If not null, particles pick random values between scaleGraph and scaleGraph2.
     * @property {pc.Curve} alphaGraph Alpha over lifetime.
     * @property {pc.Curve} alphaGraph2 If not null, particles pick random values between alphaGraph and alphaGraph2.
     */
    class ParticleSystemComponent extends pc.Component {
        constructor(system: pc.ParticleSystemComponentSystem, entity: pc.Entity)

        autoPlay: boolean;
        loop: boolean;
        preWarm: boolean;
        lighting: boolean;
        halfLambert: boolean;
        alignToMotion: boolean;
        depthWrite: boolean;
        noFog: boolean;
        numParticles: number;
        rate: number;
        rate2: number;
        startAngle: number;
        startAngle2: number;
        lifetime: number;
        stretch: number;
        intensity: number;
        animLoop: boolean;
        animTilesX: number;
        animTilesY: number;
        animNumFrames: number;
        animSpeed: number;
        depthSoftening: number;
        initialVelocity: number;
        emitterExtents: pc.Vec3;
        emitterRadius: number;
        wrapBounds: pc.Vec3;
        colorMap: pc.Texture;
        normalMap: pc.Texture;
        emmitterShape: number;
        sort: number;
        mesh: pc.Mesh;
        blend: number;
        localVelocityGraph: pc.CurveSet;
        localVelocityGraph2: pc.CurveSet;
        velocityGraph: pc.CurveSet;
        velocityGraph2: pc.CurveSet;
        colorGraph: pc.CurveSet;
        rotationSpeedGraph: pc.Curve;
        rotationSpeedGraph2: pc.Curve;
        scaleGraph: pc.Curve;
        scaleGraph2: pc.Curve;
        alphaGraph: pc.Curve;
        alphaGraph2: pc.Curve;

        /**
        * @function
        * @name pc.ParticleSystemComponent#reset
        * @description Resets particle state, doesn't affect playing.
        */
        reset(): void;

        /**
        * @function
        * @name pc.ParticleSystemComponent#stop
        * @description Disables the emission of new particles, lets existing to finish their simulation.
        */
        stop(): void;

        /**
        * @function
        * @name pc.ParticleSystemComponent#pause
        * @description Freezes the simulation.
        */
        pause(): void;

        /**
        * @function
        * @name pc.ParticleSystemComponent#unpause
        * @description Unfreezes the simulation.
        */
        unpause(): void;

        /**
        * @function
        * @name pc.ParticleSystemComponent#play
        * @description Enables/unfreezes the simulation.
        */
        play(): void;

        /**
        * @function
        * @name pc.ParticleSystemComponent#isPlaying
        * @description Checks if simulation is in progress.
        */
        isPlaying(): void;

        /**
        * @private
        * @function
        * @name pc.ParticleSystemComponent#rebuild
        * @description Rebuilds all data used by this particle system.
        */
        private rebuild(): void;
    }
}
