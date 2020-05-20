export class Keyboard {
    constructor(defaults?: NvKeyboardDefaults);
    get_target(): Element;
    set_target(target: Element): void;
    get_focused(): boolean;
    set_focused(focused: boolean): void;
    get_onKeyPress(): (keysym: string, code: number, down: boolean) => void;
    set_onKeyPress(handler: (keysym: string, code: number, down: boolean) => void): void;
    grab(): void;
    ungrab(): void;
}

export class Mouse {
    constructor(defaults?: NvMouseDefaults);
    get_target(): Element;
    set_target(target: Element): void;
    get_focused(): boolean;
    set_focused(focused: boolean): void;
    get_touchButton(): number;
    set_touchButton(touchButton: number): void;
    get_onMouseButton(): (x: number, y: number, down: boolean, bmask: number) => void;
    set_onMouseButton(handler: (x: number, y: number, down: boolean, bmask: number) => void): void;
    get_onMouseMove(): (x: number, y: number) => void;
    set_onMouseMove(handler: (x: number, y: number) => void): void;
    grab(): void;
    ungrab(): void;
}

export interface NvKeyboardDefaults {
    target?: Element;
    focused?: boolean;
    onKeyPress?(keysym: string, code: number, down: boolean): void;
}

export interface NvMouseDefaults {
    target?: Element;
    focused?: boolean;
    touchButton?: number;
    onMouseButton?(x: number, y: number, down: boolean, bmask: number): void;
    onMouseMove?(x: number, y: number): void;
}
