declare class ReactWheelHandler {
    /**
     * onWheel is the callback that will be called with right frame rate if
     * any wheel events happened
     * onWheel should is to be called with two arguments: deltaX and deltaY in
     * this order
     */
    constructor(
        /*function*/
        onWheel: any,
        /*boolean|function*/
        handleScrollX,
        /*boolean|function*/
        handleScrollY,
        /*?boolean|?function*/
        stopPropagation?: any,
    );

    onWheel(
        /*object*/
        event,
    ): void;

    _didWheel(): void;
}

export = ReactWheelHandler;
