declare namespace pc {
    /**
    * @component Animation
    * @name pc.AnimationComponent
    * @description Create a new AnimationComponent
    * @class The Animation Component allows an Entity to playback animations on models
    * @param {pc.AnimationComponentSystem} system The {@link pc.ComponentSystem} that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to
    * @extends pc.Component
    * @property {Number} speed Speed multiplier for animation play back speed. 1.0 is playback at normal speed, 0.0 pauses the animation
    * @property {Boolean} loop If true the animation will restart from the beginning when it reaches the end
    * @property {Boolean} activate If true the first animation asset will begin playing when the Pack is loaded
    * @property {pc.Asset[]} assets The array of animation assets - can also be an array of asset ids.
    * @property {Number} currentTime Get or Set the current time position (in seconds) of the animation
    * @property {Number} duration Get the duration in seconds of the current animation.
    */
    class AnimationComponent extends pc.Component {
        constructor(system: pc.AnimationComponentSystem, entity: pc.Entity)

        speed: number;
        loop: boolean;
        activate: boolean;
        assets: number[];
        currentTime: number;
        duration: number;
        playing: boolean;
        currAnim: string;

        animations: any;
        animationsIndex: any;

        /**
         * @function
         * @name pc.AnimationComponent#play
         * @description Start playing an animation
         * @param {String} name The name of the animation asset to begin playing.
         * @param {Number} [blendTime] The time in seconds to blend from the current
         * animation state to the start of the animation being set.
         */
        play(name: string, blendTime?: number): void;

        /**
        * @function
        * @name pc.AnimationComponent#getAnimation
        * @description Return an animation
        * @param {String} name The name of the animation asset
        * @returns {pc.Animation} An Animation
        */
        getAnimation(name: string): pc.Animation;
    }
}
