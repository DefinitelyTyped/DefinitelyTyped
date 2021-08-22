declare module "stream/promises" {
    import { FinishedOptions, PipelineSource, PipelineTransform,
        PipelineDestination, PipelinePromise, PipelineOptions } from "stream";

    function finished(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, options?: FinishedOptions): Promise<void>;

    function pipeline<A extends PipelineSource<any>,
        B extends PipelineDestination<A, any>>(
        source: A,
        destination: B,
        options?: PipelineOptions
    ): PipelinePromise<B>;
    function pipeline<A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        B extends PipelineDestination<T1, any>>(
        source: A,
        transform1: T1,
        destination: B,
        options?: PipelineOptions
    ): PipelinePromise<B>;
    function pipeline<A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        B extends PipelineDestination<T2, any>>(
        source: A,
        transform1: T1,
        transform2: T2,
        destination: B,
        options?: PipelineOptions
    ): PipelinePromise<B>;
    function pipeline<A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        B extends PipelineDestination<T3, any>>(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        destination: B,
        options?: PipelineOptions
    ): PipelinePromise<B>;
    function pipeline<A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        T4 extends PipelineTransform<T3, any>,
        B extends PipelineDestination<T4, any>>(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        transform4: T4,
        destination: B,
        options?: PipelineOptions
    ): PipelinePromise<B>;

    function pipeline(
        streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>,
        options?: PipelineOptions
    ): Promise<void>;
    function pipeline(
        stream1: NodeJS.ReadableStream,
        stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
        ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | PipelineOptions>,
    ): Promise<void>;
}
