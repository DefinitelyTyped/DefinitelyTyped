// Type definitions for element-resize-event 1.0.1
// Project: https://github.com/KyleAMathews/element-resize-event
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export = element_resize_event;
declare function element_resize_event(omNode: Element, callback: () => void): void;
declare namespace element_resize_event {
    function unbind(omNode: Element, callback: () => void): void;
}
