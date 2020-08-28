// Type definitions for hat 0.0
// Project: https://github.com/substack/node-hat
// Definitions by: Sasha Grin <https://github.com/tup1tsa>
//                 Miro Yovchev <https://github.com/myovchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HatsList {
    [key: string]: any;
}

interface Rack {
    bits: number;
    base: number;
    hats: HatsList;

    (data?: any): string;
    get(id: string): any;
    set(id: string, value: any): Rack;
}

type CreateRack = (bits?: number, base?: number, expandBy?: number) => Rack;

interface Hat {
    (bits?: number, base?: number): string;
    rack: CreateRack;
}

declare const hat: Hat;
export = hat;
