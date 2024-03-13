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
