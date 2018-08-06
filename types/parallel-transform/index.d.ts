// Type definitions for parallel-transform 1.1
// Project: https://github.com/mafintosh/parallel-transform
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Transform, TransformOptions, TransformCallback } from "stream";

type OnTransform = (chunk: any, callback: TransformCallback) => void;

declare namespace ParallelTransform {
    interface Options extends TransformOptions {
        ordered?: boolean;
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
