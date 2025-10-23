import * as React from "react";
import { DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

declare namespace NaturalDragAnimation {
    interface NaturalDragAnimationType {
        /**
         * Pass `snapshot` from `Draggable`.
         */
        snapshot: DraggableStateSnapshot;

        /**
         * In most cases just pass `provided.draggableProps.style` from `Draggable`.
         * `NaturalDragAnimation` patches `transform` from it.
         */
        style: DraggingStyle | NotDraggingStyle | undefined;

        /**
         * Use it to define fade speed of end rotation animation.
         * Must be 0 < `animationRotationFade` < 1.
         *
         * @default 0.9
         */
        animationRotationFade?: number;

        /**
         * Use it to define rotation multiplier.
         *
         * @default 1.3
         */
        rotationMultiplier?: number;

        /**
         * @default x => x / (1 + Math.abs(x))
         */
        sigmoidFunction?: (x: number) => number;

        children: (style: React.CSSProperties) => React.ReactNode;
    }
}

declare class NaturalDragAnimation extends React.Component<NaturalDragAnimation.NaturalDragAnimationType> {}

export = NaturalDragAnimation;
