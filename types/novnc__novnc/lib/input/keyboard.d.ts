export default class Keyboard {
    constructor(target: EventTarget);

    onkeyevent: (keysym: number | null, code: string, down: boolean, numlock?: boolean | null, capslock?: boolean | null) => void;

    grab(): void;
    ungrab(): void;
}
