// Type definitions for react-flip-move 2.9
// Project: https://github.com/joshwcomeau/react-flip-move
// Definitions by: Joey Hain <https://github.com/jmhain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, ReactElement } from "react";

export as namespace FlipMove;
export = FlipMove;

declare class FlipMove extends Component<FlipMove.FlipMoveProps> { }

declare namespace FlipMove {
    type AnimationPreset = "elevator" | "fade" | "accordionVertical" | "accordionHorizontal" | "none";

    interface Animation {
        from: Partial<CSSStyleDeclaration>;
        to: Partial<CSSStyleDeclaration>;
    }

    interface FlipMoveProps {
        className?: string;

        /**
         * Any valid CSS3 timing function (eg. "linear", "ease-in", "cubic-bezier(1, 0, 0, 1)").
         *
         * @default "ease-in-out"
         */
        easing?: string;

        /**
         * The length, in milliseconds, that the transition ought to take.
         *
         * @default 350
         */
        duration?: number;

        /**
         * The length, in milliseconds, to wait before the animation begins.
         *
         * @default 0
         */
        delay?: number;

        /**
         * The length, in milliseconds, to be added to the duration of each subsequent element.
         *
         * For example, if you are animating 4 elements with a `duration` of 200 and a `staggerDurationBy` of 20:
         *
         * - The first element will take 200ms to transition.
         * - The second element will take 220ms to transition.
         * - The third element will take 240ms to transition.
         * - The fourth element will take 260ms to transition.
         *
         * This effect is great for "humanizing" transitions and making them feel less robotic.
         */
        staggerDurationBy?: number;

        /**
         * The length, in milliseconds, to be added to the delay of each subsequent element.
         *
         * For example, if you are animating 4 elements with a `delay` of 0 and a `staggerDelayBy` of 20:
         *
         * - The first element will start transitioning immediately.
         * - The second element will start transitioning after 20ms.
         * - The third element will start transitioning after 40ms.
         * - The fourth element will start transitioning after 60ms.
         *
         * Similarly to staggerDurationBy, This effect is great for "humanizing" transitions and making them feel less
         * robotic.
         *
         * **Protip**: You can make elements animate one-at-a-time by using an identical duration and staggerDelayBy.
         *
         * @default 0
         */
        staggerDelayBy?: number;

        /**
         * Control the appear animation that runs when the component mounts. Works identically to enterAnimation below, but
         * only fires on the initial children.
         */
        appearAnimation?: AnimationPreset | Animation | boolean;

        /**
         * Control the onEnter animation that runs when new items are added to the DOM.
         *
         * Accepts several types:
         *
         * **String:** You can enter one of the following presets to select that as your enter animation:
         *
         *   - `elevator` (default)
         *   - `fade`
         *   - `accordionVertical`
         *   - `accordionHorizontal`
         *   - `none`
         *
         * **Boolean:** You can enter `false` to disable the enter animation, or `true` to select the default enter animation (elevator).
         *
         * **Object:** For fully granular control, you can pass in an object that contains the styles you'd like to animate.
         *
         * It requires two keys: `from` and `to`. Each key holds an object of CSS properties. You can supply any valid
         * camelCase CSS properties, and flip-move will transition between the two, over the course of the specified
         * `duration`.
         *
         * Example:
         *
         *     const customEnterAnimation = {
         *       from: { transform: 'scale(0.5, 1)' },
         *       to:   { transform: 'scale(1, 1)' }
         *     };
         *
         *     <FlipMove enterAnimation={customEnterAnimation}>
         *          {renderChildren()}
         *     </FlipMove>
         *
         * @default "elevator"
         */
        enterAnimation?: AnimationPreset | Animation | boolean;

        /**
         * Control the onLeave animation that runs when new items are removed from the DOM.
         *
         * This property functions identically to `enterAnimation`.
         *
         * @default "elevator"
         */
        leaveAnimation?: AnimationPreset | Animation | boolean;

        /**
         * Do not collapse container height until after leaving animations complete.
         *
         * When false, children are immediately removed from the DOM flow as they animate away. Setting this value to true
         * will maintain the height of the container until after their leaving animation completes.
         *
         * @default false
         */
        maintainContainerHeight?: boolean;

        /**
         * A callback to be invoked **once per child element** at the start of the animation.
         *
         * In general, it is advisable to ignore the domNode argument and work with the childElement. The domNode is just
         * an escape hatch for doing complex things not otherwise possible.
         *
         * @param childElement  A reference to the React Element being animated.
         * @param domNode       A reference to the unadulterated DOM node being animated.
         */
        onStart?(childElement: ReactElement<any>, domNode: HTMLElement): void;

        /**
         * A callback to be invoked **once per child element** at the end of the animation.
         *
         * In general, it is advisable to ignore the `domNode` argument and work with the `childElement`. The `domNode` is
         * just an escape hatch for doing complex things not otherwise possible.
         *
         * @param childElement  A reference to the React Element being animated.
         * @param domNode       A reference to the unadulterated DOM node being animated.
         */
        onFinish?(childElement: ReactElement<any>, domNode: HTMLElement): void;

        /**
         * A callback to be invoked **once per group** at the start of the animation.
         *
         * The callback arguments are similar to the ones provided for onStart, except we provide an array of the elements
         * and nodes. The order of both arguments is guaranteed; this means you can use a zipping function like lodash's
         * .zip to get pairs of element/node, if needed.
         *
         * In general, it is advisable to ignore the `domNodes` argument and work with the `childElements` The `domNodes`
         *
         * are just an escape hatch for doing complex things not otherwise possible.
         *
         * @param childElements An array of the references to the React Element(s) being animated.
         * @param domNodes      An array of the references to the unadulterated DOM node(s) being animated.
         */
        onStartAll?(childElements: Array<ReactElement<any>>, domNodes: HTMLElement[]): void;

        /**
         * A callback to be invoked **once per group** at the end of the animation.
         *
         * The callback arguments are similar to the ones provided for onFinish, except we provide an array of the elements
         * and nodes. The order of both arguments is guaranteed; this means you can use a zipping function like lodash's
         * .zip to get pairs of element/node, if needed.
         *
         * In general, it is advisable to ignore the `domNodes` argument and work with the `childElements` The `domNodes`
         * are just an escape hatch for doing complex things not otherwise possible.
         *
         * @param childElements An array of the references to the React Element(s) being animated.
         * @param domNodes      An array of the references to the unadulterated DOM node(s) being animated.
         */
        onFinishAll?(childElements: Array<ReactElement<any>>, domNodes: HTMLElement[]): void;

        /**
         * Flip Move wraps your children in a container element. By default, this element is a div, but you may wish to
         * provide a custom HTML element (for example, if your children are list items, you may wish to set this to ul).
         *
         * Any valid HTML element type is accepted, but peculiar things may happen if you use an unconventional element.
         *
         * @default "div"
         */
        typeName?: string;

        /**
         * Sometimes, you may wish to temporarily disable the animations and have the normal behaviour resumed. Setting this
         * flag to true skips all animations.
         *
         * @default false
         */
        disableAllAnimations?: boolean;

        /**
         * This function is called with a DOM node as the only argument. It should return an object as specified by the
         * getBoundingClientRect() spec.
         *
         * For normal usage of FlipMove you won't need this. An example of usage is when FlipMove is used in a container
         * that is scaled using CSS. You can correct the values from getBoundingClientRect by using this prop.
         */
        getPosition?(node: HTMLElement): ClientRect;
    }
}
