declare namespace pc {

    /**
    * @name pc.SoundInstance3d
    * @extends pc.SoundInstance
    * @class A pc.SoundInstance3d plays a {@link pc.Sound} in 3D
    * @param {pc.SoundManager} manager The sound manager
    * @param {pc.Sound} sound The sound to play
    * @param {Object} options Options for the instance
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
    * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
    * @param {pc.Vec3} [options.position=null] The position of the sound in 3D space.
    * @param {pc.Vec3} [options.velocity=null] The velocity of the sound.
    * @param {String} [options.distanceModel=pc.DISTANCE_LINEAR] Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
    * @param {Number} [options.refDistance=1] The reference distance for reducing volume as the sound source moves further from the listener.
    * @param {Number} [options.maxDistance=10000] The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @param {Number} [options.rollOffFactor=1] The factor used in the falloff equation.
    * @property {pc.Vec3} position The position of the sound in 3D space.
    * @property {pc.Vec3} velocity The velocity of the sound.
    * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.        * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
    * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @property {Number} rollOffFactor The factor used in the falloff equation.
    */
    class SoundInstance3d extends SoundInstance {
        constructor(manager: pc.SoundManager, sound: pc.Sound, options: {
            volume?: number;
            pitch?: number;
            loop?: boolean;
            startTime?: number;
            duration?: number;
            position?: pc.Vec3;
            velocity?: pc.Vec3;
            distanceModel?: string;
            refDistance: number;
            maxDistance: number;
            rollOffFactor: number;
        })

        position: pc.Vec3;
        velocity: pc.Vec3;
        distanceModel: string;
        maxDistance: number;
        rollOffFactor: number;
    }
}
