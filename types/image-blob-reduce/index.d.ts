import type { Pica, PicaStatic } from "pica";

interface InternalProperties {
    image: HTMLImageElement;
    image_url: string;
    transform_width: number;
    transform_height: number;
    scale_factor: number;
    out_canvas?: HTMLCanvasElement;
    out_blob?: Blob;
}

type MethodNames = "_blob_to_image" | "_calculate_size" | "_transform" | "_create_blob" | "_cleanup";

declare namespace imageBlobReduce {
    interface ImageBlobReduce {
        init(): void;
        use(plugin: (args: any[]) => any, ...args: any[]): ImageBlobReduce;
        toBlob(blob: Blob, options?: ResizeOptions): Promise<Blob>;
        toCanvas(blob: Blob, options?: ResizeOptions): Promise<HTMLCanvasElement>;
        before(methodName: MethodNames, callback: (env: Env) => Promise<Env>): void;
        after(methodName: MethodNames, callback: (env: Env) => Promise<Env>): void;
    }

    interface Options {
        pica?: Pica;
    }

    interface Env extends InternalProperties {
        blob: Blob;
        opts: ResizeOptions;
    }

    interface ResizeOptions {
        alpha?: boolean;
        unsharpAmount?: number | undefined;
        unsharpRadius?: number | undefined;
        unsharpThreshold?: number | undefined;
        cancelToken?: Promise<unknown> | undefined;
        max?: number;
    }

    interface ImageBlobReduceStatic {
        new(options?: Options): ImageBlobReduce;
        (options?: Options): ImageBlobReduce;
        pica: PicaStatic;
    }
}

declare const imageBlobReduce: imageBlobReduce.ImageBlobReduceStatic;
export = imageBlobReduce;
