// // Type definitions for react-animations 1.0
// Project: https://github.com/FormidableLabs/react-animations
// Definitions by: Matheus Battirola <https://github.com/mcbattirola>
//                 Caroline Aquistapace <http://github.com/aquistapace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSObject extends CSSProperties, CSSPseudos {
    [key: string]: CSSObject | string | number | undefined;
}

export type CSSKeyframes = object & { [key: string]: CSSObject };

export function merge(primary: CSSKeyframes, secondary: CSSKeyframes): CSSKeyframes;

export const bounceOut: CSSKeyframes
export const bounce: CSSKeyframes
export const bounceIn: CSSKeyframes
export const bounceInDown: CSSKeyframes
export const bounceInLeft: CSSKeyframes
export const bounceInRight: CSSKeyframes
export const bounceInUp: CSSKeyframes
export const bounceOutDown: CSSKeyframes
export const bounceOutLeft: CSSKeyframes
export const bounceOutRight: CSSKeyframes
export const bounceOutUp: CSSKeyframes
export const fadeIn: CSSKeyframes
export const fadeInDown: CSSKeyframes
export const fadeInDownBig: CSSKeyframes
export const fadeInLeft: CSSKeyframes
export const fadeInLeftBig: CSSKeyframes
export const fadeInRight: CSSKeyframes
export const fadeInRightBig: CSSKeyframes
export const fadeInUp: CSSKeyframes
export const fadeInUpBig: CSSKeyframes
export const fadeOut: CSSKeyframes
export const fadeOutDown: CSSKeyframes
export const fadeOutDownBig: CSSKeyframes
export const fadeOutLeft: CSSKeyframes
export const fadeOutLeftBig: CSSKeyframes
export const fadeOutRight: CSSKeyframes
export const fadeOutRightBig: CSSKeyframes
export const fadeOutUp: CSSKeyframes
export const fadeOutUpBig: CSSKeyframes
export const flash: CSSKeyframes
export const flip: CSSKeyframes
export const flipInX: CSSKeyframes
export const flipInY: CSSKeyframes
export const flipOutX: CSSKeyframes
export const flipOutY: CSSKeyframes
export const headShake: CSSKeyframes
export const hinge: CSSKeyframes
export const jello: CSSKeyframes
export const lightSpeedIn: CSSKeyframes
export const lightSpeedOut: CSSKeyframes
export const pulse: CSSKeyframes
export const rollIn: CSSKeyframes
export const rollOut: CSSKeyframes
export const rotateIn: CSSKeyframes
export const rotateInDownLeft: CSSKeyframes
export const rotateInDownRight: CSSKeyframes
export const rotateInUpLeft: CSSKeyframes
export const rotateInUpRight: CSSKeyframes
export const rotateOut: CSSKeyframes
export const rotateOutDownLeft: CSSKeyframes
export const rotateOutDownRight: CSSKeyframes
export const rotateOutUpLeft: CSSKeyframes
export const rotateOutUpRight: CSSKeyframes
export const rubberBand: CSSKeyframes
export const shake: CSSKeyframes
export const slideInDown: CSSKeyframes
export const slideInLeft: CSSKeyframes
export const slideInRight: CSSKeyframes
export const slideInUp: CSSKeyframes
export const slideOutDown: CSSKeyframes
export const slideOutLeft: CSSKeyframes
export const slideOutRight: CSSKeyframes
export const slideOutUp: CSSKeyframes
export const swing: CSSKeyframes
export const tada: CSSKeyframes
export const wobble: CSSKeyframes
export const zoomIn: CSSKeyframes
export const zoomInDown: CSSKeyframes
export const zoomInLeft: CSSKeyframes
export const zoomInRight: CSSKeyframes
export const zoomInUp: CSSKeyframes
export const zoomOut: CSSKeyframes
export const zoomOutDown: CSSKeyframes
export const zoomOutLeft: CSSKeyframes
export const zoomOutRight: CSSKeyframes
export const zoomOutUp: CSSKeyframes
