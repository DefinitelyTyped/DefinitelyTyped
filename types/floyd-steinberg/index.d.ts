type ImageDataSubset = Partial<ImageData> & Pick<ImageData, "width" | "height" | "data">;

declare function floyd_steinberg<T extends ImageDataSubset>(image: T): T;
export = floyd_steinberg;
