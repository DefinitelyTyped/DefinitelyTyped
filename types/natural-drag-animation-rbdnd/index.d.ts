// Type definitions for natural-drag-animation-rbdnd 2.1
// Project: https://github.com/rokborf/natural-drag-animation-rbdnd#readme
// Definitions by: Prajwal Kulkarni <https://github.com/prajwalkulkarni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { DraggingStyle, NotDraggingStyle, DraggableStateSnapshot } from 'react-beautiful-dnd';

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
