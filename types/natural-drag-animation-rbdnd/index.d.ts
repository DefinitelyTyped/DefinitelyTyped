import * as React from "react";
import { DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

export default NaturalDragAnimation;

interface NaturalDragAnimationType {
    snapshot: DraggableStateSnapshot;
    style: DraggingStyle | NotDraggingStyle | undefined;
    animationRotationFade?: number;
    rotationMultiplier?: number;
    sigmoidFunction?: (x: number) => number;
    children: (style: React.CSSProperties) => React.ReactNode;
}

declare class NaturalDragAnimation extends React.Component<NaturalDragAnimationType> {}
