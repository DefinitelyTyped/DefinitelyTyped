/// <reference types="node"/>

import { Transform, TransformCallback, TransformOptions } from "stream";

type OnTransform = (chunk: any, callback: TransformCallback) => void;

declare namespace ParallelTransform {
    interface Options extends TransformOptions {
        ordered?: boolean | undefined;
    }
}

declare const ParallelTransform: {
    (maxParallel: number, opts: ParallelTransform.Options | undefined | null, ontransform: OnTransform): Transform;
    (opts: ParallelTransform.Options | number | undefined | null, ontransform: OnTransform): Transform;
    (ontransform: OnTransform): Transform;
    new(maxParallel: number, opts: ParallelTransform.Options | undefined | null, ontransform: OnTransform): Transform;
    new(opts: ParallelTransform.Options | number | undefined | null, ontransform: OnTransform): Transform;
    new(ontransform: OnTransform): Transform;
};

export = ParallelTransform;
