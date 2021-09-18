// Type definitions for react-animated-modal 1.1
// Project: https://github.com/morfsys/react-animated-modal
// Definitions by: Manish Kumar <https://github.com/manishprivet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type AnimationTypes =
    | "pulse"
    | "rubberBand"
    | "shake"
    | "swing"
    | "tada"
    | "wobble"
    | "jello"
    | "bounceIn"
    | "bounceInDown"
    | "bounceInLeft"
    | "bounceInRight"
    | "bounceInUp"
    | "fadeIn"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeInUp"
    | "flip"
    | "flipInX"
    | "flipInY"
    | "lightSpeedIn"
    | "rotateIn"
    | "rotateInDownLeft"
    | "rotateInDownRight"
    | "rotateInUpLeft"
    | "rotateInUpRight"
    | "slideInUp"
    | "slideInDown"
    | "slideInLeft"
    | "slideInRight"
    | "zoomIn"
    | "zoomInDown"
    | "zoomInLeft"
    | "zoomInRight"
    | "zoomInUp"
    | "hinge"
    | "jackInTheBox"
    | "rollIn"
    | "bounce"
    | "flash";
    
export interface ModalProps {
    closemodal: () => any;
    visible: boolean;
    type: AnimationTypes;
}

export const Modal: React.FunctionComponent<ModalProps>;

export default Modal;