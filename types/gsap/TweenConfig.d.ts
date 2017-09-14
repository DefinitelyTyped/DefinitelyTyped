declare namespace gsap {
    export interface TweenConfig {

        /** Amount of delay in seconds (or frames for frames-based tweens) before the animation should begin.*/
        delay?: number;

        /** Ease (or () => void or String) - You can choose from various eases to control the rate of change during the animation, giving it a specific "feel". */
        ease?: Ease;

        yoyo?: boolean;

        /** If true, the tween will pause itself immediately upon creation. */
        paused?: boolean;

        /**  Controls how (and if) other tweens of the same target are overwritten. There are several modes to choose from, but "auto" is the default (although you can change the default mode using theTweenLite.defaultOverwrite property) */
        overwrite?: string | number;

        /**  A () => void that should be called when the animation has completed. */
        onComplete?: () => void;

        /** An Array of parameters to pass the onComplete () => void */
        onCompleteParams?: any[];

        /** Defines the scope of the onComplete () => void (what "this" refers to inside that () => void). */
        onCompleteScope?: {};

        /** Normally when you create a tween, it begins rendering on the very next frame (update cycle) unless you specify a delay. However, if you prefer to force the tween to render immediately when it is created, setimmediateRender to true. Or to prevent a from() from rendering immediately, set immediateRender to false. By default, from() tweens set immediateRender to true. */
        immediateRender?: boolean;

        /** A () => void that should be called when the tween has reached its beginning again from the reverse direction. */
        onReverseComplete?: () => void;

        /** An Array of parameters to pass the onReverseComplete () => void. */
        onReverseCompleteParams?: any[];

        /** Defines the scope of the onReverseComplete () => void (what "this" refers to inside that () => void). */
        onReverseCompleteScope?: {};

        /** A () => void that should be called when the tween begins (when its time changes from 0 to some other value which can happen more than once if the tween is restarted multiple times). */
        onStart?: () => void;

        /** An Array of parameters to pass the onStart () => void. */
        onStartParams?: any[];

        /** Defines the scope of the onStart () => void (what "this" refers to inside that () => void). */
        onStartScope?: {};

        /** A () => void that should be called every time the animation updates (on every frame while the animation is active). */
        onUpdate?: () => void;

        /** An Array of parameters to pass the onUpdate () => void. */
        onUpdateParams?: any[];

        /** Defines the scope of the onUpdate () => void (what "this" refers to inside that () => void). */
        onUpdateScope?: {};

        /** If useFrames is true, the tweens's timing will be based on frames instead of seconds because it is intially added to the root frames-based timeline. This causes both its duration and delay to be based on frames. An animations's timing mode is always determined by its parent timeline. */
        useFrames?: boolean;

        /** When a tween renders for the very first time and reads its starting values, GSAP will automatically "lazy render" that particular tick by default, meaning it will try to delay the rendering (writing of values) until the very end of the "tick" cycle which can improve performance because it avoids the read/write/read/write layout thrashing that some browsers do. If you would like to disable lazy rendering for a particular tween, you can set lazy:false. Or, since zero-duration tweens do not lazy-render by default, you can specifically give it permission to lazy-render by setting lazy:true like TweenLite.set(element, {opacity:0, lazy:true});. In most cases, you won't need to set lazy. */
        lazy?: boolean;

        /** A () => void that should be called when the tween gets overwritten by another tween. */
        onOverwrite?: () => void;

        /** If true atuomatically populates the css property for tween on DOM elements */
        autoCSS?: boolean;

        /** The scope to be used for all of the callbacks (onStart, onUpdate, onComplete, etc.). The scope is what "this" refers to inside any of the callbacks. */
        callbackScope?: {};

        startAt?: {};

        repeat?: number;

        repeatDelay?: number;

        onRepeat?: () => void;

        onRepeatScope?: {};
    }
}
