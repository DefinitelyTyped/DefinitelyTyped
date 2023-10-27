export default class Animation {
    animationLoop: ((time: DOMHighResTimeStamp) => void) | null;
    requestId: number | null;

    isAnimating: boolean;

    context: Window;

    constructor();

    start(): void;

    stop(): void;

    setAnimationLoop(callback: ((time: DOMHighResTimeStamp) => void) | null): void;
}
