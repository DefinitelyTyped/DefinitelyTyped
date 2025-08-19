import NaturalDragAnimation from "natural-drag-animation-rbdnd";
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

// Without optional props
{
    <Draggable draggableId="draggableId" index={0}>
        {(provided, snapshot) => (
            <NaturalDragAnimation
                style={provided.draggableProps.style}
                snapshot={snapshot}
            >
                {(style) => {
                    // $ExpectedType CSSProperties
                    style;
                    return <div />;
                }}
            </NaturalDragAnimation>
        )}
    </Draggable>;
}

// With optional props
{
    <Draggable draggableId="draggableId" index={0}>
        {(provided, snapshot) => (
            <NaturalDragAnimation
                style={provided.draggableProps.style}
                snapshot={snapshot}
                animationRotationFade={0.8}
                rotationMultiplier={1.8}
                sigmoidFunction={x => x / (1 + Math.abs(x))}
            >
                {(style) => {
                    // $ExpectedType CSSProperties
                    style;
                    return <div />;
                }}
            </NaturalDragAnimation>
        )}
    </Draggable>;
}
