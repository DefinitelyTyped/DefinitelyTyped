interface detectTouchEvents {
    hasApi: boolean;
    maxTouchPoints: number;

    update(): void;
}

declare const detectTouchEvents: detectTouchEvents;
export default detectTouchEvents;
