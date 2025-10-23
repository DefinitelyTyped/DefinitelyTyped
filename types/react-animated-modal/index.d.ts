import * as React from "react";

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
    children?: React.ReactNode;
    closemodal: () => void;
    visible: boolean;
    /** @default 'flipInX' */
    type?: AnimationTypes | undefined;
}

export const Modal: React.FunctionComponent<ModalProps>;

export default Modal;
