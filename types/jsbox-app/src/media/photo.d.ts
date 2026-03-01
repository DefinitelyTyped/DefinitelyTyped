// JSBox Photo API TypeScript Declaration

// Known bugs in this module:
// 1. $photo.take does not support a format parameter, so if mediaTypes is set to [$mediaTypes.movie],
//    no data can be returned. In other words, it cannot be used to record videos.
// 2. Although the documentation claims that $photo.pick accepts the same parameters as $photo.take,
//    using any parameter other than edit and mediaTypes will cause a crash.
// 3. $photo.prompt can accept additional parameters, including those from $photo.take and the format parameter. However:
//      1. If taking a photo, and format is data or mediaTypes is [$mediaTypes.movie], no data will be returned.
//      2. If picking from the photo library, adding any parameter other than edit, mediaTypes, and format will cause a crash.
//      Summary: only the edit parameter is safe.

declare namespace PhotoTypes {
    type PhotoFormat = "image" | "data";

    interface PhotoResponseBase {
        status: boolean;
        filename: string;
        metadata: any; // A highly complex object; no type definition is provided.
    }

    type PhotoPayload<F extends PhotoFormat> = F extends "image" ? { image: UIImage } : { data: NSData };
    type PhotoResponse<F extends PhotoFormat = "image"> = PhotoResponseBase & PhotoPayload<F>;

    interface TakeOptions {
        edit?: boolean;
        mediaTypes?: string[];
        maxDuration?: number;
        quality?: number;
        showsControls?: boolean;
        device?: number;
        flashMode?: number;
        handler: (resp: PhotoResponse<"image">) => void;
    }

    interface PickOptionsBase {
        edit?: boolean;
        mediaTypes?: string[];
    }

    interface PickOptionsMultiBase {
        multi: true;
        selectionLimit?: number;
    }

    type PickPayload<F extends PhotoFormat, M extends boolean = false> = F extends "image"
        ? { format?: "image"; handler: (resp: PickResponse<"image", M>) => void }
        : { format: "data"; handler: (resp: PickResponse<"data", M>) => void };
    type PickOptions<F extends PhotoFormat = "image", M extends boolean = false> = PickOptionsBase &
        (M extends true ? PickOptionsMultiBase : {}) &
        PickPayload<F, M>;

    type PickResponse<F extends PhotoFormat = "image", M extends boolean = false> = M extends true
        ? { status: boolean; results: Omit<PhotoResponse<F>, "status">[] }
        : PhotoResponse<F>;

    interface PromptOptions {
        edit?: boolean;
        handler: (resp: PhotoResponse<"image">) => void;
    }

    interface ScanOptions {
        handler: (resp: ScanResponse) => void;
    }

    interface ScanResponse {
        status: boolean;
        results: UIImage[];
    }

    type SaveOptions =
        | {
              image: UIImage;
              handler: (success: boolean) => void;
          }
        | {
              data: NSData;
              handler: (success: boolean) => void;
          };

    interface FetchOptionsBase {
        count?: number;
        type?: number;
        subType?: number;
        size?: JBSize;
    }

    type FetchPayload<F extends PhotoFormat = "image"> = F extends "image"
        ? { format?: "image"; handler: (images: UIImage[]) => void }
        : { format: "data"; handler: (datas: NSData[]) => void };
    type FetchOptions<F extends PhotoFormat = "image"> = FetchOptionsBase & FetchPayload<F>;

    interface DeleteOptions {
        count: number;
        handler: (success: boolean) => void;
    }
}

interface JBPhoto {
    take(options: PhotoTypes.TakeOptions): void;
    take(options?: Omit<PhotoTypes.TakeOptions, "handler">): Promise<PhotoTypes.PhotoResponse<"image">>;
    pick(options: PhotoTypes.PickOptions<"image", true>): void;
    pick(options: PhotoTypes.PickOptions<"data", true>): void;
    pick(options: PhotoTypes.PickOptions<"image", false>): void;
    pick(options: PhotoTypes.PickOptions<"data", false>): void;
    pick(
        options?: Omit<PhotoTypes.PickOptions<"image", false>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"image", false>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"data", false>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"data", false>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"image", true>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"image", true>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"data", true>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"data", true>>;
    prompt(options: PhotoTypes.PromptOptions): void; // Only callback is supported
    scan(options: PhotoTypes.ScanOptions): void;
    scan(options?: Omit<PhotoTypes.ScanOptions, "handler">): Promise<PhotoTypes.ScanResponse>;
    save(options: PhotoTypes.SaveOptions): void; // Only callback is supported
    fetch(options: PhotoTypes.FetchOptions<"image"> | PhotoTypes.FetchOptions<"data">): void;
    fetch(options?: Omit<PhotoTypes.FetchOptions<"image">, "handler">): Promise<UIImage[]>;
    fetch(options: Omit<PhotoTypes.FetchOptions<"data">, "handler">): Promise<NSData[]>;
    delete(options?: PhotoTypes.DeleteOptions): void; // Only callback is supported
}

declare const $photo: JBPhoto;
