import * as React from "react";
import { ContextComponent, ContextComponentClass, DragDropContext } from "react-dnd";
import TestBackend from "react-dnd-test-backend";

const Component = DragDropContext(TestBackend)(() => <div/>);
<Component ref={(instance: ContextComponent<{}, {}>) => {
    const backend = instance.getManager().getBackend() as TestBackend;
    backend.simulateBeginDrag(["1"]);
    backend.simulateBeginDrag(["1"], { foo: "bar" });

    backend.simulateHover(["2"]);
    backend.simulateHover(["2"], { foo: "bar" });

    backend.simulateDrop();
    backend.simulateEndDrag();
    backend.simulatePublishDragSource();
}}/>;
