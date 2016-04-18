// Type definitions for aurelia-animator-css v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/animator-css/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-templating.d.ts" />

declare module 'aurelia-animator-css' {
  import {
    animationEvent,
    TemplatingEngine
  } from 'aurelia-templating';
  import {
    DOM
  } from 'aurelia-pal';
  export interface CssAnimation {
    className: string;
    element: HTMLElement;
  }
  
  /**
   * An implementation of the Animator using CSS3-Animations.
   */
  /**
   * An implementation of the Animator using CSS3-Animations.
   */
  export class CssAnimator {
    
    /**
       * Creates an instance of CssAnimator.
       */
    constructor();
    
    /* Public API Begin */
    /**
       * Execute a single animation.
       * @param element Element to animate
       * @param className Properties to animate or name of the effect to use. For css animators this represents the className to be added and removed right after the animation is done.
       * @param options options for the animation (duration, easing, ...)
       * @returns Resolved when the animation is done
       */
    animate(element: HTMLElement | Array<HTMLElement>, className: string): Promise<boolean>;
    
    /**
       * Run a sequence of animations one after the other.
       * @param sequence An array of effectNames or classNames
       * @returns Resolved when all animations are done
       */
    runSequence(animations: Array<CssAnimation>): Promise<boolean>;
    
    /**
       * Execute an 'enter' animation on an element
       * @param element Element to animate
       * @returns Resolved when the animation is done
       */
    enter(element: HTMLElement): Promise<boolean>;
    
    /**
       * Execute a 'leave' animation on an element
       * @param element Element to animate
       * @returns Resolved when the animation is done
       */
    leave(element: HTMLElement): Promise<boolean>;
    
    /**
       * Add a class to an element to trigger an animation.
       * @param element Element to animate
       * @param className Properties to animate or name of the effect to use
       * @param suppressEvents Indicates whether or not to suppress animation events.
       * @returns Resolved when the animation is done
       */
    removeClass(element: HTMLElement, className: string, suppressEvents?: boolean): Promise<boolean>;
    
    /**
       * Add a class to an element to trigger an animation.
       * @param element Element to animate
       * @param className Properties to animate or name of the effect to use
       * @param suppressEvents Indicates whether or not to suppress animation events.
       * @returns Resolved when the animation is done
       */
    addClass(element: HTMLElement, className: string, suppressEvents?: boolean): Promise<boolean>;
  }
  
  /* Public API End */
  /**
   * Configuires the CssAnimator as the default animator for Aurelia.
   * @param config The FrameworkConfiguration instance.
   * @param callback A configuration callback provided by the plugin consumer.
   */
  export function configure(config: Object, callback?: ((animator: CssAnimator) => void)): void;
}