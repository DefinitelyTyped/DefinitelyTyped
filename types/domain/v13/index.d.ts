// Type definitions for non-npm package Node.js 13.13
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
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
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
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'node/events';
import { EventEmitter as EventEmitter_ } from 'events';
import * as timers from 'timers';

export {};

export class Domain extends EventEmitter_ implements NodeJS.Domain {
    run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
    add(emitter: EventEmitter_ | timers.Timer): void;
    remove(emitter: EventEmitter_ | timers.Timer): void;
    bind<T extends Function>(cb: T): T;
    intercept<T extends Function>(cb: T): T;
    members: Array<EventEmitter_ | timers.Timer>;
    enter(): void;
    exit(): void;
}

export function create(): Domain;

declare global {
    namespace NodeJS {
        interface Domain extends EventEmitter_ {
            run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
            add(emitter: EventEmitter_ | timers.Timer): void;
            remove(emitter: EventEmitter_ | timers.Timer): void;
            bind<T extends Function>(cb: T): T;
            intercept<T extends Function>(cb: T): T;

            addListener(event: string, listener: (...args: any[]) => void): this;
            on(event: string, listener: (...args: any[]) => void): this;
            once(event: string, listener: (...args: any[]) => void): this;
            removeListener(event: string, listener: (...args: any[]) => void): this;
            removeAllListeners(event?: string): this;
        }
    }
}
