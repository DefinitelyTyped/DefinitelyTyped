import { AnimationClip } from "./AnimationClip.js";

declare function convertArray(array: any, type: any, forceClone: boolean): any;

declare function isTypedArray(object: any): boolean;

declare function getKeyframeOrder(times: number[]): number[];

declare function sortedArray(values: any[], stride: number, order: number[]): any[];

declare function flattenJSON(jsonKeys: string[], times: any[], values: any[], valuePropertyName: string): void;

/**
 * @param sourceClip
 * @param name
 * @param startFrame
 * @param endFrame
 * @param [fps=30]
 */
declare function subclip(
    sourceClip: AnimationClip,
    name: string,
    startFrame: number,
    endFrame: number,
    fps?: number,
): AnimationClip;

/**
 * @param targetClip
 * @param [referenceFrame=0]
 * @param [referenceClip=targetClip]
 * @param [fps=30]
 */
declare function makeClipAdditive(
    targetClip: AnimationClip,
    referenceFrame?: number,
    referenceClip?: AnimationClip,
    fps?: number,
): AnimationClip;

declare const AnimationUtils: {
    convertArray: typeof convertArray;
    isTypedArray: typeof isTypedArray;
    getKeyframeOrder: typeof getKeyframeOrder;
    sortedArray: typeof sortedArray;
    flattenJSON: typeof flattenJSON;
    subclip: typeof subclip;
    makeClipAdditive: typeof makeClipAdditive;
};

export {
    AnimationUtils,
    convertArray,
    flattenJSON,
    getKeyframeOrder,
    isTypedArray,
    makeClipAdditive,
    sortedArray,
    subclip,
};
