import EventTargetMixin from "../util/eventtarget";

export interface KeyboardOptions {
    events?: string[];
    listenSynthesized?: boolean;
}

export interface KeyboardConstructor {
    new (target?: Element | Document, options?: KeyboardOptions): Keyboard;
}

export default class Keyboard extends EventTargetMixin {
    constructor(target?: Element | Document, options?: KeyboardOptions);

    onkeyevent: ((keysym: number, code: string | null, down: boolean, event?: KeyboardEvent) => void) | null;
    listenSynthesized: boolean;

    grab(): void;
    ungrab(): void;
    reset(): void;
    type(keysym: number, code?: string | null): void;
    sync(e: KeyboardEvent): void;
}
