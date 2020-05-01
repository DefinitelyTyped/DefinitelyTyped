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

import 'node/events';
import { EventEmitter as EventEmitter_ } from 'events';

export {};

export class Domain extends EventEmitter_ implements NodeJS.Domain {
    run(fn: Function): void;
    add(emitter: EventEmitter_): void;
    remove(emitter: EventEmitter_): void;
    bind(cb: (err: Error, data: any) => any): any;
    intercept(cb: (data: any) => any): any;
    members: any[];
    enter(): void;
    exit(): void;
}

export function create(): Domain;

declare global {
    namespace NodeJS {
        interface Events extends EventEmitter_ { }

        interface Domain extends EventEmitter_ {
            run(fn: Function): void;
            add(emitter: EventEmitter_): void;
            remove(emitter: EventEmitter_): void;
            bind(cb: (err: Error, data: any) => any): any;
            intercept(cb: (data: any) => any): any;

            addListener(event: string, listener: (...args: any[]) => void): this;
            on(event: string, listener: (...args: any[]) => void): this;
            once(event: string, listener: (...args: any[]) => void): this;
            removeListener(event: string, listener: (...args: any[]) => void): this;
            removeAllListeners(event?: string): this;
        }
    }
}
