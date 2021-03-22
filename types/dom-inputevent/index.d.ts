// Type definitions for non-npm package UI Events W3C Working Draft — Input Events — Interface InputEvent 1.0
// Project: https://w3c.github.io/uievents/#interface-inputevent
// Definitions by: Steven Sinatra <https://github.com/diagramatics>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface InputEventInit extends UIEventInit {
    data?: string | null;
    isComposing?: boolean;
}

interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly isComposing: boolean;
}
declare var InputEvent: {
    prototype: InputEvent;
    new(type: string, eventInitDict?: InputEventInit): InputEvent;
};
