// Type definitions for element-resize-event 2.0.9
// Project: https://github.com/KyleAMathews/element-resize-event
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>, Pierre-Luc Gregoire <https://github.com/plgregoire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = element_resize_event;
declare function element_resize_event(omNode: Element, callback: () => void): void;
declare namespace element_resize_event {
    function unbind(omNode: Element, callback: () => void): void;
}
