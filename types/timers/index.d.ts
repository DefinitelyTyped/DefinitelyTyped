// Type definitions for non-npm package Node.js 14.14
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
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
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Anna Henningsen <https://github.com/addaleax>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Victor Perin <https://github.com/victorperin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="es2015.symbol" />

declare global {
    interface SymbolConstructor {
        readonly toPrimitive: symbol;
    }
}

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

        interface RefCounted {
            ref(): this;
            unref(): this;
        }

        // compatibility with older typings
        interface Timer extends RefCounted {
            hasRef(): boolean;
            refresh(): this;
            [Symbol.toPrimitive](): number;
        }

        interface Immediate extends RefCounted {
            hasRef(): boolean;
            _onImmediate: Function; // to distinguish it from the Timeout class
        }

        interface Timeout extends Timer {
            hasRef(): boolean;
            refresh(): this;
            [Symbol.toPrimitive](): number;
        }
    }
}
