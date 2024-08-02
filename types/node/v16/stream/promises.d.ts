declare module "stream/promises" {
    import {
        FinishedOptions,
        PipelineDestination,
        PipelineOptions,
        PipelinePromise,
        PipelineSource,
        PipelineTransform,
    } from "node:stream";
    function finished(
        stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream,
        options?: FinishedOptions,
    ): Promise<void>;
    function pipeline<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
        /** @deferred */ source: A,
        /** @deferred */ destination: B,
        options?: PipelineOptions,
    ): PipelinePromise<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        B extends PipelineDestination<T1, any>,
    >(
        /** @deferred */ source: A,
        /** @deferred */ transform1: T1,
        /** @deferred */ destination: B,
        options?: PipelineOptions,
    ): PipelinePromise<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        B extends PipelineDestination<T2, any>,
    >(
        /** @deferred */ source: A,
        /** @deferred */ transform1: T1,
        /** @deferred */ transform2: T2,
        /** @deferred */ destination: B,
        options?: PipelineOptions,
    ): PipelinePromise<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        B extends PipelineDestination<T3, any>,
    >(
        /** @deferred */ source: A,
        /** @deferred */ transform1: T1,
        /** @deferred */ transform2: T2,
        /** @deferred */ transform3: T3,
        /** @deferred */ destination: B,
        options?: PipelineOptions,
    ): PipelinePromise<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        T4 extends PipelineTransform<T3, any>,
        B extends PipelineDestination<T4, any>,
    >(
        /** @deferred */ source: A,
        /** @deferred */ transform1: T1,
        /** @deferred */ transform2: T2,
        /** @deferred */ transform3: T3,
        /** @deferred */ transform4: T4,
        /** @deferred */ destination: B,
        options?: PipelineOptions,
    ): PipelinePromise<B>;
    function pipeline(
        streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>,
        options?: PipelineOptions,
    ): Promise<void>;
    function pipeline(
        stream1: NodeJS.ReadableStream,
        stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
        ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | PipelineOptions>
    ): Promise<void>;
}
declare module "node:stream/promises" {
    export * from "stream/promises";
}
