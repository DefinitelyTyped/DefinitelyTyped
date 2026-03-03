import { createApp, h } from "vue";
import VueDraggableResizable, {
    AxisType,
    HandleType,
    install,
    VueDraggableResizableProps,
} from "vue-draggable-resizable";

// Test plugin installation
const app = createApp({});
install(app);

// Basic usage
createApp({
    render() {
        return h(VueDraggableResizable, {
            h: 200,
            w: 200,
            x: 100,
            y: 100,
        });
    },
}).mount("#app");

// With all props
createApp({
    render() {
        return h(VueDraggableResizable, {
            active: true,
            axis: "both",
            className: "my-class",
            classNameActive: "my-active",
            classNameDraggable: "my-draggable",
            classNameDragging: "my-dragging",
            classNameHandle: "my-handle",
            classNameResizable: "my-resizable",
            classNameResizing: "my-resizing",
            disableUserSelect: true,
            dragCancel: ".cancel",
            draggable: true,
            dragHandle: ".handle",
            enableNativeDrag: false,
            grid: [10, 10],
            h: 200,
            handles: ["tl", "tr", "br", "bl"],
            lockAspectRatio: true,
            maxHeight: 500,
            maxWidth: 500,
            minHeight: 50,
            minWidth: 50,
            onDrag: (x: number, y: number) => {
                console.log(x, y);
                return true;
            },
            onDragStart: (x: number, y: number) => {
                console.log(x, y);
                return true;
            },
            onDragStop: (x: number, y: number) => {
                console.log(x, y);
            },
            onResize: (handle: HandleType, x: number, y: number, width: number, height: number) => {
                console.log(handle, x, y, width, height);
                return true;
            },
            onResizeStart: (handle: HandleType, x: number, y: number, width: number, height: number) => {
                console.log(handle, x, y, width, height);
                return true;
            },
            onResizeStop: (x: number, y: number, width: number, height: number) => {
                console.log(x, y, width, height);
            },
            parent: true,
            preventDeactivation: false,
            resizable: true,
            scale: 1,
            w: 200,
            x: 0,
            y: 0,
            z: 100,
        });
    },
}).mount("#app");

// With auto dimensions
createApp({
    render() {
        return h(VueDraggableResizable, {
            h: "auto",
            w: "auto",
            z: "auto",
        });
    },
}).mount("#app");

// With scale array
createApp({
    render() {
        return h(VueDraggableResizable, {
            scale: [1.5, 1.5],
        });
    },
}).mount("#app");

// Type checks
const axis: AxisType = "x";
const handle: HandleType = "tl";

const props: VueDraggableResizableProps = {
    active: false,
    axis,
    handles: [handle, "br"],
    x: 0,
    y: 0,
};

// Verify props is used
console.log(props);

// Events
createApp({
    render() {
        return h(VueDraggableResizable, {
            "onDrag-stop": (left: number, top: number) => console.log(left, top),
            "onResize-stop": (left: number, top: number, width: number, height: number) =>
                console.log(left, top, width, height),
            "onUpdate:active": (value: boolean) => console.log(value),
            "onUpdate:h": (value: number) => console.log(value),
            "onUpdate:w": (value: number) => console.log(value),
            "onUpdate:x": (value: number) => console.log(value),
            "onUpdate:y": (value: number) => console.log(value),
            onActivated: () => console.log("activated"),
            onDeactivated: () => console.log("deactivated"),
            onDragging: (left: number, top: number) => console.log(left, top),
            onResizing: (left: number, top: number, width: number, height: number) =>
                console.log(left, top, width, height),
        });
    },
}).mount("#app");
