// Type definitions for UI Events W3C Working Draft — Input Events — Interface InputEvent 1.0
// Project: https://w3c.github.io/uievents/#interface-inputevent
// Definitions by: Steven Sinatra <https://github.com/diagramatics>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface InputEventInit extends UIEventInit {
    data?: string;
    isComposing: boolean;
}
interface InputEvent extends UIEvent {
    readonly data: string;
    readonly isComposing: boolean;
}

declare class InputEvent {
    constructor(typeArg: 'input' | 'beforeinput', inputEventInit?: InputEventInit);
}
