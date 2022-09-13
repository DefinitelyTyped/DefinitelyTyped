declare class ReactWheelHandler {
    /**
     * onWheel is the callback that will be called with right frame rate if
     * any wheel events happened
     * onWheel should is to be called with two arguments: deltaX and deltaY in
     * this order
     */
    constructor(
        // tslint:disable-next-line:ban-types
        onWheel: Function,
        // tslint:disable-next-line:ban-types
        handleScrollX: boolean | Function,
        // tslint:disable-next-line:ban-types
        handleScrollY: boolean | Function,
        // tslint:disable-next-line:ban-types
        stopPropagation?: boolean | Function,
    );

    onWheel(event: any): void;

    _didWheel(): void;
}

declare namespace ReactWheelHandler {}
export = ReactWheelHandler;
