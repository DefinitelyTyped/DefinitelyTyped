// Type definitions for non-npm package Node.js 12.19
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
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
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
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as net from 'net';

export {};

export function isatty(fd: number): boolean;
export class ReadStream extends NodeJS.ReadStream {}
/**
 * -1 - to the left from cursor
 *  0 - the entire line
 *  1 - to the right from cursor
 */
export type Direction = -1 | 0 | 1;
export class WriteStream extends NodeJS.WriteStream {}

declare global {
    namespace NodeJS {
        class ReadStream extends net.Socket {
            constructor(fd: number, options?: net.SocketConstructorOpts);
            isRaw: boolean;
            setRawMode(mode: boolean): this;
            isTTY: boolean;
        }

        class WriteStream extends net.Socket {
            constructor(fd: number);
            addListener(event: string, listener: (...args: any[]) => void): this;
            addListener(event: "resize", listener: () => void): this;

            emit(event: string | symbol, ...args: any[]): boolean;
            emit(event: "resize"): boolean;

            on(event: string, listener: (...args: any[]) => void): this;
            on(event: "resize", listener: () => void): this;

            once(event: string, listener: (...args: any[]) => void): this;
            once(event: "resize", listener: () => void): this;

            prependListener(event: string, listener: (...args: any[]) => void): this;
            prependListener(event: "resize", listener: () => void): this;

            prependOnceListener(event: string, listener: (...args: any[]) => void): this;
            prependOnceListener(event: "resize", listener: () => void): this;

            /**
             * Clears the current line of this WriteStream in a direction identified by `dir`.
             */
            clearLine(dir: Direction, callback?: () => void): boolean;
            /**
             * Clears this `WriteStream` from the current cursor down.
             */
            clearScreenDown(callback?: () => void): boolean;
            /**
             * Moves this WriteStream's cursor to the specified position.
             */
            cursorTo(x: number, y?: number, callback?: () => void): boolean;
            cursorTo(x: number, callback: () => void): boolean;
            /**
             * Moves this WriteStream's cursor relative to its current position.
             */
            moveCursor(dx: number, dy: number, callback?: () => void): boolean;
            /**
             * @default `process.env`
             */
            getColorDepth(env?: {}): number;
            hasColors(depth?: number): boolean;
            hasColors(env?: {}): boolean;
            hasColors(depth: number, env?: {}): boolean;
            getWindowSize(): [number, number];
            columns: number;
            rows: number;
            isTTY: boolean;
        }
    }
}
