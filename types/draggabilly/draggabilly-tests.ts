import Draggabilly, {
    DraggabillyClickEventName,
    DraggabillyEventCallback,
    DraggabillyMoveEventName,
    DraggabillyOptions,
    Position,
} from "draggabilly";

declare let bool: boolean;
declare let drag: Draggabilly;
declare let element: Element;
declare let htmlElement: HTMLElement;
declare let nodelist: NodeList;

// constructor
{
    new Draggabilly(bool ? ".test" : element);

    new Draggabilly(bool ? ".test" : element, {});

    new Draggabilly(bool ? ".test" : element, {
        axis: bool ? "x" : "y",
        containment: bool ? true : bool ? element : ".test",
        grid: [30, 40],
        handle: bool ? ".handle" : bool ? htmlElement : bool ? [htmlElement] : nodelist,
    });
}

// events
{
    drag = drag.on(
        bool ? "dragStart" : bool ? "dragEnd" : bool ? "pointerDown" : bool ? "pointerUp" : "staticClick",
        (event, pointer) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
        },
    );

    drag = drag.off(
        bool ? "dragStart" : bool ? "dragEnd" : bool ? "pointerDown" : bool ? "pointerUp" : "staticClick",
        (event, pointer) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
        },
    );

    drag = drag.once(
        bool ? "dragStart" : bool ? "dragEnd" : bool ? "pointerDown" : bool ? "pointerUp" : "staticClick",
        (event, pointer) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
        },
    );

    drag = drag.on(
        bool ? "dragMove" : "pointerMove",
        (event, pointer, moveVector) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
            // $ExpectType Position
            moveVector;
            // $ExpectType number
            moveVector.x;
            // $ExpectType number
            moveVector.y;
        },
    );

    drag = drag.off(
        bool ? "dragMove" : "pointerMove",
        (event, pointer, moveVector) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
            // $ExpectType Position
            moveVector;
            // $ExpectType number
            moveVector.x;
            // $ExpectType number
            moveVector.y;
        },
    );

    drag = drag.once(
        bool ? "dragMove" : "pointerMove",
        (event, pointer, moveVector) => {
            // $ExpectType Event
            event;
            // $ExpectType MouseEvent | Touch
            pointer;
            // $ExpectType Position
            moveVector;
            // $ExpectType number
            moveVector.x;
            // $ExpectType number
            moveVector.y;
        },
    );
}

// methods
{
    // $ExpectType void
    drag.disable();

    // $ExpectType void
    drag.enable();

    // $ExpectType void
    drag.setPosition(3, 4);

    // $ExpectType void
    drag.dragEnd();

    // $ExpectType void
    drag.destroy();
}
