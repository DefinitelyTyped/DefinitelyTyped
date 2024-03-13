export type CSSValue = string | number;

export interface Keyframe {
    [property: string]: CSSValue;
}

export interface Animation {
    [keyframe: string]: Keyframe;
}

export function merge(primary: Animation, secondary: Animation): Animation;

export const bounceOut: Animation;
export const bounce: Animation;
export const bounceIn: Animation;
export const bounceInDown: Animation;
export const bounceInLeft: Animation;
export const bounceInRight: Animation;
export const bounceInUp: Animation;
export const bounceOutDown: Animation;
export const bounceOutLeft: Animation;
export const bounceOutRight: Animation;
export const bounceOutUp: Animation;
export const fadeIn: Animation;
export const fadeInDown: Animation;
export const fadeInDownBig: Animation;
export const fadeInLeft: Animation;
export const fadeInLeftBig: Animation;
export const fadeInRight: Animation;
export const fadeInRightBig: Animation;
export const fadeInUp: Animation;
export const fadeInUpBig: Animation;
export const fadeOut: Animation;
export const fadeOutDown: Animation;
export const fadeOutDownBig: Animation;
export const fadeOutLeft: Animation;
export const fadeOutLeftBig: Animation;
export const fadeOutRight: Animation;
export const fadeOutRightBig: Animation;
export const fadeOutUp: Animation;
export const fadeOutUpBig: Animation;
export const flash: Animation;
export const flip: Animation;
export const flipInX: Animation;
export const flipInY: Animation;
export const flipOutX: Animation;
export const flipOutY: Animation;
export const headShake: Animation;
export const hinge: Animation;
export const jello: Animation;
export const lightSpeedIn: Animation;
export const lightSpeedOut: Animation;
export const pulse: Animation;
export const rollIn: Animation;
export const rollOut: Animation;
export const rotateIn: Animation;
export const rotateInDownLeft: Animation;
export const rotateInDownRight: Animation;
export const rotateInUpLeft: Animation;
export const rotateInUpRight: Animation;
export const rotateOut: Animation;
export const rotateOutDownLeft: Animation;
export const rotateOutDownRight: Animation;
export const rotateOutUpLeft: Animation;
export const rotateOutUpRight: Animation;
export const rubberBand: Animation;
export const shake: Animation;
export const slideInDown: Animation;
export const slideInLeft: Animation;
export const slideInRight: Animation;
export const slideInUp: Animation;
export const slideOutDown: Animation;
export const slideOutLeft: Animation;
export const slideOutRight: Animation;
export const slideOutUp: Animation;
export const swing: Animation;
export const tada: Animation;
export const wobble: Animation;
export const zoomIn: Animation;
export const zoomInDown: Animation;
export const zoomInLeft: Animation;
export const zoomInRight: Animation;
export const zoomInUp: Animation;
export const zoomOut: Animation;
export const zoomOutDown: Animation;
export const zoomOutLeft: Animation;
export const zoomOutRight: Animation;
export const zoomOutUp: Animation;
