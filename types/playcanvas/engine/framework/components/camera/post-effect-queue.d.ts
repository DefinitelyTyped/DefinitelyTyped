declare namespace pc {

    /**
     * @name pc.PostEffectQueue
     * @description Create a new PostEffectQueue
     * @class Used to manage multiple post effects for a camera
     * @param {pc.Application} app The application
     * @param {pc.CameraComponent} camera The camera component
     */
    class PostEffectQueue {
        constructor(app: pc.Application, camera: pc.CameraComponent)

        /**
         * @private
         * @function
         * @name pc.PostEffectQueue#_createOffscreenTarget
         * @description Creates a render target with the dimensions of the canvas, with an optional depth buffer
         * @param {Boolean} useDepth Set to true if you want to create a render target with a depth buffer
         * @param {Boolean} hdr Use HDR render target format
         * @returns {pc.RenderTarget} The render target
         */
        private _createOffscreenTarget(useDepth: boolean, hdr: boolean): pc.RenderTarget;

        /**
         * @function
         * @name pc.PostEffectQueue#addEffect
         * @description Adds a post effect to the queue. If the queue is disabled adding a post effect will
         * automatically enable the queue.
         * @param {pc.PostEffect} effect The post effect to add to the queue.
         */
        addEffect(effect: pc.PostEffect): void;

        /**
         * @function
         * @name pc.PostEffectQueue#removeEffect
         * @description Removes a post effect from the queue. If the queue becomes empty it will be disabled automatically.
         * @param {pc.PostEffect} effect The post effect to remove.
         */
        removeEffect(effect: pc.PostEffect): void;

        /**
         * @function
         * @name pc.PostEffectQueue#destroy
         * @description Removes all the effects from the queue and disables it
         */
        destroy(): void;

        /**
         * @function
         * @name pc.PostEffectQueue#enable
         * @description Enables the queue and all of its effects. If there are no effects then the queue will not be enabled.
         */
        enable(): void;

        /**
         * @function
         * @name pc.PostEffectQueue#disable
         * @description Disables the queue and all of its effects.
         */
        disable(): void;
    }
}
