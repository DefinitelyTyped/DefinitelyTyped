declare module "react-native-simple-animations" {
    import { ReactNode } from 'react';
    import { EasingFunction, ViewStyle } from 'react-native';
    import React from 'react';

    interface SimpleAnimationProps {
        /**
         * Whether the child component will animate in or out
         * @default "in"
         */
        aim?: 'in' | 'out';

        /**
         * When true the child component will animate
         * @default true
         */
        animate?: boolean;

        /**
         * When true the child component will animate if any of the props change
         * @default false
         */
        animateOnUpdate?: boolean;

        /**
         * The length in milliseconds the component will wait before animating
         * @default 0
         */
        delay?: number;

        /**
         * When movementType is set, this is the direction the child component will move
         */
        direction?: 'down' | 'left' | 'right' | 'up';

        /**
         * When movementType is set, this is the distance the child component will move
         * @default 0
         */
        distance?: number;

        /**
         * The length in milliseconds the animation will last
         * @default 1000
         */
        duration?: number;

        /**
         * The easing function to define animation curve
         * @default Easing.out(Easing.exp)
         */
        easing?: EasingFunction;

        /**
         * When true the child component will fade in or out depending on the aim
         * @default true
         */
        fade?: boolean;

        /**
         * Amount of friction when movementType is "spring" or staticType is "bounce"
         * @default 5
         */
        friction?: number;

        /**
         * Type of movement animation when direction and distance are set
         */
        movementType?: 'slide' | 'spring';

        /**
         * Type of static animation
         */
        staticType?: 'bounce' | 'zoom';

        /**
         * Additional styles applied to the component
         */
        style?: ViewStyle;

        /**
         * Amount of tension when movementType is "spring" or staticType is "bounce"
         * @default 100
         */
        tension?: number;

        /**
         * When true the animation is sent to native before starting
         * @default true
         */
        useNativeDriver?: boolean;

        /**
         * Child components to animate
         */
        children?: ReactNode;
    }
    export class SimpleAnimation extends React.Component<SimpleAnimationProps> {}
}
