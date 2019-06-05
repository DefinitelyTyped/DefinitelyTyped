import * as React from 'react';
import { Draggable, Droppable, DragComponent, DragState } from 'react-dragtastic';

class DraggableZone extends React.Component {
  render() {
    return (
      <Draggable id="unique-id" type="apple">
        {dragState => <div {...dragState.events}>I'm a draggable zone</div>}
      </Draggable>
    );
  }
}

class DroppableZone extends React.Component {
  render() {
    return (
      <Droppable accepts="apple">
        {dragState => <div {...dragState.events}>I'm a droppable zone</div>}
      </Droppable>
    );
  }
}

class DragComponentWrapper extends React.Component {
  render() {
    return (
      <DragComponent for="unique-id">
        {dragState => (
          <div
            style={{
              position: "fixed",
              left: dragState.x,
              top: dragState.y,
              pointerEvents: "none"
            }}
          >
            I will render when my Draggable zone is activated
          </div>
        )}
      </DragComponent>
    );
  }
}

class CompWithDragState extends React.Component {
  render() {
    return (
      <DragState>
        {dragState => (
          <div style={{ background: dragState.isDragging ? "red" : "blue" }}>
            I always render, and have access to the global dragState.
          </div>
        )}
      </DragState>
    );
  }
}
