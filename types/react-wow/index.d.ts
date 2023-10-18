import * as React from "react";

export interface ReactWOWProps {
    /**
     * Animation css class.
     * @default animated
     */
    animateClass?: string | undefined;

    /**
     * Animation name.
     * @see https://daneden.github.io/animate.css/
     */
    animation:
        // Attention Seekers
        | "bounce"
        | "flash"
        | "pulse"
        | "rubberBand"
        | "shake"
        | "swing"
        | "tada"
        | "wobble"
        | "jello"
        | // Bouncing Entrances
        "bounceIn"
        | "bounceInDown"
        | "bounceInLeft"
        | "bounceInRight"
        | "bounceInUp"
        | // Bouncing Exits
        "bounceOut"
        | "bounceOutDown"
        | "bounceOutLeft"
        | "bounceOutRight"
        | "bounceOutUp"
        | // Fading Entrances
        "fadeIn"
        | "fadeInDown"
        | "fadeInDownBig"
        | "fadeInLeft"
        | "fadeInLeftBig"
        | "fadeInRight"
        | "fadeInRightBig"
        | "fadeInUp"
        | "fadeInUpBig"
        | // Fading Exits
        "fadeOut"
        | "fadeOutDown"
        | "fadeOutDownBig"
        | "fadeOutLeft"
        | "fadeOutLeftBig"
        | "fadeOutRight"
        | "fadeOutRightBig"
        | "fadeOutUp"
        | "fadeOutUpBig"
        | // Flippers
        "flip"
        | "flipInX"
        | "flipInY"
        | "flipOutX"
        | "flipOutY"
        | // Lightspeed
        "lightSpeedIn"
        | "lightSpeedOut"
        | // Rotating Entrances
        "rotateIn"
        | "rotateInDownLeft"
        | "rotateInDownRight"
        | "rotateInUpLeft"
        | "rotateInUpRight"
        | // Rotating Exits
        "rotateOut"
        | "rotateOutDownLeft"
        | "rotateOutDownRight"
        | "rotateOutUpLeft"
        | "rotateOutUpRight"
        | // Sliding Entrances
        "slideInUp"
        | "slideInDown"
        | "slideInLeft"
        | "slideInRight"
        | // Sliding Exits
        "slideOutUp"
        | "slideOutDown"
        | "slideOutLeft"
        | "slideOutRight"
        | // Zoom Entrances
        "zoomIn"
        | "zoomInDown"
        | "zoomInLeft"
        | "zoomInRight"
        | "zoomInUp"
        | // Zoom Exits
        "zoomOut"
        | "zoomOutDown"
        | "zoomOutLeft"
        | "zoomOutRight"
        | "zoomOutUp"
        | // Specials
        "hinge"
        | "jackInTheBox"
        | "rollIn"
        | "rollOut";

    /**
     * The callback is fired every time an animation is stoped.
     */
    callback?: (() => void) | undefined;

    /**
     * Content you want to apply the animation to.
     */
    children: JSX.Element;

    /**
     * Animation delay.
     */
    delay?: string | undefined;

    /**
     * Disable the animation.
     * @default false
     */
    disabled?: boolean | undefined;

    /**
     * Animation duration.
     */
    duration?: string | undefined;

    /**
     * Animation iteration count.
     */
    iteration?: string | undefined;

    /**
     * Distance to the element when triggering the animation.
     * @default 0
     */
    offset?: number | number[] | undefined;

    /**
     * If your components inside a overflow container, set this to true.
     * @default false
     */
    overflow?: boolean | undefined;

    /**
     * Listen and react to resize event.
     * @default true
     */
    resize?: boolean | undefined;

    /**
     * Listen and react to scroll event.
     * @default true
     */
    scroll?: boolean | undefined;
}

export default class ReactWOW extends React.Component<ReactWOWProps> {}
