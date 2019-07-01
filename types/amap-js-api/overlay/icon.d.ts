declare namespace AMap {
    namespace Icon {
        interface Options {
            /**
             * 图标尺寸
             */
            size?: SizeValue;
            /**
             * 图标取图偏移量
             */
            imageOffset?: Pixel;
            /**
             * 图标的取图地址
             */
            image?: string;
            /**
             * 图标所用图片大小
             */
            imageSize?: SizeValue;
        }
    }

    class Icon extends EventEmitter {
        /**
         * 点标记的图标
         * @param options 选项
         */
        constructor(options?: Icon.Options);
        /**
         * 设置图标图片大小
         * @param size 大小
         */
        setImageSize(size: SizeValue): void;
        /**
         * 获取图标图片大小
         */
        getImageSize(): Size;
    }
}
