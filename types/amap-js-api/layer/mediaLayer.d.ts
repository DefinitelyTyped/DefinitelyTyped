declare namespace AMap {
    namespace MediaLayer {
        interface Options extends Layer.Options {
            /**
             * 显示范围
             */
            bounds?: Bounds;
            /**
             * 是否可见
             */
            visible?: boolean;
            /**
             * 缩放范围
             */
            zooms?: [number, number];
            /**
             * 透明度
             */
            opacity?: number;
        }
    }

    abstract class MediaLayer<E extends HTMLElement> extends Layer {
        /**
         * @param options 图层选项
         */
        constructor(options?: MediaLayer.Options);
        /**
         * 设置显示范围
         * @param bounds 显示范围
         */
        setBounds(bounds: Bounds): void;
        /**
         * 获取显示的范围
         */
        getBounds(): Bounds;
        /**
         * 设置图层选项
         * @param options 图层选项
         */
        setOptions(options: Partial<MediaLayer.Options>): void;
        /**
         * 获取图层选项
         */
        getOptions(): Partial<MediaLayer.Options>;
        /**
         * 获取元素
         */
        getElement(): E | null;
    }

    /**
     * 图片图层
     */
    class ImageLayer extends MediaLayer<HTMLImageElement> {
        /**
         * 修改Image的Url
         * @param url url
         */
        setImageUrl(url: string): void;
        /**
         * 返回Image的Url
         */
        getImageUrl(): string | undefined;
    }

    class VideoLayer extends MediaLayer<HTMLVideoElement> {
        /**
         * 修改Video的Url
         * @param source url
         */
        setVideoUrl(source: string | string[]): void;
        /**
         * 返回Video的Url
         */
        getVideoUrl(): string | string[] | undefined;
    }

    class CanvasLayer extends MediaLayer<HTMLCanvasElement> {
        /**
         * 修改显示的Canvas
         * @param canvas Canvas对象
         */
        setCanvas(canvas: HTMLCanvasElement): void;
        /**
         * 返回Canvas对象
         */
        getCanvas(): HTMLCanvasElement | undefined;
        /**
         * 当canvas的内容发生改变是用于刷新图层
         */
        reFresh(): void;
    }
}
