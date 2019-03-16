declare namespace AMap {
    namespace Icon {
        interface Options {
            size?: SizeValue;
            imageOffset?: Pixel;
            image?: string;
            imageSize?: SizeValue;
        }
    }

    class Icon extends EventEmitter {
        constructor(options?: Icon.Options);
        setImageSize(size: SizeValue): void;
        getImageSize(): Size;
    }
}
