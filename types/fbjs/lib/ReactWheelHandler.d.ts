declare class ReactWheelHandler {
    /**
     * onWheel is the callback that will be called with right frame rate if
     * any wheel events happened
     * onWheel should is to be called with two arguments: deltaX and deltaY in
     * this order
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        onWheel: Function,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        handleScrollX: boolean | Function,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        handleScrollY: boolean | Function,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        stopPropagation?: boolean | Function,
    );

    onWheel(event: any): void;

    _didWheel(): void;
}

declare namespace ReactWheelHandler {}
export = ReactWheelHandler;
