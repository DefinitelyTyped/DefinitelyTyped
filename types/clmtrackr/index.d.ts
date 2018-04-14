// Type definitions for clmtrackr 1.1
// Project: https://github.com/auduno/clmtrackr
// Definitions by: hellochar <https://github.com/hellochar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TrackerParams {
    /** whether to use constant velocity model when fitting (default is true) */
    constantVelocity?: boolean;
    /** the size of the searchwindow around each point (default is 11) */
    searchWindow?: number;
    /** whether to use webGL if it is available (default is true) */
    useWebGL?: boolean;
    /** threshold for when to assume we've lost tracking (default is 0.50) */
    scoreThreshold?: number;
    /** whether to stop tracking when the fitting has converged (default is false) */
    stopOnConvergence?: boolean;
    /** object with parameters for facedetection : */
    faceDetection?: {
        /** whether to use web workers for face detection (default is true) */
        useWebWorkers?: boolean;
    };
}

type IPosition = [number, number];

type Model = any;

declare namespace _default {
    class tracker {
        constructor(params?: TrackerParams);

        init(model?: Model): void;

        start(element: HTMLVideoElement | HTMLCanvasElement): void;

        track(element: HTMLVideoElement | HTMLCanvasElement): IPosition[] | false;

        reset(): void;

        getConvergence(): number;

        getCurrentParameters(): number[];

        getCurrentPosition(): IPosition[] | false;

        getScore(): number;

        draw(canvas: HTMLCanvasElement): void;

        setResponseMode(type: "single" | "cycle" | "blend", list: Array<"raw" | "sobel" | "lbp">): void;
    }
    const version: string;
}

export default _default;
