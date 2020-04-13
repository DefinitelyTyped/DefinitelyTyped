// Type definitions for handtrackjs 0.0
// Project: LIBRARY URL
// Definitions by: George Evans <https://github.com/georgeevans1995>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as tf from '@tensorflow/tfjs';

export interface HandtrackParams {
    /* reduce input image size for gains in speed. */
    flipHorizontal: boolean;
    outputStride: number;
    /* maximum number of boxes to detect */
    imageScaleFactor: number;
    /* maximum number of boxes to detect */
    maxNumBoxes: number;
    /* ioU threshold for non-max suppression */
    iouThreshold: number;
    /* confidence threshold for predictions. */

    scoreThreshold: number;
    modelType: string;
}

export interface HandtrackPrediction {
    /* [x, y, width, height] */
    bbox: [number, number, number, number];
    /* class */
    class: string;
    /* score */
    score: number;
}

/* Returns a model object */
export function load(params?: Partial<HandtrackParams>): Promise<ObjectDetection>;
/* Starts video */
export function startVideo(video: HTMLVideoElement): Promise<boolean>;

/* Stops video */
export function stopVideo(video: HTMLVideoElement): Promise<boolean>;

/* Object detection class */
export class ObjectDetection {
    constructor(modelParams: HandtrackParams);

    /** path to model */
    modelPath: string;

    /** weight path */
    weightPath: string;

    /** model params */
    modelParams: HandtrackParams;

    /** Frames per second */
    fps: number;

    /** tensorflow model */
    model: tf.FrozenModel;

    /** Load the model */
    load(): Promise<void>;

    /* detect hands from image or video or canvas element */
    detect(input: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): Promise<HandtrackPrediction[]>;

    buildDetectedObjects(
        width: number,
        height: number,
        boxes: tf.Tensor2D,
        scores: number[],
        classes: string[],
    ): HandtrackPrediction[];

    /* get fps */
    getFPS(): number;

    /* Set the model params */
    setModelParameters(params: HandtrackParams): void;

    /* Get the model params */
    getModelParameters(): HandtrackParams;

    /* render the predictions to a canvas */
    renderPredictions(
        predictions: HandtrackPrediction[],
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
        mediasource: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement,
    ): void;

    /* dispose the model */
    dispose(): void;
}
