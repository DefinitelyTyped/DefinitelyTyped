// Type definitions for iScroll 5.0
// Project: http://cubiq.org/iscroll-5-ready-for-beta-test
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>, acrazing <joking.young@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'iscroll' {
  namespace IScroll {
    interface IScrollOptions {
      /**
       * By default the engine uses the transform CSS property. Setting this to
       * false scrolls like we were in 2007, ie: using the top/left (and thus the
       * scroller needs to be absolutely positioned).
       *
       * This might be useful when scrolling sensitive content such as Flash,
       * iframes and videos, but be warned: performance loss is huge.
       *
       * Default: true
       */
      useTransform?: boolean;

      /**
       * iScroll uses CSS transition to perform animations (momentum and bounce). By
       * setting this to false, requestAnimationFrame is used instead.
       *
       * On modern browsers the difference is barely noticeable. On older devices
       * transitions perform better.
       *
       * Default: true
       */
      useTransition?: boolean;

      /**
       * This option tries to put the scroller on the hardware layer by appending
       * translateZ(0) to the transform CSS property. This greatly increases
       * performance especially on mobile, but there are situations where you might
       * want to disable it (notably if you have too many elements and the hardware
       * can't catch up).
       *
       * Default: true
       *
       * If unsure leave iScroll decide what's the optimal config. For best
       * performance all the above options should be set to true (or better leave
       * them undefined as they are set to true automatically). You may try to play
       * with them in case you encounter hiccups and memory leaks.
       */
      HWCompositing?: boolean;

      /**
       * When the scroller meets the boundary it performs a small bounce animation.
       * Disabling bounce may help reach smoother results on old or slow devices.
       *
       * Default: true
       */
      bounce?: boolean;

      /**
       * To override the native scrolling iScroll has to inhibit some default
       * browser behaviors, such as mouse clicks. If you want your application to
       * respond to the click event you have to explicitly set this option to
       * true. Please note that it is suggested to use the custom tap event
       * instead (see below).
       *
       * Default: false
       */
      click?: boolean;

      /**
       * By default iScroll listens to all pointer events and reacts to the first
       * one that occurs. It may seem a waste of resources but feature detection has
       * proven quite unreliable and this listen-to-all approach is our safest bet
       * for wide browser/device compatibility.
       * If you have an internal mechanism for device detection or you know in
       * advance where your script will run on, you may want to disable all event
       * sets you don't need (mouse, pointer or touch events).
       *
       * For example to disable mouse and pointer events:
       *  var myScroll = new IScroll('#wrapper', {
         *    disableMouse: true,
         *    disablePointer: true
         *  });
       *
       * Default: false
       */
      disableMouse?: boolean;
      disablePointer?: boolean;
      disableTouch?: boolean;

      /**
       * Sometimes you want to preserve native vertical scroll but being able to add
       * an horizontal iScroll (maybe a carousel). Set this to true and the iScroll
       * area will react to horizontal swipes only. Vertical swipes will naturally
       * scroll the whole page.
       *
       * See event passthrough {@link http://lab.cubiq.org/iscroll5/demos/event-passthrough/}
       * demo on a mobile device. Note that this can be set to 'horizontal' to
       * inverse the behavior (native horizontal scroll, vertical iScroll).
       */
      eventPassthrough?: boolean;

      /**
       * This is useful mainly on 2D scrollers (when you need to scroll both
       * horizontally and vertically). Normally when you start scrolling in one
       * direction the other is locked.
       * Sometimes you just want to move freely with no constrains. In these cases
       * you can set this option to true. See 2D scroll demo.
       * {@link http://lab.cubiq.org/iscroll5/demos/2d-scroll/}
       *
       * Default: false
       */
      freeScroll?: boolean;

      /**
       * You can turn on/off the momentum animation performed when the user quickly
       * flicks on screen. Turning this off greatly enhance performance.
       *
       * Default: true
       */
      momentum?: boolean;

      /**
       * Whether or not to preventDefault() when events are fired. This should be
       * left true unless you really know what you are doing.
       *
       * See preventDefaultException in the Advanced features for more control over
       * the preventDefault behavior.
       *
       * Default: true
       */
      preventDefault?: boolean;

      /**
       * By default only vertical scrolling is enabled. If you need to scroll
       * horizontally you have to set scrollX to true. See horizontal demo.
       *
       * See also the freeScroll option.
       * Default: scrollX: false, scrollY: true
       *
       * Note that scrollX/Y: true has the same effect as overflow: auto. Setting one
       * direction to false helps to spare some checks and thus CPU cycles.
       */
      scrollX?: boolean;
      scrollY?: boolean;

      /**
       * By default iScroll starts at 0, 0 (top left) position, you can instruct the
       * scroller to kickoff at a different location.
       *
       * Default: 0
       */
      startX?: number;
      startY?: number;

      /**
       * Set this to true to let iScroll emit a custom tap event when the scroll
       * area is clicked/tapped but not scrolled.
       *
       * This is the suggested way to handle user interaction with clickable
       * elements. To listen to the tap event you would add an event listener as you
       * would do for a standard event. Example:
       *
       *  element.addEventListener('tap', doSomething, false); \\ Native
       *  $('#element').on('tap', doSomething); \\ jQuery
       *
       * You can also customize the event name by passing a string. Eg:
       *
       *  tap: 'myCustomTapEvent'
       *
       * In this case you'd listen to myCustomTapEvent.
       *
       * Default: false
       */
      tap?: boolean|string;

      /**
       * The move event is normally bound to the document and not the scroll
       * container. When you move the cursor/finger out of the wrapper the scrolling
       * keeps going. This is usually what you want, but you can also bind the move
       * event to wrapper itself. Doing so as soon as the pointer leaves the
       * container the scroll stops.
       *
       * Default: false
       */
      bindToWrapper?: boolean;

      /**
       * Easing function performed during the bounce animation. Valid values are:
       * 'quadratic', 'circular', 'back', 'bounce', 'elastic'. See the bounce easing
       * demo, drag the scroller down and release.
       *
       * bounceEasing is a bit smarter than that. You can also feed a custom easing
       * function, like so:
       *
       *  bounceEasing: {
              style: 'cubic-bezier(0,0,1,1)',
              fn: function (k) { return k; }
         *  }
       *
       * The above would perform a linear easing. The style option is used every time
       * the animation is executed with CSS transitions, fn is used with
       * requestAnimationFrame. If the easing function is too complex and can't be
       * represented by a cubic bezier just pass '' (empty string) as style.
       *
       * Note that bounce and elastic can't be performed by CSS transitions.
       *
       * Default: 'circular'
       */
      bounceEasing?: EasingOptions|'quadratic'|'circular'|'back'|'bounce'|'elastic';

      /**
       * Duration in millisecond of the bounce animation.
       *
       * Default: 600
       */
      bounceTime?: number;

      /**
       * This value can be altered to change the momentum animation duration/speed.
       * Higher numbers make the animation shorter. Sensible results can be
       * experienced starting with a value of 0.01, bigger than that basically
       * doesn't make any momentum at all.
       *
       * Default: 0.0006
       */
      deceleration?: number;

      /**
       * These are all the exceptions when preventDefault() would be fired anyway
       * despite the preventDefault option value.
       *
       * This is a pretty powerful option, if you don't want to preventDefault() on
       * all elements with formfield class name for example, you could pass the
       * following:
       *
       *  preventDefaultException: { className: /(^|\s)formfield(\s|$)/ }
       *
       * Default: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }.
       */
      preventDefaultException?: PreventDefaultExceptionOptions|RegExp[];

      /**
       * When you resize the window iScroll has to recalculate elements position and
       * dimension. This might be a pretty daunting task for the poor little fella.
       * To give it some rest the polling is set to 60 milliseconds.
       *
       * By reducing this value you get better visual effect but the script becomes
       * more aggressive on the CPU. The default value seems a good compromise.
       *
       * Default: 60
       */
      resizePolling?: number;

      /**
       * Set this to true to activate keyboard (and remote controls) interaction.
       * See the Key bindings section below for more information.
       *
       * Default: false
       */
      keyBindings?: boolean|KeyBindingsOptions;

      /**
       * Meaningful when mouse wheel support is activated, in which case it just
       * inverts the scrolling direction. (ie. going down scrolls up and vice-versa).
       *
       * Default: false
       */
      invertWheelDirection?: boolean;

      /**
       * Listen to the mouse wheel event.
       *
       * Default: false
       */
      mouseWheel?: boolean;

      /**
       * Set the speed of the mouse wheel.
       *
       * Default: 20
       */
      mouseWheelSpeed?: number;

      /**
       * As we mentioned in the Basic features section there's only one thing that
       * you got to do to activate the scrollbars in all their splendor, and that
       * one thing is:
       *
       *  var myScroll = new IScroll('#wrapper', {
         *    scrollbars: true
         *  });
       *
       * Of course the default behavior can be personalized.
       *
       * So you don't like the default scrollbar styling and you think you could do
       * better. Help yourself! iScroll makes dressing the scrollbar a snap. First
       * of all set the scrollbars option to 'custom':
       *
       *  var myScroll = new IScroll('#wrapper', {
         *    scrollbars: 'custom'
         *  });
       *
       * Then use the following CSS classes to style the little bastards.
       *
       *  .iScrollHorizontalScrollbar, this is applied to the horizontal container.
       *    The element that actually hosts the scrollbar indicator.
       *  .iScrollVerticalScrollbar, same as above but for the vertical container.
       *  .iScrollIndicator, the actual scrollbar indicator.
       *  .iScrollBothScrollbars, this is added to the container elements when both
       *    scrollbars are shown. Normally just one (horizontal or vertical) is visible.
       *
       * The styled scrollbars demo should make things clearer than my lousy
       * explanation.
       *
       * If you set resizeScrollbars: false you could make the scrollbar of a fixed
       * size, otherwise it would be resized based on the scroller length.
       *
       * Please keep reading to the following section for a revelation that will
       * shake your world.
       *
       * Default: false
       */
      scrollbars?: boolean|'custom';

      /**
       * When not in use the scrollbar fades away. Leave this to false to spare
       * resources.
       *
       * Default: false
       */
      fadeScrollbars?: boolean;

      /**
       * The scrollbar becomes draggable and user can interact with it.
       *
       * Default: false
       */
      interactiveScrollbars?: boolean;

      /**
       * The scrollbar size changes based on the proportion between the wrapper and
       * the scroller width/height. Setting this to false makes the scrollbar a
       * fixed size. This might be useful in case of custom styled scrollbars (see
       * below).
       *
       * Default: true
       */
      resizeScrollbars?: boolean;

      /**
       * When scrolling outside of the boundaries the scrollbar is shrunk by a small
       * amount.
       *
       * Valid values are: 'clip' and 'scale'.
       *
       * 'clip' just moves the indicator outside of its container, the impression is
       * that the scrollbar shrinks but it is simply moving out of the screen. If
       * you can live with the visual effect this option immensely improves overall
       * performance.
       *
       * 'scale' turns off useTransition hence all animations are served with
       * requestAnimationFrame. The indicator is actually varied in size and the end
       * result is nicer to the eye.
       *
       * Default: false
       */
      shrinkScrollbars?: boolean|'clip'|'scale';

      /**
       * All the scrollbar options above are in reality just wrappers to the low
       * level indicators option.
       */
      indicators?: IndicatorsOptions;

      /**
       * The simplest snap config is as follow:
       *
       *  var myScroll = new IScroll('#wrapper', {
         *    snap: true
         *  });
       *
       * This would automatically split the scroller into pages the size of the
       * container.
       *
       * snap also takes a string as a value. The string will be the selector to the
       * elements the scroller will be snapped to. So the following
       *
       *  var myScroll = new IScroll('#wrapper', {
         *    snap: 'li'
         *  });
       *
       * would snap to each and every LI tag.
       *
       * To help you navigate through the snap points iScroll grants access to a
       * series of interesting methods.
       */
      snap?: boolean|string;

      /**
       * Set this to true to activate zoom.
       *
       * Default: false
       */
      zoom?: boolean;

      /**
       * Maximum zoom level.
       *
       * Default: 4
       */
      zoomMax?: number;

      /**
       * Minimum zoom level.
       *
       * Default: 1
       */
      zoomMin?: number;

      /**
       * Starting zoom level.
       *
       * Default: 1
       */
      zoomStart?: number;

      /**
       * Wheel action can be set to 'zoom' to have the wheel regulate the zoom level
       * instead of scrolling position.
       *
       * Default: undefined (ie: the mouse wheel scrolls)
       *
       * To sum up, a nice zoom config would be:
       *
       *  myScroll = new IScroll('#wrapper', {
         *    zoom: true,
         *    mouseWheel: true,
         *    wheelAction: 'zoom'
         *  });
       */
      wheelAction?: 'zoom';

      // The following options are used for patch old versions, and no comments
      /** @deprecated */
      x?: number;
      /** @deprecated */
      y?: number;
      /** @deprecated */
      bounceLock?: boolean;
      /** @deprecated */
      lockDirection?: boolean;
      /** @deprecated */
      checkDOMChanges?: boolean;
      /** @deprecated */
      handleClick?: boolean;

      // Scrollbar
      /** @deprecated */
      hScrollbar?: boolean;
      /** @deprecated */
      vScrollbar?: boolean;
      /** @deprecated */
      fixedScrollbar?: boolean;
      /** @deprecated */
      hideScrollbar?: boolean;
      /** @deprecated */
      scrollbarClass?: string;

      // Zoom
      /** @deprecated */
      doubleTapZoom?: number;
      /** @deprecated */
      snapThreshold?: number;

      // New in IScroll 5?
      /** @deprecated */
      resizeIndicator?: boolean;
      /** @deprecated */
      releaseScroll?: boolean;
      /** @deprecated */
      directionLockThreshold?: number;
    }

    interface PreventDefaultExceptionOptions {
      className?: RegExp;
      tagName?: RegExp;
    }

    interface EasingOptions {
      style: string;
      fn(k: number): number;
    }

    interface KeyBindingsOptions {
      pageUp?: number|string;
      pageDown?: number|string;
      end?: number|string;
      home?: number|string;
      left?: number|string;
      up?: number|string;
      right?: number|string;
      down?: number|string;
    }

    interface IndicatorsOptions {
      /**
       * This is a mandatory parameter which holds a reference to the scrollbar
       * container element. The first child inside the container will be the
       * indicator. Note that the scrollbar can be anywhere on your document, it
       * doesn't need to be inside the scroller wrapper. Do you start perceiving the
       * power of such tool?
       *
       * Valid syntax would be:
       *  indicators: {
         *    el: document.getElementById('indicator')
         *  }
       *
       * Or simply:
       *
       *  indicators: {
         *    el: '#indicator'
         *  }
       */
      el: string|HTMLElement;

      /**
       * This tells the indicator to ignore the boundaries imposed by its container.
       * Since we can alter the speed ratio of the scrollbar, it is useful to just
       * let the scrollbar go. Say you want the indicator to go twice as fast as the
       * scroller, it would reach the end of its run very quickly. This option is
       * used for parallax scrolling.
       *
       * Default: false
       */
      ignoreBoundaries?: boolean;

      /**
       * To which axis the indicator listens to. It can be just one or both.
       *
       * Default: true
       */
      listenX?: boolean;
      listenY?: boolean;

      /**
       * The speed the indicator moves in relation to the main scroller size. By
       * default this is set automatically. You rarely need to alter this value.
       *
       * Default: 0
       */
      speedRatioX?: number;
      speedRatioY?: number;

      /**
       * These are the same options we explored in the scrollbars section, I'm not
       * going to insult your intelligence and repeat them here.
       *
       * Do not cross the streams. It would be bad! Do not mix the scrollbars syntax
       * (options.scrollbars, options.fadeScrollbars, options.interactiveScrollbars,
       * ...) with the indicators! Use one or the other.
       *
       * Have a look at the minimap demo to get a glance at the power of the
       * indicators option.
       *
       * The wittiest of you would have noticed that indicators is actually plural...
       * Yes, exactly, passing an array of objects you can have a virtually infinite
       * number of indicators. I don't know what you may need them for, but hey! who
       * am I to argue about your scrollbar preferences?
       */
      fade?: boolean;
      interactive?: boolean;
      resize?: boolean;
      shrink?: boolean;
    }

    interface Position {
      x: number;
      y: number;
    }

    interface IScrollEvent {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      currentPage: number;
    }

    interface Momentum {
      destination: number;
      duration: number;
    }

    interface StyleProperties {
      transform: string;
      transitionTimingFunction: string;
      transitionDelay: string;
      transitionOrigin: string;
      touchAction: string;
    }

    interface DOMOffset {
      left: number;
      top: number;
    }

    interface EventType {
      touchstart: number;
      touchmove: number;
      touchend: number;

      mousedown: number;
      mousemove: number;
      mouseup: number;

      pointerdown: number;
      pointermove: number;
      pointerup: number;

      MSPointerDown: number;
      MSPointerMove: number;
      MSPointerUp: number;
    }

    interface EaseInstances {
      quadratic: EasingOptions;
      circular: EasingOptions;
      back: EasingOptions;
      bounce: EasingOptions;
      elastic: EasingOptions;
    }

    interface DOMRect {
      top: number;
      left: number;
      width: number;
      height: number;
    }

    interface Utils {
      getTime(): number;
      extend(target: any, source: any): void;
      addEvent(
        el: EventTarget, type: string,
        fn: (event: Event) => void,
        capture?: boolean,
      ): void;
      removeEvent(
        el: EventTarget, type: string,
        fn: (event: Event) => void,
        capture?: boolean,
      ): void;
      prefixPointerEvent(pointerEvent: string): string;
      momentum(
        current: number, start: number, time: number,
        lowerMargin: number, wrapperSize: number, deceleration: number,
      ): Momentum;
      hasTransform: boolean;
      hasPerspective: boolean;
      hasTouch: boolean;
      hasPointer: boolean;
      hasTransition: boolean;
      isBadAndroid: boolean;
      style: StyleProperties;
      hasClass(el: HTMLElement, clazz: string): boolean;
      addClass(el: HTMLElement, clazz: string): void;
      removeClass(el: HTMLElement, clazz: string): void;
      offset(el: HTMLElement): DOMOffset;
      preventDefaultException(el: HTMLElement, exceptions: RegExp[]): boolean;
      eventType: EventType;
      ease: EaseInstances;
      tap(event: Event, eventName: string): void;
      click(event: Event): void;
      getTouchAction(
        eventPassthrough: 'vertical'|'horizontal',
        addPinch: boolean
      ): 'none'|'pan-y'|'pan-x'|'pinch-zoom';
      getRect(el: HTMLElement): DOMRect;
    }

    var utils: Utils;
  }

  class IScroll {
    version: string;

    x: number;
    y: number;

    constructor(wrapper: string|HTMLElement, options?: IScroll.IScrollOptions);

    resetPosition(time: number): boolean;

    getComputedPosition(): IScroll.Position;

    disable(): void;

    enable(): void;

    /**
     * iScroll needs to know the exact dimensions of both the wrapper and the
     * scroller. They are computed at start up but if your elements change in
     * size, we need to tell iScroll that you are messing with the DOM.
     *
     * This is achieved by calling the refresh method with the right timing. Please
     * follow me closely, understanding this will save you hours of frustration.
     *
     * Every time you touch the DOM the browser renderer repaints the page. Once
     * this repaint has happened we can safely read the new DOM properties. The
     * repaint phase is not instantaneous and it happens only at the end of the
     * scope that triggered it. That's why we need to give the renderer a little
     * rest before refreshing the iScroll.
     *
     * To ensure that javascript gets the updated properties you should defer the
     * refresh with something like this:
     *
     *  ajax('page.php', onCompletion);
     *  function onCompletion () {
         *    // Update here your DOM
         *    setTimeout(function () {
         *      myScroll.refresh();
         *    }, 0);
         *  };
     *
     * We have placed the refresh() call into a zero timeout. That is likely all
     * you need to correctly refresh the iScroll boundaries. There are other
     * ways to wait for the repaint, but the zero-timeout has proven pretty solid.
     */
    refresh(): void;

    on(
      event: 'beforeScrollStart'|'scrollCancel'|'scrollStart'|'scroll'|'scrollEnd'|'flick'|'zoomStart'|'zoomEnd'|string,
      callback: (event: IScroll.IScrollEvent) => void,
    ): void;

    off(event: string, callback: (event: IScroll.IScrollEvent) => void): void;

    handleEvent(event: Event): void;

    reorderInfinite(): void;

    updateContent(): void;

    updateCache(): void;

    /**
     * The public destroy() method can be used to free some memory when the iScroll
     * is not needed anymore.
     */
    destroy(): void;

    /**
     * Say your iScroll instance resides into the myScroll variable. You can easily
     * scroll to any position with the following syntax:
     *
     *  myScroll.scrollTo(0, -100);
     *
     * That would scroll down by 100 pixels. Remember: 0 is always the top left
     * corner. To scroll you have to pass negative numbers.
     *
     * time and easing are optional. They regulates the duration (in ms) and the
     * easing function of the animation respectively.
     *
     * The easing functions are available in the IScroll.utils.ease object. For
     * example to apply a 1 second elastic easing you'd do:
     *
     *  myScroll.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic);
     *
     * The available options are: quadratic, circular, back, bounce, elastic.
     *
     * @param x
     * @param y
     * @param time
     * @param easing
     */
    scrollTo(x: number, y: number, time?: number, easing?: IScroll.EasingOptions): void;

    /**
     * Same as above but X and Y are relative to the current position.
     *
     *  myScroll.scrollBy(0, -10);
     *
     * Would scroll 10 pixels down. If you are at -100, you'll end up at -110.
     *
     * @param x
     * @param y
     * @param time
     * @param easing
     */
    scrollBy(x: number, y: number, time?: number, easing?: IScroll.EasingOptions): void;

    /**
     * You're gonna like this. Sit tight.
     *
     * The only mandatory parameter is el. Pass an element or a selector and iScroll
     * will try to scroll to the top/left of that element.
     *
     * time is optional and sets the animation duration.
     *
     * offsetX and offsetY define an offset in pixels, so that you can scroll to that
     * element plus a the specified offset. Not only that. If you set them to true
     * the element will be centered on screen. Refer to the scroll to element example.
     *
     * easing works the same way as per the scrollTo method.
     *
     * @param el
     * @param time
     * @param offsetX
     * @param offsetY
     * @param easing
     */
    scrollToElement(
      el: string|HTMLElement,
      time?: number,
      offsetX?: number,
      offsetY?: number,
      easing?: IScroll.EasingOptions,
    ): void;

    /**
     * x and y represent the page number you want to scroll to in the horizontal or
     * vertical axes (yeah, it's the plural of axis, I checked). If the scroller in
     * mono-dimensional, just pass 0 to the axis you don't need.
     *
     * time is the duration of the animation, easing the easing function used to
     * scroll to the point. Refer to the option.bounceEasing in the Advanced
     * features. They are both optional.
     *
     *  myScroll.goToPage(10, 0, 1000);
     *
     * This would scroll to the 10th page on the horizontal axis in 1 second.
     *
     * @param x
     * @param y
     * @param time
     * @param easing
     */
    goToPage(x: number, y: number, time?: number, easing?: IScroll.EasingOptions): void;

    /**
     * Go to the next page based on current position.
     */
    next(): void;

    /**
     * Go to the previous page based on current position.
     */
    prev(): void;

    /**
     * Juicy method that lets you zoom programmatically.
     *
     * scale is the zoom factor.
     *
     * x and y the focus point, aka the center of the zoom. If not specified, the
     * center of the screen will be used.
     *
     * time is the duration of the animation in milliseconds (optional).
     *
     * @param scale
     * @param x
     * @param y
     * @param time
     */
    zoom(scale: number, x?: number, y?: number, time?: number): void;

    // The following methods are used for patch old versions.
    /** @deprecated */
    stop(): void;

    /** @deprecated */
    isReady(): boolean;
  }

  export = IScroll;
}

declare module 'iscroll/build/iscroll-infinite' {
  import IScroll = require('iscroll');
  class IScrollInfinite extends IScroll {}
  export = IScrollInfinite;
}

declare module 'iscroll/build/iscroll-lite' {
  import IScroll = require('iscroll');
  class IScrollLite extends IScroll {}
  export = IScrollLite;
}

declare module 'iscroll/build/iscroll-probe' {
  import IScroll = require('iscroll');
  class IScrollProbe extends IScroll {}
  export = IScrollProbe;
}

declare module 'iscroll/build/iscroll-zoom' {
  import IScroll = require('iscroll');
  class IScrollZoom extends IScroll {}
  export = IScrollZoom;
}
