import { Component, ReactNode } from "react";
import { EasingFunction, ViewStyle } from "react-native";

export interface SimpleAnimationProps {
    /**
     * Whether the child component will animate in or out
     * @default "in"
     */
    aim?: "in" | "out" | undefined;

    /**
     * When true the child component will animate
     * @default true
     */
    animate?: boolean | undefined;

    /**
     * When true the child component will animate if any of the props change
     * @default false
     */
    animateOnUpdate?: boolean | undefined;

    /**
     * The length in milliseconds the component will wait before animating
     * @default 0
     */
    delay?: number | undefined;

    /**
     * When movementType is set, this is the direction the child component will move
     */
    direction?: "down" | "left" | "right" | "up" | undefined;

    /**
     * When movementType is set, this is the distance the child component will move
     * @default 0
     */
    distance?: number | undefined;

    /**
     * The length in milliseconds the animation will last
     * @default 1000
     */
    duration?: number | undefined;

    /**
     * The easing function to define animation curve
     * @default Easing.out(Easing.exp)
     */
    easing?: EasingFunction | undefined;

    /**
     * When true the child component will fade in or out depending on the aim
     * @default true
     */
    fade?: boolean | undefined;

    /**
     * Amount of friction when movementType is "spring" or staticType is "bounce"
     * @default 5
     */
    friction?: number | undefined;

    /**
     * Type of movement animation when direction and distance are set
     */
    movementType?: "slide" | "spring" | undefined;

    /**
     * Type of static animation
     */
    staticType?: "bounce" | "zoom" | undefined;

    /**
     * Additional styles applied to the component
     */
    style?: ViewStyle | undefined;

    /**
     * Amount of tension when movementType is "spring" or staticType is "bounce"
     * @default 100
     */
    tension?: number | undefined;

    /**
     * When true the animation is sent to native before starting
     * @default true
     */
    useNativeDriver?: boolean | undefined;

    /**
     * Child components to animate
     */
    children?: ReactNode | undefined;
}
export class SimpleAnimation extends Component<SimpleAnimationProps> {}
