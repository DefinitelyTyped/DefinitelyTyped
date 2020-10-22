declare namespace AMap {
    class Size {
        /**
         * 地物对象的像素尺寸
         * @param width 宽度像素
         * @param height 长度像素
         */
        constructor(width: number, height: number);
        /**
         * 获得宽度
         */
        getWidth(): number;
        /**
         * 获得高度
         */
        getHeight(): number;
        /**
         * 以字符串形式返回尺寸大小对象
         */
        toString(): string;

        // internal
        contains(size: { x: number; y: number }): boolean;
    }
}
