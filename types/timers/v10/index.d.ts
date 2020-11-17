// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

export interface Timer extends NodeJS.Timer {}

export interface Immediate extends NodeJS.Immediate {}

export interface Timeout extends NodeJS.Timeout {}

export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
export namespace setTimeout {
    function __promisify__(ms: number): Promise<void>;
    function __promisify__<T>(ms: number, value: T): Promise<T>;
}
export function clearTimeout(timeoutId: Timeout): void;
export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
export function clearInterval(intervalId: Timeout): void;
export function setImmediate(callback: (...args: any[]) => void, ...args: any[]): Immediate;
export namespace setImmediate {
    function __promisify__(): Promise<void>;
    function __promisify__<T>(value: T): Promise<T>;
}
export function clearImmediate(immediateId: Immediate): void;

declare global {
    function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
    namespace setTimeout {
        function __promisify__(ms: number): Promise<void>;
        function __promisify__<T>(ms: number, value: T): Promise<T>;
    }
    function clearTimeout(timeoutId: Timeout): void;
    function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
    function clearInterval(intervalId: Timeout): void;
    function setImmediate(callback: (...args: any[]) => void, ...args: any[]): Immediate;
    namespace setImmediate {
        function __promisify__(): Promise<void>;
        function __promisify__<T>(value: T): Promise<T>;
    }
    function clearImmediate(immediateId: Immediate): void;

    namespace NodeJS {
        interface Global {
            clearImmediate: typeof clearImmediate;
            clearInterval: typeof clearInterval;
            clearTimeout: typeof clearTimeout;

            setImmediate: typeof setImmediate;
            setInterval: typeof setInterval;
            setTimeout: typeof setTimeout;
        }

        interface Timer {
            ref(): this;
            refresh(): this;
            unref(): this;
        }

        class Immediate {
            ref(): this;
            refresh(): this;
            unref(): this;
            _onImmediate: Function; // to distinguish it from the Timeout class
        }

        class Timeout implements Timer {
            ref(): this;
            refresh(): this;
            unref(): this;
        }
    }
}
