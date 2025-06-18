interface InputEventInit extends UIEventInit {
    data?: string | null | undefined;
    isComposing?: boolean | undefined;
}

interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly isComposing: boolean;
}
declare var InputEvent: {
    prototype: InputEvent;
    new(type: string, eventInitDict?: InputEventInit): InputEvent;
};
