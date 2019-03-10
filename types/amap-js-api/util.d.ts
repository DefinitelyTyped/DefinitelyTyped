declare namespace AMap {
    namespace Util {
        function colorNameToHex(colorName: string): string;

        function rgbHex2Rgba(hex: string): string;

        function argbHex2Rgba(hex: string): string;

        function isEmpty(obj: object): boolean;

        function deleteItemFromArray<T = any>(array: T[], item: T): T[];

        function deleteItemFromArrayByIndex<T = any>(array: T[], index: number): T[];

        function indexOf<T = any>(array: T[], item: T): number;

        function format(floatNumber: number, digits?: number): number;

        function isArray(data: any): data is any[];

        function isDOM(data: any): data is HTMLElement;

        function includes<T = any>(array: T[], item: T): boolean;

        function requestIdleCallback(callback: (...args: any[]) => any, options?: { timeout?: number }): number;

        function cancelIdleCallback(handle: number): void;

        function requestAnimFrame<C = undefined>(callback: (this: C, ...args: any[]) => any, context?: C): number;

        function cancelAnimFrame(handle: number): void;

        function color2RgbaArray(color: string | number[]): [number, number, number, number];

        function color2Rgba(color: string | number[]): string;
    }
}
