import { createDragDropManager } from "dnd-core";
import TouchBackend from "react-dnd-touch-backend";

const context = {};

const dndComponent = createDragDropManager(TouchBackend(), context);
const dndComponentMouseEvents = createDragDropManager(TouchBackend({enableMouseEvents: true}), context);
const dndComponentDelayTouchStart = createDragDropManager(TouchBackend({delayTouchStart: 200}), context);
const dndComponentDelayMouseStart = createDragDropManager(TouchBackend({enableMouseEvents: true, delayMouseStart: 100}), context);
const dndComponentKeyboardEvents = createDragDropManager(TouchBackend({enableKeyboardEvents: true}), context);
const dndComponentOldDelay = createDragDropManager(TouchBackend({delay: 300}), context);
const dndComponentAllCurrentEvents = createDragDropManager(TouchBackend(
    {enableKeyboardEvents: true, enableMouseEvents: true, delayMouseStart: 100, delayTouchStart: 200}), context);
const dndComponentWithScrollAngleRanges = createDragDropManager(TouchBackend(
    { scrollAngleRanges: [{ start: 0, end: 0 }, { start: 0 }, { end: 0 }] }), context);
const dndComponentWithTouchSlop = createDragDropManager(TouchBackend({ touchSlop: 0 }), context);
const dndComponentWithIgnoreContextMenu = createDragDropManager(TouchBackend({ ignoreContextMenu: true }), context);
