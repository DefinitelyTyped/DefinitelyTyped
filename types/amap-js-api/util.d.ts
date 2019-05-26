declare namespace AMap {
    namespace Util {
        /**
         * 将颜色名转换为16进制RGB颜色值
         * @param colorName 颜色名
         */
        function colorNameToHex(colorName: string): string;
        /**
         * 将16进制RGB转为rgba(R,G,B,A)
         * @param hex 16进制RGB
         */
        function rgbHex2Rgba(hex: string): string;
        /**
         * 将16进制RGBA转为rgba(R,G,B,A)
         * @param hex 16进制RGBA
         */
        function argbHex2Rgba(hex: string): string;
        /**
         * 判断一个对象是都为空
         * @param obj 目标对象
         */
        function isEmpty(obj: object): boolean;
        /**
         * 从数组删除元素
         * @param array 数组
         * @param item 元素
         */
        function deleteItemFromArray<T = any>(array: T[], item: T): T[];
        /**
         * 按索引删除数组元素
         * @param array 数组
         * @param index 索引
         */
        function deleteItemFromArrayByIndex<T = any>(array: T[], index: number): T[];
        /**
         * 返回元素索引
         * @param array 数组
         * @param item 元素
         */
        function indexOf<T = any>(array: T[], item: T): number;
        /**
         * 保留小数点后指定位
         * @param floatNumber 数值
         * @param digits 小数点位数
         */
        function format(floatNumber: number, digits?: number): number;
        /**
         * 判断是否数组
         * @param data 判断对象
         */
        function isArray(data: any): data is any[];
        /**
         * 判断参数是否为DOM元素
         * @param data 判断对象
         */
        function isDOM(data: any): data is HTMLElement;
        /**
         * 判断数组是否包含某个元素
         * @param array 数组
         * @param item 元素
         */
        function includes<T = any>(array: T[], item: T): boolean;

        function requestIdleCallback(callback: (...args: any[]) => any, options?: { timeout?: number }): number;

        function cancelIdleCallback(handle: number): void;

        function requestAnimFrame<C = undefined>(callback: (this: C, ...args: any[]) => any, context?: C): number;

        function cancelAnimFrame(handle: number): void;

        function color2RgbaArray(color: string | number[]): [number, number, number, number];

        function color2Rgba(color: string | number[]): string;
    }
}
